// Application Data
const fundsData = [
    {
        name: "Diversified Equity Fund",
        type: "Equity",
        returns: 14.03,
        benchmark: 11.89,
        riskLevel: "High"
    },
    {
        name: "Bond Fund", 
        type: "Debt",
        returns: 7.05,
        benchmark: 8.11,
        riskLevel: "Low"
    },
    {
        name: "Discovery Fund",
        type: "Equity", 
        returns: 23.54,
        benchmark: 17.50,
        riskLevel: "Very High"
    },
    {
        name: "Equity Advantage Fund",
        type: "Equity",
        returns: 17.93, 
        benchmark: 15.28,
        riskLevel: "High"
    },
    {
        name: "Sustainable Equity Fund",
        type: "Equity/ESG",
        returns: 11.35,
        benchmark: 9.25, 
        riskLevel: "Medium-High"
    },
    {
        name: "Flexi Cap Fund",
        type: "Flexi Equity",
        returns: 29.80,
        benchmark: 23.56,
        riskLevel: "Very High" 
    },
    {
        name: "Dynamic Advantage Fund",
        type: "Hybrid",
        returns: 12.50,
        benchmark: 10.20,
        riskLevel: "Medium"
    },
    {
        name: "Top 300 Alpha 50 Fund", 
        type: "Equity",
        returns: 15.20,
        benchmark: 13.80,
        riskLevel: "High"
    }
];

const alternativeInvestmentsData = [
    {
        name: "Embassy Office Parks REIT",
        type: "REIT",
        returns: 6.7,
        minInvestment: 15000,
        liquidity: "High",
        risk: "Medium"
    },
    {
        name: "Mindspace Business Parks REIT",
        type: "REIT", 
        returns: 6.9,
        minInvestment: 15000,
        liquidity: "High",
        risk: "Medium"
    },
    {
        name: "Brookfield India REIT",
        type: "REIT",
        returns: 7.3,
        minInvestment: 10000,
        liquidity: "High", 
        risk: "Medium"
    },
    {
        name: "Private Equity AIF",
        type: "AIF Cat II",
        returns: 15.0,
        minInvestment: 10000000,
        liquidity: "Low",
        risk: "High"
    },
    {
        name: "Venture Capital AIF", 
        type: "AIF Cat I",
        returns: 18.0,
        minInvestment: 10000000,
        liquidity: "Low",
        risk: "High"
    },
    {
        name: "P2P Lending",
        type: "Debt Alternative",
        returns: 12.0,
        minInvestment: 25000,
        liquidity: "Medium",
        risk: "Medium"
    },
    {
        name: "Gold ETF",
        type: "Commodity", 
        returns: 7.0,
        minInvestment: 1000,
        liquidity: "High",
        risk: "Medium"
    },
    {
        name: "Invoice Discounting",
        type: "Debt Alternative",
        returns: 14.0,
        minInvestment: 25000,
        liquidity: "Medium",
        risk: "Medium"
    }
];

const emergencyFundOptions = [
    {
        name: "High-Yield Savings Account",
        returns: 4.5,
        liquidity: "Instant",
        risk: "Very Low"
    },
    {
        name: "Liquid Mutual Funds", 
        returns: 6.5,
        liquidity: "1-2 days",
        risk: "Low"
    },
    {
        name: "Short-Term FD",
        returns: 7.0,
        liquidity: "Penalty on early withdrawal",
        risk: "Very Low"
    }
];

const riskProfiles = {
    "Conservative": {
        scoreRange: [0, 12],
        allocation: {
            "Bond Fund": 60,
            "Diversified Equity Fund": 20, 
            "Sustainable Equity Fund": 20,
            "Dynamic Advantage Fund": 0,
            "Discovery Fund": 0,
            "Equity Advantage Fund": 0,
            "Flexi Cap Fund": 0,
            "Top 300 Alpha 50 Fund": 0
        },
        description: "Focus on capital preservation with minimal risk tolerance",
        recommendations: [
            "Prioritize debt funds and conservative hybrid funds",
            "Limit equity exposure to large-cap and sustainable funds",
            "Consider liquid funds for emergency corpus",
            "Focus on tax-saving instruments like PPF"
        ]
    },
    "Moderate": {
        scoreRange: [13, 20],
        allocation: {
            "Bond Fund": 40,
            "Diversified Equity Fund": 30,
            "Discovery Fund": 15,
            "Flexi Cap Fund": 15,
            "Sustainable Equity Fund": 0,
            "Equity Advantage Fund": 0,
            "Dynamic Advantage Fund": 0,
            "Top 300 Alpha 50 Fund": 0
        },
        description: "Balanced approach seeking moderate growth with manageable risk",
        recommendations: [
            "Maintain balanced allocation between equity and debt",
            "Focus on large-cap and hybrid funds for stability",
            "Gradually increase equity exposure over time",
            "Consider SIP investments for rupee cost averaging"
        ]
    },
    "Aggressive": {
        scoreRange: [21, 30],
        allocation: {
            "Bond Fund": 10,
            "Discovery Fund": 30,
            "Flexi Cap Fund": 30,
            "Equity Advantage Fund": 20,
            "Sustainable Equity Fund": 10,
            "Diversified Equity Fund": 0,
            "Dynamic Advantage Fund": 0,
            "Top 300 Alpha 50 Fund": 0
        },
        description: "High growth potential with higher risk tolerance for long-term wealth creation",
        recommendations: [
            "Focus on high-growth equity funds and small/mid-cap exposure",
            "Maintain long-term investment horizon (7+ years)",
            "Consider direct equity investments for experienced investors",
            "Regular portfolio rebalancing is essential"
        ]
    }
};

