const express = require('express');
const app = express();
const path = require('path');
const { spawn } = require('child_process');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
// Listen on all interfaces by default. When printing the URL, prefer
// 'localhost' if the server is bound to 0.0.0.0 or :: so the link is
// directly clickable from the machine running the server.
const HOST = process.env.HOST || '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  const addr = server.address();
  const address = addr && addr.address ? addr.address : HOST;
  const port = addr && addr.port ? addr.port : PORT;
  const displayHost = (address === '::' || address === '0.0.0.0') ? 'localhost' : address;
  console.log(`Server running on port ${port}`);
  console.log(`Open: http://${displayHost}:${port}/`);
  // Start Tailwind watcher in development unless explicitly disabled
  let tailwindProc = null;
  function startTailwindWatcher() {
    const isProd = process.env.NODE_ENV === 'production';
    const disabled = process.env.START_TAILWIND === 'false';
    if (isProd || disabled) {
      console.log('Tailwind watcher: not started (production or disabled)');
      return;
    }

    try {
      const args = [
        'tailwindcss',
        '-i',
        './public/css/tailwind-input.css',
        '-o',
        './public/css/tailwind.css',
        '--watch',
      ];
      console.log('Starting Tailwind CSS watcher via npx:', ['npx'].concat(args).join(' '));
      tailwindProc = spawn('npx', args, { stdio: 'inherit' });

      tailwindProc.on('error', (err) => {
        console.error('Tailwind watcher error:', err && err.message ? err.message : err);
      });

      tailwindProc.on('exit', (code, signal) => {
        console.log(`Tailwind watcher exited${signal ? ' with signal ' + signal : ' with code ' + code}`);
        tailwindProc = null;
      });
    } catch (e) {
      console.error('Failed to spawn Tailwind watcher:', e && e.message ? e.message : e);
    }
  }

  function stopTailwindWatcher() {
    if (tailwindProc && !tailwindProc.killed) {
      console.log('Stopping Tailwind watcher...');
      try { tailwindProc.kill('SIGTERM'); } catch (err) { /* ignore */ }
    }
  }

  // ensure we clean up the watcher on process termination
  process.on('exit', stopTailwindWatcher);
  process.on('SIGINT', () => { stopTailwindWatcher(); process.exit(0); });
  process.on('SIGTERM', () => { stopTailwindWatcher(); process.exit(0); });

  startTailwindWatcher();
});