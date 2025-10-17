// ============================================
// DASHBOARD FUNCTIONALITY
// ============================================

// Initialize dashboard when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    loadDashboardData();
    updateStats();
    updateProgressBars();
    updateActivityList();
    updateAchievements();
    updateContinueLearning();
});

// Load all data from localStorage
function loadDashboardData() {
    const progress = JSON.parse(localStorage.getItem('topicProgress') || '{}');
    return progress;
}

// Update stat cards
function updateStats() {
    const progress = loadDashboardData();
    const completedTopics = Object.keys(progress).filter(key => progress[key]).length;
    const points = completedTopics * 100;
    const streak = calculateStreak();
    const timeSpent = calculateTimeSpent();

    // Update DOM elements
    document.getElementById('completedTopics').textContent = completedTopics;
    document.getElementById('totalPoints').textContent = points;
    document.getElementById('streakDays').textContent = streak;
    document.getElementById('timeSpent').textContent = timeSpent;
}

// Calculate learning streak
function calculateStreak() {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();
    
    if (!lastVisit) {
        localStorage.setItem('lastVisit', today);
        localStorage.setItem('streak', '1');
        return 1;
    }
    
    const lastDate = new Date(lastVisit);
    const currentDate = new Date(today);
    const diffTime = currentDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let currentStreak = parseInt(localStorage.getItem('streak') || '1');
    
    if (diffDays === 1) {
        currentStreak++;
        localStorage.setItem('streak', currentStreak.toString());
    } else if (diffDays > 1) {
        currentStreak = 1;
        localStorage.setItem('streak', '1');
    }
    
    localStorage.setItem('lastVisit', today);
    return currentStreak;
}

// Calculate time spent learning
function calculateTimeSpent() {
    const progress = loadDashboardData();
    const completedTopics = Object.keys(progress).filter(key => progress[key]).length;
    const estimatedHours = completedTopics * 0.5; // 30 min per topic
    return estimatedHours.toFixed(1) + 'h';
}

// Update progress bars for each learning path
function updateProgressBars() {
    const progress = loadDashboardData();
    
    // Define topics for each path
    const paths = {
        student: ['intro-to-accounting', 'accounting-equation'],
        business: ['intro-to-accounting', 'accounting-equation', 'double-entry'],
        accountant: ['intro-to-accounting', 'accounting-equation', 'double-entry', 'financial-statements'],
        professional: ['intro-to-accounting', 'accounting-equation', 'double-entry', 'financial-statements']
    };
    
    // Calculate and update each path
    Object.keys(paths).forEach(path => {
        const topics = paths[path];
        const completed = topics.filter(topic => progress[topic]).length;
        const percentage = (completed / topics.length) * 100;
        
        const progressBar = document.getElementById(`${path}Bar`);
        const progressText = document.getElementById(`${path}Progress`);
        
        if (progressBar && progressText) {
            progressBar.style.width = percentage + '%';
            progressText.textContent = Math.round(percentage) + '%';
        }
    });
}

// Update recent activity list
function updateActivityList() {
    const progress = loadDashboardData();
    const completedTopics = Object.keys(progress).filter(key => progress[key]);
    
    const activityList = document.getElementById('activityList');
    
    if (completedTopics.length === 0) {
        activityList.innerHTML = `
            <div class="activity-item">
                <div class="activity-icon"><i class="fas fa-info-circle"></i></div>
                <div class="activity-content">
                    <p>Start learning to see your progress here!</p>
                    <span class="activity-time">Welcome</span>
                </div>
            </div>
        `;
        return;
    }
    
    // Map topic IDs to readable names
    const topicNames = {
        'intro-to-accounting': 'Introduction to Accounting',
        'accounting-equation': 'The Accounting Equation',
        'double-entry': 'Double-Entry Bookkeeping',
        'financial-statements': 'Financial Statements'
    };
    
    // Generate activity items (show last 5)
    const activities = completedTopics.slice(-5).reverse().map(topicId => {
        const topicName = topicNames[topicId] || topicId;
        return `
            <div class="activity-item">
                <div class="activity-icon"><i class="fas fa-check-circle"></i></div>
                <div class="activity-content">
                    <p>Completed <strong>${topicName}</strong></p>
                    <span class="activity-time">Recently</span>
                </div>
            </div>
        `;
    }).join('');
    
    activityList.innerHTML = activities;
}

// Update achievements
function updateAchievements() {
    const progress = loadDashboardData();
    const completedCount = Object.keys(progress).filter(key => progress[key]).length;
    const streak = parseInt(localStorage.getItem('streak') || '1');
    
    // Achievement conditions
    const achievements = {
        'first-topic': completedCount >= 1,
        '5-topics': completedCount >= 4,
        'perfect-quiz': false, // Will be implemented with quiz feature
        'week-streak': streak >= 7,
        'practice-master': false, // Will be implemented with practice feature
        'path-complete': completedCount >= 4
    };
    
    // Update achievement badges
    Object.keys(achievements).forEach(achievementId => {
        const badge = document.querySelector(`[data-achievement="${achievementId}"]`);
        if (badge && achievements[achievementId]) {
            badge.classList.add('unlocked');
        }
    });
}

// Update continue learning card
function updateContinueLearning() {
    const progress = loadDashboardData();
    const completedTopics = Object.keys(progress).filter(key => progress[key]);
    
    const continueCard = document.getElementById('continueCard');
    
    // Topic progression order
    const topicOrder = [
        { id: 'intro-to-accounting', name: 'Introduction to Accounting', icon: 'fa-book-open' },
        { id: 'accounting-equation', name: 'The Accounting Equation', icon: 'fa-balance-scale' },
        { id: 'double-entry', name: 'Double-Entry Bookkeeping', icon: 'fa-exchange-alt' },
        { id: 'financial-statements', name: 'Financial Statements', icon: 'fa-file-invoice-dollar' }
    ];
    
    // Find next incomplete topic
    const nextTopic = topicOrder.find(topic => !progress[topic.id]);
    
    if (nextTopic) {
        continueCard.innerHTML = `
            <div class="continue-icon">
                <i class="fas ${nextTopic.icon}"></i>
            </div>
            <div class="continue-content">
                <h3>${nextTopic.name}</h3>
                <p>Continue your learning journey</p>
                <a href="course.html" class="btn btn-primary btn-sm mt-4">
                    <i class="fas fa-play"></i> Continue Learning
                </a>
            </div>
        `;
    } else {
        continueCard.innerHTML = `
            <div class="continue-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <div class="continue-content">
                <h3>All Topics Completed!</h3>
                <p>Congratulations on your achievement</p>
                <a href="practice.html" class="btn btn-primary btn-sm mt-4">
                    <i class="fas fa-tools"></i> Practice Your Skills
                </a>
            </div>
        `;
    }
}

// Export progress function
function exportProgress() {
    const progress = loadDashboardData();
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'accounting-academy-progress.json';
    link.click();
    
    URL.revokeObjectURL(url);
    alert('Progress exported successfully!');
}

// Reset progress function
function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        localStorage.removeItem('topicProgress');
        localStorage.removeItem('streak');
        localStorage.removeItem('lastVisit');
        
        alert('Progress has been reset.');
        window.location.reload();
    }
}