const riskQuestions = [
    {
        question: "What is your age group?",
        options: [
            {"text": "20-30 years", "score": 5},
            {"text": "31-40 years", "score": 4},
            {"text": "41-50 years", "score": 3},
            {"text": "51-60 years", "score": 2},
            {"text": "Above 60 years", "score": 1}
        ]
    },
    {
        question: "What is your investment experience?",
        options: [
            {"text": "Beginner (0-2 years)", "score": 1},
            {"text": "Intermediate (2-5 years)", "score": 3},
            {"text": "Advanced (5+ years)", "score": 5}
        ]
    },
    {
        question: "What is your investment time horizon?",
        options: [
            {"text": "Less than 2 years", "score": 1},
            {"text": "2-5 years", "score": 2},
            {"text": "5-10 years", "score": 4},
            {"text": "More than 10 years", "score": 5}
        ]
    },
    {
        question: "How much portfolio decline can you tolerate in a year?",
        options: [
            {"text": "I cannot tolerate any decline", "score": 1},
            {"text": "Up to 5% decline", "score": 2},
            {"text": "Up to 15% decline", "score": 3},
            {"text": "Up to 25% decline", "score": 4},
            {"text": "More than 25% decline", "score": 5}
        ]
    },
    {
        question: "What is your primary investment goal?",
        options: [
            {"text": "Capital preservation", "score": 1},
            {"text": "Steady income generation", "score": 2},
            {"text": "Balanced growth and income", "score": 3},
            {"text": "Long-term capital growth", "score": 4},
            {"text": "Maximum wealth creation", "score": 5}
        ]
    },
    {
        question: "How comfortable are you with market volatility?",
        options: [
            {"text": "Very uncomfortable", "score": 1},
            {"text": "Uncomfortable", "score": 2},
            {"text": "Neutral", "score": 3},
            {"text": "Comfortable", "score": 4},
            {"text": "Very comfortable", "score": 5}
        ]
    }
];

// Application State
let currentStep = 1;
let userFinances = {
    monthlyIncome: 0,
    expenses: {},
    totalExpenses: 0,
    availableSavings: 0
};
let userEmergencyFund = {
    essentialExpenses: 0,
    monthsOfCoverage: 6,
    currentAmount: 0,
    buildTimeFrame: 12,
    targetAmount: 0,
    monthlyRequired: 0,
    selectedOption: 'savings'
};
let userRiskProfile = {
    answers: [],
    score: 0,
    profile: ""
};
let userAllocation = {};
let monthlyInvestment = 0;
let allocationChart = null;
let comparisonChart = null;
let emergencyProgressChart = null;

// CRITICAL DISCLAIMER MODAL FIX - Updated Implementation
function initializeDisclaimerModal() {
    console.log('Initializing disclaimer modal...');
    
    const modal = document.getElementById('disclaimerModal');
    const acceptBtn = document.querySelector('.modal-footer .btn--primary');
    
    if (!modal) {
        console.error('Disclaimer modal not found');
        return;
    }
    
    // Show modal on page load
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    console.log('Modal displayed');
    
    // Close modal function
    function closeModal() {
        console.log('Closing modal...');
        modal.style.display = 'none';
        modal.classList.add('hidden');
        console.log('Modal closed');
    }
    
    // Add event listener to accept button
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Accept button clicked');
            closeModal();
        });
    }
    
    // Close on modal background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            console.log('Background clicked');
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            console.log('Escape key pressed');
            closeModal();
        }
    });
    
    console.log('Disclaimer modal initialized with all event listeners');
}

// Legacy function for backward compatibility
function acknowledgeDisclaimer() {
    console.log('Legacy acknowledge disclaimer called');
    const modal = document.getElementById('disclaimerModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.add('hidden');
        console.log('Modal closed via legacy function');
    }
}

// Show disclaimer function
function showDisclaimer() {
    const modal = document.getElementById('disclaimerModal');
    if (modal) {
        modal.style.display = 'flex';  
        modal.classList.remove('hidden');
    }
}

// Navigation Functions
function nextStep() {
    console.log(`Attempting to move from step ${currentStep} to step ${currentStep + 1}`);
    
    if (validateCurrentStep()) {
        if (currentStep < 6) {
            currentStep++;
            console.log(`Moving to step ${currentStep}`);
            
            if (currentStep === 2) {
                initializeEmergencyFund();
            } else if (currentStep === 3) {
                initializeRiskQuestions();
            } else if (currentStep === 4) {
                initializeFundAllocation();
            } else if (currentStep === 5) {
                calculateAllProjections();
            } else if (currentStep === 6) {
                calculateProjections();
            }
            showStep(currentStep);
            updateNavigationButtons();
            updateProgressIndicator();
        }
    } else {
        console.log('Validation failed for current step');
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        console.log(`Moving back to step ${currentStep}`);
        showStep(currentStep);
        updateNavigationButtons();
        updateProgressIndicator();
    }
}

