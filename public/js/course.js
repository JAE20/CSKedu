// ===== COURSE CONTENT DATA =====
const courseData = {
    topics: [
        {
            id: 'intro-accounting',
            title: 'Introduction to Accounting',
            subtitle: 'Understanding the language of business',
            level: 'beginner',
            duration: '1 hour',
            content: `
                <div class="content-block">
                    <h3>What is Accounting?</h3>
                    <p>
                        Accounting is often called the "language of business" because it's the system we use to 
                        measure, process, and communicate financial information. Whether you're running a small 
                        business, managing your personal finances, or making investment decisions, understanding 
                        accounting principles is essential.
                    </p>
                    
                    <div class="highlight-box key-concept">
                        <h4>💡 Key Concept</h4>
                        <p>
                            <strong>Accounting</strong> is the systematic process of identifying, recording, measuring, 
                            classifying, verifying, summarizing, interpreting, and communicating financial information.
                        </p>
                    </div>
                </div>

                <div class="content-block">
                    <h3>Why Learn Accounting?</h3>
                    <ul>
                        <li><strong>Business Decision Making:</strong> Make informed decisions based on financial data</li>
                        <li><strong>Financial Planning:</strong> Create budgets and forecast future financial needs</li>
                        <li><strong>Performance Evaluation:</strong> Assess how well a business is performing</li>
                        <li><strong>Legal Compliance:</strong> Meet regulatory requirements for financial reporting</li>
                        <li><strong>Investment Analysis:</strong> Evaluate companies before investing</li>
                    </ul>
                </div>

                <div class="content-block">
                    <h3>Types of Accounting</h3>
                    <table class="accounting-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Focus</th>
                                <th>Primary Users</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Financial Accounting</strong></td>
                                <td>External reporting of financial position and performance</td>
                                <td>Investors, creditors, regulators</td>
                            </tr>
                            <tr>
                                <td><strong>Managerial Accounting</strong></td>
                                <td>Internal decision-making and planning</td>
                                <td>Managers, executives</td>
                            </tr>
                            <tr>
                                <td><strong>Tax Accounting</strong></td>
                                <td>Tax compliance and planning</td>
                                <td>Tax authorities, taxpayers</td>
                            </tr>
                            <tr>
                                <td><strong>Cost Accounting</strong></td>
                                <td>Analysis of production and operational costs</td>
                                <td>Manufacturing managers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: 'accounting-equation',
            title: 'The Accounting Equation',
            subtitle: 'The foundation of all accounting',
            level: 'beginner',
            duration: '2 hours',
            content: `
                <div class="content-block">
                    <h3>Understanding the Accounting Equation</h3>
                    <p>
                        The accounting equation is the foundation of double-entry bookkeeping and the basis for 
                        the balance sheet. It shows the relationship between what a company owns, what it owes, 
                        and the residual value belonging to owners.
                    </p>
                    
                    <div class="formula">
                        <span class="formula-label">The Fundamental Accounting Equation</span>
                        Assets = Liabilities + Equity
                    </div>
                    
                    <div class="highlight-box key-concept">
                        <h4>💡 Breaking Down the Equation</h4>
                        <p><strong>Assets:</strong> Resources owned by the business that have economic value</p>
                        <p><strong>Liabilities:</strong> Obligations or debts the business owes to others</p>
                        <p><strong>Equity:</strong> The residual interest in assets after deducting liabilities (owner's claim)</p>
                    </div>
                </div>

                <div class="content-block">
                    <h3>Why the Equation Always Balances</h3>
                    <p>
                        Every business transaction affects at least two accounts, and the equation must always stay in balance. 
                        This is because when a business acquires an asset, it must either:
                    </p>
                    <ul>
                        <li>Incur a liability (borrow money or buy on credit), OR</li>
                        <li>Use owner's equity (owner invests money or uses retained earnings)</li>
                    </ul>
                </div>

                <div class="interactive-example">
                    <div class="example-header">
                        <div class="example-icon">📝</div>
                        <h4 class="example-title">Example: Starting a Business</h4>
                    </div>
                    <div class="example-content">
                        <p><strong>Scenario:</strong> Sarah starts a consulting business by investing $10,000 of her own money.</p>
                        
                        <table class="accounting-table">
                            <thead>
                                <tr>
                                    <th>Assets</th>
                                    <th>=</th>
                                    <th>Liabilities</th>
                                    <th>+</th>
                                    <th>Equity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="debit">Cash: +$10,000</td>
                                    <td>=</td>
                                    <td>$0</td>
                                    <td>+</td>
                                    <td class="credit">Owner's Capital: +$10,000</td>
                                </tr>
                                <tr class="total-row">
                                    <td>$10,000</td>
                                    <td>=</td>
                                    <td>$0</td>
                                    <td>+</td>
                                    <td>$10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <button class="solution-toggle" onclick="toggleSolution(this)">Show More Examples</button>
                    <div class="solution-content">
                        <h4>Example 2: Purchasing Equipment</h4>
                        <p>Sarah purchases office equipment for $3,000 cash.</p>
                        <table class="accounting-table">
                            <thead>
                                <tr>
                                    <th>Transaction Effect</th>
                                    <th>Assets</th>
                                    <th>Liabilities</th>
                                    <th>Equity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Before</td>
                                    <td>$10,000</td>
                                    <td>$0</td>
                                    <td>$10,000</td>
                                </tr>
                                <tr>
                                    <td>Changes</td>
                                    <td class="debit">Equipment: +$3,000<br>Cash: -$3,000</td>
                                    <td>$0</td>
                                    <td>$0</td>
                                </tr>
                                <tr class="total-row">
                                    <td>After</td>
                                    <td>$10,000</td>
                                    <td>$0</td>
                                    <td>$10,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><em>Note: Total assets remain $10,000 because one asset increased while another decreased by the same amount.</em></p>
                    </div>
                </div>
            `
        },
        {
            id: 'double-entry',
            title: 'Double-Entry Bookkeeping',
            subtitle: 'Recording transactions with debits and credits',
            level: 'beginner',
            duration: '3 hours',
            content: `
                <div class="content-block">
                    <h3>What is Double-Entry Bookkeeping?</h3>
                    <p>
                        Double-entry bookkeeping is a system where every transaction is recorded in at least two accounts. 
                        For every debit entry, there must be a corresponding credit entry of equal value.
                    </p>
                    
                    <div class="highlight-box key-concept">
                        <h4>💡 The Golden Rule</h4>
                        <p><strong>Debits = Credits</strong></p>
                        <p>For every transaction, the total debits must equal the total credits.</p>
                    </div>
                </div>

                <div class="content-block">
                    <h3>Understanding Debits and Credits</h3>
                    
                    <table class="accounting-table">
                        <thead>
                            <tr>
                                <th>Account Type</th>
                                <th>Increases With</th>
                                <th>Decreases With</th>
                                <th>Normal Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Assets</strong></td>
                                <td class="debit">Debit</td>
                                <td class="credit">Credit</td>
                                <td class="debit">Debit</td>
                            </tr>
                            <tr>
                                <td><strong>Liabilities</strong></td>
                                <td class="credit">Credit</td>
                                <td class="debit">Debit</td>
                                <td class="credit">Credit</td>
                            </tr>
                            <tr>
                                <td><strong>Equity</strong></td>
                                <td class="credit">Credit</td>
                                <td class="debit">Debit</td>
                                <td class="credit">Credit</td>
                            </tr>
                            <tr>
                                <td><strong>Revenues</strong></td>
                                <td class="credit">Credit</td>
                                <td class="debit">Debit</td>
                                <td class="credit">Credit</td>
                            </tr>
                            <tr>
                                <td><strong>Expenses</strong></td>
                                <td class="debit">Debit</td>
                                <td class="credit">Credit</td>
                                <td class="debit">Debit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: 'financial-statements',
            title: 'Financial Statements',
            subtitle: 'The three core financial reports',
            level: 'intermediate',
            duration: '4 hours',
            content: `
                <div class="content-block">
                    <h3>The Three Main Financial Statements</h3>
                    <p>
                        Financial statements are formal records of a business's financial activities and position.
                    </p>
                    
                    <div class="formula">
                        <span class="formula-label">Balance Sheet Equation</span>
                        Assets = Liabilities + Shareholders' Equity
                    </div>
                </div>
            `
        }
    ]
};

// ===== COURSE INITIALIZATION =====
let currentTopicIndex = 0;
let completedTopics = [];

document.addEventListener('DOMContentLoaded', function() {
    initCourse();
    loadTopicNavigation();
    loadTopic(currentTopicIndex);
    updateCompletionRate();
});

function initCourse() {
    const saved = localStorage.getItem('accountingAcademy_progress');
    if (saved) {
        const progress = JSON.parse(saved);
        completedTopics = progress.completedTopics || [];
    }
    
    const path = window.AccountingAcademy.getURLParameter('path');
    if (path) {
        updateCourseForPath(path);
    }
}

function updateCourseForPath(path) {
    const pathTitles = {
        'student': 'Student Learning Path',
        'business': 'Business Owner Path',
        'accountant': 'Aspiring Accountant Path',
        'professional': 'Professional Path'
    };
    
    const title = pathTitles[path] || 'Accounting Fundamentals';
    document.getElementById('courseTitle').textContent = title;
}

function loadTopicNavigation() {
    const navList = document.getElementById('topicNavList');
    navList.innerHTML = '';
    
    courseData.topics.forEach((topic, index) => {
        const li = document.createElement('li');
        li.className = 'topic-nav-item';
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'topic-nav-link';
        if (index === currentTopicIndex) link.classList.add('active');
        if (completedTopics.includes(topic.id)) link.classList.add('completed');
        
        link.textContent = topic.title;
        link.onclick = (e) => {
            e.preventDefault();
            loadTopic(index);
        };
        
        li.appendChild(link);
        navList.appendChild(li);
    });
}

function loadTopic(index) {
    if (index < 0 || index >= courseData.topics.length) return;
    
    currentTopicIndex = index;
    const topic = courseData.topics[index];
    
    const contentDiv = document.getElementById('topicContent');
    
    const html = `
        <div class="topic-section">
            <div class="topic-header">
                <h1 class="topic-title">${topic.title}</h1>
                <p class="topic-subtitle">${topic.subtitle}</p>
                <div class="topic-tags">
                    <span class="badge badge-${topic.level === 'beginner' ? 'success' : topic.level === 'intermediate' ? 'info' : 'warning'}">
                        ${topic.level.charAt(0).toUpperCase() + topic.level.slice(1)}
                    </span>
                    <span class="badge badge-info">⏱️ ${topic.duration}</span>
                </div>
            </div>
            
            ${topic.content}
            
            <div class="topic-navigation">
                <button class="nav-button ${index === 0 ? 'disabled' : ''}" 
                        onclick="loadTopic(${index - 1})" 
                        ${index === 0 ? 'disabled' : ''}>
                    ← Previous Topic
                </button>
                
                <button class="complete-topic-btn ${completedTopics.includes(topic.id) ? 'completed' : ''}" 
                        onclick="toggleTopicCompletion('${topic.id}')">
                    ${completedTopics.includes(topic.id) ? 'Completed' : 'Mark as Complete'}
                </button>
                
                <button class="nav-button ${index === courseData.topics.length - 1 ? 'disabled' : ''}" 
                        onclick="loadTopic(${index + 1})"
                        ${index === courseData.topics.length - 1 ? 'disabled' : ''}>
                    Next Topic →
                </button>
            </div>
        </div>
    `;
    
    contentDiv.innerHTML = html;
    loadTopicNavigation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopicCompletion(topicId) {
    const index = completedTopics.indexOf(topicId);
    
    if (index === -1) {
        completedTopics.push(topicId);
        window.AccountingAcademy.progressTracker.markTopicComplete(topicId);
    } else {
        completedTopics.splice(index, 1);
        const progress = window.AccountingAcademy.progressTracker.progress;
        progress.completedTopics = completedTopics;
        window.AccountingAcademy.progressTracker.saveProgress();
    }
    
    updateCompletionRate();
    loadTopic(currentTopicIndex);
}

function updateCompletionRate() {
    const rate = Math.round((completedTopics.length / courseData.topics.length) * 100);
    const rateElement = document.getElementById('completionRate');
    if (rateElement) {
        rateElement.textContent = rate;
    }
}

function toggleSolution(button) {
    const content = button.nextElementSibling;
    content.classList.toggle('visible');
    button.textContent = content.classList.contains('visible') ? 'Hide Solution' : 'Show Solution';
}