// Excel Export Function
function exportToExcel() {
    const btn = event.target;
    btn.classList.add('loading');
    btn.textContent = 'Generating Excel...';
    
    try {
        // Create workbook
        const wb = XLSX.utils.book_new();
        
        // Summary Sheet
        const summaryData = [
            ['Personal Finance Fund Allocation Report'],
            ['Generated on:', new Date().toLocaleDateString()],
            [''],
            ['User Profile Summary'],
            ['Monthly Income:', `₹${userFinances.monthlyIncome.toLocaleString('en-IN')}`],
            ['Total Expenses:', `₹${userFinances.totalExpenses.toLocaleString('en-IN')}`],
            ['Available Savings:', `₹${userFinances.availableSavings.toLocaleString('en-IN')}`],
            ['Emergency Fund Target:', `₹${userEmergencyFund.targetAmount.toLocaleString('en-IN')}`],
            ['Emergency Fund Monthly Required:', `₹${userEmergencyFund.monthlyRequired.toLocaleString('en-IN')}`],
            ['Risk Profile:', userRiskProfile.profile],
            ['Risk Score:', `${userRiskProfile.score}/30`],
            ['Monthly Investment:', `₹${monthlyInvestment.toLocaleString('en-IN')}`],
            [''],
            ['Extended Projections Summary'],
            ['5-Year Expected Value:', calculateExtendedProjections(5)],
            ['10-Year Expected Value:', calculateExtendedProjections(10)],
            ['15-Year Expected Value:', calculateExtendedProjections(15)],
            ['20-Year Expected Value:', calculateExtendedProjections(20)],
            [''],
            ['Branding Information'],
            ['Designed & Conceptualized by:', 'Vipin Nair'],
            ['Email:', 'audit.vipin@gmail.com']
        ];
        
        const summaryWS = XLSX.utils.aoa_to_sheet(summaryData);
        XLSX.utils.book_append_sheet(wb, summaryWS, 'Summary');
        
        // Extended Projections Sheet
        const extendedProjectionsData = [
            ['Extended Investment Projections (5, 10, 15, 20 Years)'],
            ['Fund Name', '5-Year Value (₹)', '10-Year Value (₹)', '15-Year Value (₹)', '20-Year Value (₹)']
        ];
        
        Object.keys(userAllocation).forEach(fundName => {
            if (userAllocation[fundName] > 0) {
                const allocation = userAllocation[fundName];
                const monthlyAmount = (monthlyInvestment * allocation) / 100;
                const fund = fundsData.find(f => f.name === fundName);
                const returns = fund ? fund.returns : 8;
                
                const projections = calculateExtendedFundProjections(monthlyAmount, returns);
                extendedProjectionsData.push([
                    fundName,
                    Math.round(projections.year5),
                    Math.round(projections.year10),
                    Math.round(projections.year15),
                    Math.round(projections.year20)
                ]);
            }
        });
        
        const extendedProjectionsWS = XLSX.utils.aoa_to_sheet(extendedProjectionsData);
        XLSX.utils.book_append_sheet(wb, extendedProjectionsWS, 'Extended_Projections');
        
        // Emergency Fund Sheet
        const emergencyData = [
            ['Emergency Fund Planning'],
            ['Essential Monthly Expenses:', `₹${userEmergencyFund.essentialExpenses.toLocaleString('en-IN')}`],
            ['Months of Coverage:', userEmergencyFund.monthsOfCoverage],
            ['Current Emergency Fund:', `₹${userEmergencyFund.currentAmount.toLocaleString('en-IN')}`],
            ['Target Amount:', `₹${userEmergencyFund.targetAmount.toLocaleString('en-IN')}`],
            ['Amount Needed:', `₹${(userEmergencyFund.targetAmount - userEmergencyFund.currentAmount).toLocaleString('en-IN')}`],
            ['Build Time Frame (months):', userEmergencyFund.buildTimeFrame],
            ['Monthly Contribution Required:', `₹${userEmergencyFund.monthlyRequired.toLocaleString('en-IN')}`],
            ['Selected Investment Option:', userEmergencyFund.selectedOption],
            [''],
            ['Emergency Fund Options Comparison'],
            ['Option', 'Expected Return (%)', 'Liquidity', 'Risk Level'],
            ...emergencyFundOptions.map(option => [
                option.name,
                option.returns,
                option.liquidity,
                option.risk
            ])
        ];
        
        const emergencyWS = XLSX.utils.aoa_to_sheet(emergencyData);
        XLSX.utils.book_append_sheet(wb, emergencyWS, 'Emergency_Fund');
        
        // Expense Breakdown Sheet
        const expenseData = [
            ['Expense Category', 'Monthly Amount (₹)'],
            ['Housing & Utilities', userFinances.expenses['expense-housing'] || 0],
            ['Food & Groceries', userFinances.expenses['expense-food'] || 0],
            ['Transportation', userFinances.expenses['expense-transport'] || 0],
            ['Healthcare', userFinances.expenses['expense-healthcare'] || 0],
            ['Entertainment & Lifestyle', userFinances.expenses['expense-entertainment'] || 0],
            ['Insurance & EMIs', userFinances.expenses['expense-insurance'] || 0],
            ['Other Expenses', userFinances.expenses['expense-other'] || 0],
            [''],
            ['Total Expenses', userFinances.totalExpenses]
        ];
        
        const expenseWS = XLSX.utils.aoa_to_sheet(expenseData);
        XLSX.utils.book_append_sheet(wb, expenseWS, 'Expense_Breakdown');
        
        // Fund Allocation Sheet
        const allocationData = [
            ['Fund Name', 'Allocation (%)', 'Monthly Investment (₹)', 'Expected Return (%)', 'Risk Level']
        ];
        
        Object.keys(userAllocation).forEach(fundName => {
            if (userAllocation[fundName] > 0) {
                const allocation = userAllocation[fundName];
                const monthlyAmount = (monthlyInvestment * allocation) / 100;
                const fund = fundsData.find(f => f.name === fundName);
                
                allocationData.push([
                    fundName,
                    allocation,
                    Math.round(monthlyAmount),
                    fund ? fund.returns : 8,
                    fund ? fund.riskLevel : 'Medium'
                ]);
            }
        });
        
        const allocationWS = XLSX.utils.aoa_to_sheet(allocationData);
        XLSX.utils.book_append_sheet(wb, allocationWS, 'Fund_Allocation');
        
        // Alternative Investments Sheet
        const alternativeData = [
            ['Alternative Investment', 'Type', 'Expected Return (%)', 'Min Investment (₹)', 'Liquidity', 'Risk Level']
        ];
        
        alternativeInvestmentsData.forEach(investment => {
            alternativeData.push([
                investment.name,
                investment.type,
                investment.returns,
                investment.minInvestment,
                investment.liquidity,
                investment.risk
            ]);
        });
        
        const alternativeWS = XLSX.utils.aoa_to_sheet(alternativeData);
        XLSX.utils.book_append_sheet(wb, alternativeWS, 'Alternative_Investments');
        
        // Fund Details Sheet
        const fundDetailsData = [
            ['Fund Name', 'Type', 'Expected Return (%)', 'Benchmark (%)', 'Risk Level']
        ];
        
        fundsData.forEach(fund => {
            fundDetailsData.push([
                fund.name,
                fund.type,
                fund.returns,
                fund.benchmark,
                fund.riskLevel
            ]);
        });
        
        const fundDetailsWS = XLSX.utils.aoa_to_sheet(fundDetailsData);
        XLSX.utils.book_append_sheet(wb, fundDetailsWS, 'Fund_Details');
        
        // Generate filename with current date
        const today = new Date();
        const dateStr = today.getFullYear() + '-' + 
                       String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                       String(today.getDate()).padStart(2, '0');
        const filename = `Fund_Allocation_Report_${dateStr}.xlsx`;
        
        // Write and download file
        XLSX.writeFile(wb, filename);
        
        setTimeout(() => {
            btn.classList.remove('loading');
            btn.textContent = '📊 Export to Excel';
            alert('Excel report has been downloaded successfully!');
        }, 1000);
        
    } catch (error) {
        console.error('Error generating Excel file:', error);
        btn.classList.remove('loading');
        btn.textContent = '📊 Export to Excel';
        alert('Error generating Excel file. Please try again.');
    }
}

// Extended projections calculation functions
function calculateExtendedProjections(years) {
    let weightedReturns = 0;
    Object.keys(userAllocation).forEach(fundName => {
        const allocation = userAllocation[fundName];
        if (allocation > 0) {
            const fund = fundsData.find(f => f.name === fundName);
            const returns = fund ? fund.returns : 8;
            weightedReturns += (allocation / 100) * returns;
        }
    });
    
    const annualReturn = weightedReturns / 100;
    const monthlyReturn = annualReturn / 12;
    const months = years * 12;
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * (1 + monthlyReturn));
    
    return `₹${Math.round(futureValue).toLocaleString('en-IN')}`;
}

function calculateExtendedFundProjections(monthlyAmount, annualReturn) {
    const monthlyReturn = annualReturn / 100 / 12;
    
    return {
        year5: monthlyAmount * (((Math.pow(1 + monthlyReturn, 60) - 1) / monthlyReturn) * (1 + monthlyReturn)),
        year10: monthlyAmount * (((Math.pow(1 + monthlyReturn, 120) - 1) / monthlyReturn) * (1 + monthlyReturn)),
        year15: monthlyAmount * (((Math.pow(1 + monthlyReturn, 180) - 1) / monthlyReturn) * (1 + monthlyReturn)),
        year20: monthlyAmount * (((Math.pow(1 + monthlyReturn, 240) - 1) / monthlyReturn) * (1 + monthlyReturn))
    };
}

function showProjectionTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.projection-tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`${tabName}Projections`).classList.add('active');
}

function resetApplication() {
    if (confirm('Are you sure you want to start over? All data will be lost.')) {
        currentStep = 1;
        userFinances = { monthlyIncome: 0, expenses: {}, totalExpenses: 0, availableSavings: 0 };
        userEmergencyFund = {
            essentialExpenses: 0,
            monthsOfCoverage: 6,
            currentAmount: 0,
            buildTimeFrame: 12,
            targetAmount: 0,
            monthlyRequired: 0,
            selectedOption: 'savings'
        };
        userRiskProfile = { answers: [], score: 0, profile: "" };
        userAllocation = {};
        monthlyInvestment = 0;
        
        document.querySelectorAll('input').forEach(input => {
            input.value = '';
            if (input.type === 'radio') {
                input.checked = false;
            }
        });
        
        const elements = [
            'totalExpenses', 'availableSavings', 'riskScore', 'riskProfile',
            'totalAllocation', 'emergencyTarget', 'emergencyNeeded', 'emergencyMonthlyRequired',
            'summaryRiskProfile', 'summaryMonthlyInvestment', 'summaryAvailableSavings', 
            'summaryEmergencyFund', 'summaryExpectedValue', 'summaryExpectedReturn'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                if (id.includes('totalExpenses') || id.includes('availableSavings') || id.includes('emergency')) {
                    element.textContent = '₹0';
                } else if (id === 'riskScore') {
                    element.textContent = '0';
                } else if (id === 'riskProfile') {
                    element.textContent = '-';
                } else if (id === 'totalAllocation') {
                    element.textContent = '100';
                } else {
                    element.textContent = '';
                }
            }
        });
        
        document.querySelectorAll('.risk-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector('[data-option="savings"]')?.classList.add('selected');
        
        if (allocationChart) {
            allocationChart.destroy();
            allocationChart = null;
        }
        if (comparisonChart) {
            comparisonChart.destroy();
            comparisonChart = null;
        }
        if (emergencyProgressChart) {
            emergencyProgressChart.destroy();
            emergencyProgressChart = null;
        }
        
        showStep(1);
        updateNavigationButtons();
        updateProgressIndicator();
        hideAllErrors();
    }
}

function saveResults() {
    const dataToSave = {
        userFinances,
        userEmergencyFund,
        userRiskProfile,
        userAllocation,
        monthlyInvestment,
        timestamp: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('fundAllocationData', JSON.stringify(dataToSave));
        alert('Your results have been saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Unable to save results. Please ensure your browser supports local storage.');
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing application...');
    
    // Initialize disclaimer modal first - CRITICAL FIX
    initializeDisclaimerModal();
    
    initializeExpenseInputs();
    updateNavigationButtons();
    loadSavedData();
    
    setTimeout(() => {
        const monthlyInvestmentInput = document.getElementById('monthlyInvestment');
        if (monthlyInvestmentInput) {
            monthlyInvestmentInput.addEventListener('input', calculateProjections);
        }
    }, 100);
});

// Step 1: Income & Expense Functions
function initializeExpenseInputs() {
    console.log('Initializing expense inputs...');
    
    const expenseInputIds = [
        'expense-housing', 'expense-food', 'expense-transport', 
        'expense-healthcare', 'expense-entertainment', 'expense-insurance', 'expense-other'
    ];
    
    const monthlyIncomeInput = document.getElementById('monthlyIncome');
    
    expenseInputIds.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', calculateTotalExpenses);
            input.addEventListener('change', calculateTotalExpenses);
            console.log(`Added event listeners to ${id}`);
        }
    });
    
    if (monthlyIncomeInput) {
        monthlyIncomeInput.addEventListener('input', calculateTotalExpenses);
        monthlyIncomeInput.addEventListener('change', calculateTotalExpenses);
        console.log('Added event listeners to monthlyIncome');
    }
}

function calculateTotalExpenses() {
    console.log('Calculating total expenses...');
    
    const expenseInputIds = [
        'expense-housing', 'expense-food', 'expense-transport', 
        'expense-healthcare', 'expense-entertainment', 'expense-insurance', 'expense-other'
    ];
    
    let totalExpenses = 0;
    let expenseBreakdown = {};
    
    expenseInputIds.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            const value = parseFloat(input.value) || 0;
            totalExpenses += value;
            expenseBreakdown[id] = value;
        }
    });
    
    const monthlyIncomeInput = document.getElementById('monthlyIncome');
    const monthlyIncome = parseFloat(monthlyIncomeInput ? monthlyIncomeInput.value : 0) || 0;
    const availableSavings = monthlyIncome - totalExpenses;
    
    userFinances.monthlyIncome = monthlyIncome;
    userFinances.totalExpenses = totalExpenses;
    userFinances.availableSavings = availableSavings;
    userFinances.expenses = expenseBreakdown;
    
    const totalExpensesElement = document.getElementById('totalExpenses');
    const availableSavingsElement = document.getElementById('availableSavings');
    
    if (totalExpensesElement) {
        totalExpensesElement.textContent = `₹${totalExpenses.toLocaleString('en-IN')}`;
    }
    
    if (availableSavingsElement) {
        availableSavingsElement.textContent = `₹${availableSavings.toLocaleString('en-IN')}`;
        
        if (availableSavings < 0) {
            availableSavingsElement.style.color = 'var(--color-error)';
        } else {
            availableSavingsElement.style.color = 'var(--color-success)';
        }
    }
}

// Step 2: Emergency Fund Functions
function initializeEmergencyFund() {
    console.log('Initializing emergency fund...');
    
    const essentialExpensesInput = document.getElementById('essentialExpenses');
    const emergencyMonthsSelect = document.getElementById('emergencyMonths');
    const currentEmergencyFundInput = document.getElementById('currentEmergencyFund');
    const buildTimeFrameSelect = document.getElementById('buildTimeFrame');
    
    // Add event listeners
    [essentialExpensesInput, emergencyMonthsSelect, currentEmergencyFundInput, buildTimeFrameSelect].forEach(element => {
        if (element) {
            element.addEventListener('input', calculateEmergencyFund);
            element.addEventListener('change', calculateEmergencyFund);
        }
    });
    
    // Initialize option cards
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            userEmergencyFund.selectedOption = this.dataset.option;
            updateEmergencyProgressChart();
        });
    });
    
    // Set default values and calculate
    calculateEmergencyFund();
    updateEmergencyProgressChart();
}

function calculateEmergencyFund() {
    const essentialExpenses = parseFloat(document.getElementById('essentialExpenses')?.value) || 0;
    const monthsOfCoverage = parseInt(document.getElementById('emergencyMonths')?.value) || 6;
    const currentAmount = parseFloat(document.getElementById('currentEmergencyFund')?.value) || 0;
    const buildTimeFrame = parseInt(document.getElementById('buildTimeFrame')?.value) || 12;
    
    const targetAmount = essentialExpenses * monthsOfCoverage;
    const amountNeeded = Math.max(0, targetAmount - currentAmount);
    const monthlyRequired = buildTimeFrame > 0 ? amountNeeded / buildTimeFrame : 0;
    
    userEmergencyFund = {
        ...userEmergencyFund,
        essentialExpenses,
        monthsOfCoverage,
        currentAmount,
        buildTimeFrame,
        targetAmount,
        monthlyRequired
    };
    
    // Update display
    const elements = {
        'emergencyTarget': `₹${targetAmount.toLocaleString('en-IN')}`,
        'emergencyNeeded': `₹${amountNeeded.toLocaleString('en-IN')}`,
        'emergencyMonthlyRequired': `₹${Math.round(monthlyRequired).toLocaleString('en-IN')}`
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
    
    // Update available for investment
    const availableForInvestment = Math.max(0, userFinances.availableSavings - monthlyRequired);
    const availableForInvestmentElement = document.getElementById('availableForInvestment');
    if (availableForInvestmentElement) {
        availableForInvestmentElement.textContent = availableForInvestment.toLocaleString('en-IN');
    }
    
    updateEmergencyProgressChart();
}

function updateEmergencyProgressChart() {
    const ctx = document.getElementById('emergencyProgressChart');
    if (!ctx) return;
    
    const context = ctx.getContext('2d');
    
    const currentAmount = userEmergencyFund.currentAmount;
    const targetAmount = userEmergencyFund.targetAmount;
    const progressPercentage = targetAmount > 0 ? (currentAmount / targetAmount) * 100 : 0;
    
    if (emergencyProgressChart) {
        emergencyProgressChart.destroy();
    }
    
    emergencyProgressChart = new Chart(context, {
        type: 'doughnut',
        data: {
            labels: ['Current Fund', 'Remaining'],
            datasets: [{
                data: [currentAmount, Math.max(0, targetAmount - currentAmount)],
                backgroundColor: ['#1FB8CD', '#ECEBD5'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            return `${context.label}: ₹${value.toLocaleString('en-IN')}`;
                        }
                    }
                }
            }
        }
    });
}

// Step 3: Risk Assessment Functions
function initializeRiskQuestions() {
    const questionsContainer = document.getElementById('riskQuestions');
    if (!questionsContainer) {
        console.warn('Risk questions container not found');
        return;
    }
    
    console.log('Initializing risk questions...');
    questionsContainer.innerHTML = '';
    
    riskQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'risk-question';
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionTitle);
        
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'risk-options';
        
        question.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'risk-option';
            optionDiv.onclick = () => selectRiskOption(index, optionIndex, optionDiv);
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question_${index}`;
            radio.value = option.score;
            
            const label = document.createElement('span');
            label.textContent = option.text;
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionsDiv.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

function selectRiskOption(questionIndex, optionIndex, selectedDiv) {
    console.log(`Selected option ${optionIndex} for question ${questionIndex}`);
    
    const questionDiv = selectedDiv.closest('.risk-question');
    const options = questionDiv.querySelectorAll('.risk-option');
    options.forEach(option => option.classList.remove('selected'));
    
    selectedDiv.classList.add('selected');
    selectedDiv.querySelector('input[type="radio"]').checked = true;
    
    userRiskProfile.answers[questionIndex] = riskQuestions[questionIndex].options[optionIndex].score;
    
    calculateRiskScore();
}

function calculateRiskScore() {
    const totalScore = userRiskProfile.answers.reduce((sum, score) => sum + (score || 0), 0);
    userRiskProfile.score = totalScore;
    
    if (totalScore <= 12) {
        userRiskProfile.profile = "Conservative";
    } else if (totalScore <= 20) {
        userRiskProfile.profile = "Moderate";
    } else {
        userRiskProfile.profile = "Aggressive";
    }
    
    console.log('Risk profile calculated:', userRiskProfile);
    
    const riskScoreElement = document.getElementById('riskScore');
    const riskProfileElement = document.getElementById('riskProfile');
    
    if (riskScoreElement) {
        riskScoreElement.textContent = totalScore;
    }
    if (riskProfileElement) {
        riskProfileElement.textContent = userRiskProfile.profile;
    }
}

// Step 4: Fund Allocation Functions
function initializeFundAllocation() {
    const profile = userRiskProfile.profile;
    if (!profile || !riskProfiles[profile]) {
        console.error('Invalid risk profile:', profile);
        return;
    }
    
    console.log('Initializing fund allocation for profile:', profile);
    
    const recommendedAllocation = riskProfiles[profile].allocation;
    userAllocation = { ...recommendedAllocation };
    
    const descriptionElement = document.getElementById('allocationDescription');
    if (descriptionElement) {
        descriptionElement.textContent = 
            `Based on your ${profile.toLowerCase()} risk profile: ${riskProfiles[profile].description}`;
    }
    
    createAllocationSliders();
    updateAllocationChart();
}

function createAllocationSliders() {
    const slidersContainer = document.getElementById('allocationSliders');
    if (!slidersContainer) return;
    
    slidersContainer.innerHTML = '';
    
    Object.keys(userAllocation).forEach(fundName => {
        if (userAllocation[fundName] > 0) {
            const sliderGroup = document.createElement('div');
            sliderGroup.className = 'slider-group';
            
            const fund = fundsData.find(f => f.name === fundName);
            const returns = fund ? fund.returns : 0;
            
            sliderGroup.innerHTML = `
                <div class="slider-label">
                    <span>${fundName}</span>
                    <span class="slider-percentage">${userAllocation[fundName]}%</span>
                </div>
                <input type="range" class="allocation-slider" 
                       min="0" max="100" value="${userAllocation[fundName]}"
                       data-fund="${fundName}">
                <div class="fund-performance ${returns > 10 ? 'positive' : ''}">
                    Expected Return: ${returns}% annually
                </div>
            `;
            
            const slider = sliderGroup.querySelector('.allocation-slider');
            slider.addEventListener('input', function() {
                updateAllocation(fundName, parseInt(this.value));
            });
            
            slidersContainer.appendChild(sliderGroup);
        }
    });
}

function updateAllocation(fundName, value) {
    userAllocation[fundName] = value;
    
    const sliderGroup = document.querySelector(`[data-fund="${fundName}"]`).closest('.slider-group');
    const percentageSpan = sliderGroup.querySelector('.slider-percentage');
    percentageSpan.textContent = `${value}%`;
    
    const total = Object.values(userAllocation).reduce((sum, val) => sum + val, 0);
    const totalElement = document.getElementById('totalAllocation');
    if (totalElement) {
        totalElement.textContent = total;
    }
    
    updateAllocationChart();
}

function updateAllocationChart() {
    const ctx = document.getElementById('allocationChart');
    if (!ctx) return;
    
    const context = ctx.getContext('2d');
    
    const activeFunds = Object.keys(userAllocation).filter(name => userAllocation[name] > 0);
    const labels = activeFunds;
    const data = activeFunds.map(name => userAllocation[name]);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'];
    
    if (allocationChart) {
        allocationChart.destroy();
    }
    
    allocationChart = new Chart(context, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// Step 5: Comprehensive Projections Functions
function calculateAllProjections() {
    calculatePortfolioProjections();
    createIndividualFundProjections();
    createComparisonChart();
}

function calculatePortfolioProjections() {
    if (monthlyInvestment <= 0) return;
    
    let weightedReturns = 0;
    Object.keys(userAllocation).forEach(fundName => {
        const allocation = userAllocation[fundName];
        if (allocation > 0) {
            const fund = fundsData.find(f => f.name === fundName);
            const returns = fund ? fund.returns : 8;
            weightedReturns += (allocation / 100) * returns;
        }
    });
    
    const annualReturn = weightedReturns / 100;
    const monthlyReturn = annualReturn / 12;
    
    const periods = [1, 3, 5, 10, 15, 20];
    periods.forEach(years => {
        const months = years * 12;
        const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) * (1 + monthlyReturn));
        const totalInvested = monthlyInvestment * months;
        const returns = futureValue - totalInvested;
        
        const suffix = years === 1 ? '1Y' : `${years}Y`;
        const projectionElement = document.getElementById(`portfolioProjection${suffix}`);
        const investedElement = document.getElementById(`portfolioInvested${suffix}`);
        const returnsElement = document.getElementById(`portfolioReturns${suffix}`);
        
        if (projectionElement) {
            projectionElement.textContent = `₹${Math.round(futureValue).toLocaleString('en-IN')}`;
        }
        if (investedElement) {
            investedElement.textContent = totalInvested.toLocaleString('en-IN');
        }
        if (returnsElement) {
            returnsElement.textContent = Math.round(returns).toLocaleString('en-IN');
        }
    });
}

function createIndividualFundProjections() {
    const container = document.getElementById('individualFundsTable');
    if (!container) return;
    
    container.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Fund Name</th>
                    <th>Expected Return</th>
                    <th>Risk Level</th>
                    <th>5-Year Value</th>
                    <th>10-Year Value</th>
                    <th>15-Year Value</th>
                    <th>20-Year Value</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `;
    
    const tbody = container.querySelector('tbody');
    
    fundsData.forEach(fund => {
        const projections = calculateInvestmentProjections(monthlyInvestment, fund.returns, 'sip');
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="fund-name">${fund.name}</td>
            <td>${fund.returns}%</td>
            <td>${fund.riskLevel}</td>
            <td class="projection-value">₹${Math.round(projections.year5).toLocaleString('en-IN')}</td>
            <td class="projection-value">₹${Math.round(projections.year10).toLocaleString('en-IN')}</td>
            <td class="projection-value">₹${Math.round(projections.year15).toLocaleString('en-IN')}</td>
            <td class="projection-value">₹${Math.round(projections.year20).toLocaleString('en-IN')}</td>
        `;
        tbody.appendChild(row);
    });
}

function calculateInvestmentProjections(amount, annualReturn, investmentType) {
    const monthlyReturn = annualReturn / 100 / 12;
    
    if (investmentType === 'sip') {
        return {
            year1: amount * (((Math.pow(1 + monthlyReturn, 12) - 1) / monthlyReturn) * (1 + monthlyReturn)),
            year3: amount * (((Math.pow(1 + monthlyReturn, 36) - 1) / monthlyReturn) * (1 + monthlyReturn)),
            year5: amount * (((Math.pow(1 + monthlyReturn, 60) - 1) / monthlyReturn) * (1 + monthlyReturn)),
            year10: amount * (((Math.pow(1 + monthlyReturn, 120) - 1) / monthlyReturn) * (1 + monthlyReturn)),
            year15: amount * (((Math.pow(1 + monthlyReturn, 180) - 1) / monthlyReturn) * (1 + monthlyReturn)),
            year20: amount * (((Math.pow(1 + monthlyReturn, 240) - 1) / monthlyReturn) * (1 + monthlyReturn))
        };
    } else {
        return {
            year1: amount * Math.pow(1 + annualReturn / 100, 1),
            year3: amount * Math.pow(1 + annualReturn / 100, 3),
            year5: amount * Math.pow(1 + annualReturn / 100, 5),
            year10: amount * Math.pow(1 + annualReturn / 100, 10),
            year15: amount * Math.pow(1 + annualReturn / 100, 15),
            year20: amount * Math.pow(1 + annualReturn / 100, 20)
        };
    }
}

function createComparisonChart() {
    const ctx = document.getElementById('comparisonChart');
    if (!ctx) return;
    
    const context = ctx.getContext('2d');
    
    let portfolioReturn = 0;
    Object.keys(userAllocation).forEach(fundName => {
        const allocation = userAllocation[fundName];
        if (allocation > 0) {
            const fund = fundsData.find(f => f.name === fundName);
            const returns = fund ? fund.returns : 8;
            portfolioReturn += (allocation / 100) * returns;
        }
    });
    
    const investments = [
        { name: 'Your Portfolio', return: portfolioReturn },
        { name: 'Embassy REIT', return: 6.7 },
        { name: 'Gold ETF', return: 7.0 },
        { name: 'P2P Lending', return: 12.0 },
        { name: 'Fixed Deposits', return: 7.0 }
    ];
    
    const labels = investments.map(inv => inv.name);
    const projections10Y = investments.map(inv => {
        const projections = calculateInvestmentProjections(monthlyInvestment, inv.return, 'sip');
        return Math.round(projections.year10);
    });
    
    if (comparisonChart) {
        comparisonChart.destroy();
    }
    
    comparisonChart = new Chart(context, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '10-Year SIP Projection (₹)',
                data: projections10Y,
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'],
                borderWidth: 1,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ₹${context.parsed.y.toLocaleString('en-IN')}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + (value / 100000).toFixed(1) + 'L';
                        }
                    }
                }
            }
        }
    });
}

// Step 6: Results & Dashboard Functions
function calculateProjections() {
    const monthlyInvInput = document.getElementById('monthlyInvestment');
    const monthlyInv = parseFloat(monthlyInvInput ? monthlyInvInput.value : 0) || 0;
    monthlyInvestment = monthlyInv;
    
    let totalAllocation = 0;
    let weightedReturns = 0;
    
    Object.keys(userAllocation).forEach(fundName => {
        const allocation = userAllocation[fundName];
        if (allocation > 0) {
            const fund = fundsData.find(f => f.name === fundName);
            const returns = fund ? fund.returns : 8;
            totalAllocation += allocation;
            weightedReturns += (allocation / 100) * returns;
        }
    });
    
    updateSummaryCards(weightedReturns);
    createFinalInvestmentBreakdown();
    createFinalRecommendations();
}

function updateSummaryCards(weightedReturns) {
    const annualReturn = weightedReturns / 100;
    const monthlyReturn = annualReturn / 12;
    
    const months5Y = 5 * 12;
    const futureValue5Y = monthlyInvestment * (((Math.pow(1 + monthlyReturn, months5Y) - 1) / monthlyReturn) * (1 + monthlyReturn));
    const totalInvested5Y = monthlyInvestment * months5Y;
    const cagr = ((Math.pow(futureValue5Y / totalInvested5Y, 1/5) - 1) * 100);
    
    const elements = {
        summaryRiskProfile: userRiskProfile.profile,
        summaryMonthlyInvestment: `₹${monthlyInvestment.toLocaleString('en-IN')}`,
        summaryEmergencyFund: `₹${userEmergencyFund.targetAmount.toLocaleString('en-IN')}`,
        summaryAvailableSavings: `₹${userFinances.availableSavings.toLocaleString('en-IN')}`,
        summaryExpectedValue: `₹${Math.round(futureValue5Y).toLocaleString('en-IN')}`,
        summaryExpectedReturn: `${cagr.toFixed(1)}% CAGR`
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
}

function createFinalInvestmentBreakdown() {
    const breakdownContainer = document.getElementById('finalInvestmentBreakdown');
    if (!breakdownContainer) return;
    
    breakdownContainer.innerHTML = '';
    
    const headerRow = document.createElement('div');
    headerRow.className = 'breakdown-row breakdown-header';
    headerRow.innerHTML = `
        <div>Fund Name</div>
        <div>Allocation</div>
        <div>Monthly Amount</div>
        <div>Expected Return</div>
    `;
    breakdownContainer.appendChild(headerRow);
    
    Object.keys(userAllocation).forEach(fundName => {
        if (userAllocation[fundName] > 0) {
            const allocation = userAllocation[fundName];
            const monthlyAmount = (monthlyInvestment * allocation) / 100;
            const fund = fundsData.find(f => f.name === fundName);
            const expectedReturn = fund ? fund.returns : 8;
            
            const row = document.createElement('div');
            row.className = 'breakdown-row';
            row.innerHTML = `
                <div class="breakdown-fund">${fundName}</div>
                <div class="breakdown-percentage">${allocation}%</div>
                <div class="breakdown-amount">₹${Math.round(monthlyAmount).toLocaleString('en-IN')}</div>
                <div class="breakdown-returns">${expectedReturn}%</div>
            `;
            breakdownContainer.appendChild(row);
        }
    });
}

function createFinalRecommendations() {
    const container = document.getElementById('finalRecommendations');
    const profile = userRiskProfile.profile;
    
    if (!container || !riskProfiles[profile]) return;
    
    const recommendations = [
        'Build your emergency fund first before aggressive investing',
        'Review and rebalance your portfolio every 6-12 months',
        'Consider increasing your investment amount as your income grows',
        'Monitor fund performance against benchmarks regularly',
        'Stay invested for the long term to benefit from compounding',
        'Consider tax-saving investment options like ELSS funds'
    ];
    
    const profileRecommendations = riskProfiles[profile].recommendations;
    
    container.innerHTML = '';
    
    [...recommendations, ...profileRecommendations].forEach(recommendation => {
        const item = document.createElement('div');
        item.className = 'recommendation-item';
        item.textContent = recommendation;
        container.appendChild(item);
    });
}

function showStep(step) {
    console.log(`Showing step ${step}`);
    
    document.querySelectorAll('.step-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const stepElement = document.getElementById(`step${step}`);
    if (stepElement) {
        stepElement.classList.add('active');
        console.log(`Step ${step} is now visible`);
    } else {
        console.error(`Step element step${step} not found`);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        if (currentStep === 1) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }
    }
    
    if (nextBtn) {
        if (currentStep === 6) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-flex';
        }
    }
}

function updateProgressIndicator() {
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        
        if (index + 1 === currentStep) {
            step.classList.add('active');
        } else if (index + 1 < currentStep) {
            step.classList.add('completed');
        }
    });
}

// Validation Functions
function validateCurrentStep() {
    hideAllErrors();
    
    switch (currentStep) {
        case 1:
            return validateStep1();
        case 2:
            return validateStep2();
        case 3:
            return validateStep3();
        case 4:
            return validateStep4();
        case 5:
            return true;
        default:
            return true;
    }
}

function validateStep1() {
    console.log('Validating step 1...');
    
    const monthlyIncomeInput = document.getElementById('monthlyIncome');
    const monthlyIncome = parseFloat(monthlyIncomeInput ? monthlyIncomeInput.value : 0) || 0;
    
    if (monthlyIncome <= 0) {
        showError('step1Error', 'Please enter a valid monthly income.');
        return false;
    }
    
    if (userFinances.availableSavings <= 0) {
        showError('step1Error', 'Your expenses exceed your income. Please adjust your expenses or income to have positive savings for investment.');
        return false;
    }
    
    console.log('Step 1 validation passed');
    return true;
}

function validateStep2() {
    console.log('Validating step 2...');
    
    const essentialExpenses = parseFloat(document.getElementById('essentialExpenses')?.value) || 0;
    
    if (essentialExpenses <= 0) {
        showError('step2Error', 'Please enter your essential monthly expenses to plan your emergency fund.');
        return false;
    }
    
    if (userEmergencyFund.monthlyRequired > userFinances.availableSavings) {
        showError('step2Error', 'Required monthly emergency fund contribution exceeds your available savings. Consider adjusting the build timeframe or target amount.');
        return false;
    }
    
    console.log('Step 2 validation passed');
    return true;
}

function validateStep3() {
    console.log('Validating step 3...');
    
    const completedAnswers = userRiskProfile.answers.filter(answer => answer !== undefined && answer !== null).length;
    
    if (completedAnswers < riskQuestions.length) {
        showError('step3Error', 'Please answer all questions to proceed.');
        return false;
    }
    
    console.log('Step 3 validation passed');
    return true;
}

function validateStep4() {
    console.log('Validating step 4...');
    
    const monthlyInvInput = document.getElementById('monthlyInvestment');
    const monthlyInv = parseFloat(monthlyInvInput ? monthlyInvInput.value : 0) || 0;
    
    if (monthlyInv <= 0) {
        showError('step4Error', 'Please enter a valid monthly investment amount.');
        return false;
    }
    
    const availableAfterEmergency = userFinances.availableSavings - userEmergencyFund.monthlyRequired;
    if (monthlyInv > availableAfterEmergency) {
        showError('step4Error', `Monthly investment amount cannot exceed available amount after emergency fund contribution (₹${Math.round(availableAfterEmergency).toLocaleString('en-IN')}).`);
        return false;
    }
    
    const totalAllocation = Object.values(userAllocation).reduce((sum, val) => sum + val, 0);
    if (Math.abs(totalAllocation - 100) > 0.1) {
        showError('step4Error', 'Total allocation must equal 100%. Please adjust your allocations.');
        return false;
    }
    
    console.log('Step 4 validation passed');
    return true;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function hideAllErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.classList.remove('show');
    });
}

function loadSavedData() {
    try {
        const savedData = localStorage.getItem('fundAllocationData');
        if (savedData) {
            const data = JSON.parse(savedData);
            console.log('Saved data found:', data);
        }
    } catch (e) {
        console.log('Error loading saved data:', e);
    }
}