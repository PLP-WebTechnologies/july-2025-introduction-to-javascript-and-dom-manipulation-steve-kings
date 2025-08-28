// ========================================
// PART 1: JAVASCRIPT BASICS
// Variables, Data Types, Operators, Conditionals
// ========================================

// Global variables to store application state
let studentName = "";
let studentAge = 0;
let subjects = []; // Array to store subjects
let todos = []; // Array to store todo items
let todoIdCounter = 0; // Counter for unique todo IDs

// Initialize the application when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 JavaScript Fundamentals Assignment Loaded!");
    console.log("📚 Student Dashboard initialized");
    
    // Display welcome message with current date and time
    displayWelcomeMessage();
    
    // Set up color change functionality
    setupColorChanger();
});

// Function to display welcome message using conditionals and date manipulation
function displayWelcomeMessage() {
    const welcomeElement = document.getElementById('welcome-message');
    const currentHour = new Date().getHours();
    let greeting;
    
    // Conditional statements to determine greeting based on time
    if (currentHour < 12) {
        greeting = "Good Morning! 🌅";
    } else if (currentHour < 17) {
        greeting = "Good Afternoon! ☀️";
    } else {
        greeting = "Good Evening! 🌙";
    }
    
    // String concatenation and template literals
    const welcomeMessage = `${greeting} Welcome to your JavaScript learning journey!`;
    welcomeElement.textContent = welcomeMessage;
    
    console.log("✅ Part 1: Variables and conditionals demonstrated");
    console.log(`Current time: ${new Date().toLocaleTimeString()}`);
    console.log(`Greeting: ${greeting}`);
}

// Function to process student information (demonstrates input validation)
function processStudentInfo() {
    // Get input values
    const nameInput = document.getElementById('student-name').value.trim();
    const ageInput = parseInt(document.getElementById('student-age').value);
    const output = document.getElementById('student-output');
    
    // Input validation using conditionals
    if (!nameInput) {
        output.innerHTML = '<span style="color: red;">⚠️ Please enter your name!</span>';
        return;
    }
    
    if (isNaN(ageInput) || ageInput < 5 || ageInput > 120) {
        output.innerHTML = '<span style="color: red;">⚠️ Please enter a valid age (5-120)!</span>';
        return;
    }
    
    // Store in global variables
    studentName = nameInput;
    studentAge = ageInput;
    
    // Conditional logic for age categories
    let category;
    let emoji;
    
    if (ageInput < 13) {
        category = "Child";
        emoji = "🧒";
    } else if (ageInput < 20) {
        category = "Teenager";
        emoji = "👦";
    } else if (ageInput < 60) {
        category = "Adult";
        emoji = "👨";
    } else {
        category = "Senior";
        emoji = "👴";
    }
    
    // Calculate birth year
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - ageInput;
    
    // Display results using template literals
    output.innerHTML = `
        <div style="background: #F0FDF4; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #10B981;">
            <h4>📋 Student Information Processed:</h4>
            <p><strong>Name:</strong> ${studentName}</p>
            <p><strong>Age:</strong> ${ageInput} years old</p>
            <p><strong>Category:</strong> ${category} ${emoji}</p>
            <p><strong>Birth Year:</strong> ~${birthYear}</p>
            <p><strong>Status:</strong> ${ageInput >= 18 ? 'Adult ✅' : 'Minor 👶'}</p>
        </div>
    `;
    
    console.log("✅ Part 1: Student info processed", {name: studentName, age: ageInput, category});
}

// ========================================
// PART 2: JAVASCRIPT FUNCTIONS
// Custom Functions for Reusability
// ========================================

// Function 1: Grade Calculator with multiple operations
function calculateGrades() {
    const input = document.getElementById('grades-input').value.trim();
    const output = document.getElementById('grade-output');
    
    if (!input) {
        output.innerHTML = '<span style="color: red;">⚠️ Please enter some grades!</span>';
        return;
    }
    
    // Convert string input to array of numbers
    const gradesArray = input.split(',').map(grade => parseFloat(grade.trim()));
    
    // Validate grades
    const validGrades = gradesArray.filter(grade => !isNaN(grade) && grade >= 0 && grade <= 100);
    
    if (validGrades.length === 0) {
        output.innerHTML = '<span style="color: red;">⚠️ Please enter valid grades (0-100)!</span>';
        return;
    }
    
    // Calculate statistics using helper functions
    const average = calculateAverage(validGrades);
    const highest = getHighestGrade(validGrades);
    const lowest = getLowestGrade(validGrades);
    const letterGrade = getLetterGrade(average);
    const status = getPassStatus(average);
    
    // Display comprehensive results
    output.innerHTML = `
        <div style="background: #EFF6FF; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #3B82F6;">
            <h4>📊 Grade Analysis Results:</h4>
            <p><strong>Grades Entered:</strong> ${validGrades.join(', ')}</p>
            <p><strong>Average:</strong> ${average.toFixed(2)}%</p>
            <p><strong>Letter Grade:</strong> ${letterGrade}</p>
            <p><strong>Highest Grade:</strong> ${highest}%</p>
            <p><strong>Lowest Grade:</strong> ${lowest}%</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Total Grades:</strong> ${validGrades.length}</p>
        </div>
    `;
    
    console.log("✅ Part 2: Grade calculation function executed", {
        grades: validGrades,
        average: average.toFixed(2),
        letterGrade
    });
}

// Helper function to calculate average
function calculateAverage(grades) {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
}

// Helper function to get highest grade
function getHighestGrade(grades) {
    return Math.max(...grades);
}

// Helper function to get lowest grade
function getLowestGrade(grades) {
    return Math.min(...grades);
}

// Helper function to convert numeric grade to letter grade
function getLetterGrade(average) {
    if (average >= 90) return 'A+ 🌟';
    if (average >= 80) return 'B+ 👍';
    if (average >= 70) return 'C+ 👌';
    if (average >= 60) return 'D+ 🤔';
    return 'F ❌';
}

// Helper function to determine pass/fail status
function getPassStatus(average) {
    return average >= 60 ? 'PASSING ✅' : 'NEEDS IMPROVEMENT ❌';
}

// Function 2: Text Formatter with multiple formatting options
function formatText(formatType) {
    const input = document.getElementById('text-input').value;
    const output = document.getElementById('text-output');
    
    if (!input.trim()) {
        output.innerHTML = '<span style="color: red;">⚠️ Please enter some text to format!</span>';
        return;
    }
    
    let formattedText;
    let description;
    
    // Switch statement for different formatting types
    switch (formatType) {
        case 'uppercase':
            formattedText = input.toUpperCase();
            description = 'Converted to UPPERCASE';
            break;
        case 'lowercase':
            formattedText = input.toLowerCase();
            description = 'Converted to lowercase';
            break;
        case 'title':
            formattedText = toTitleCase(input);
            description = 'Converted to Title Case';
            break;
        case 'reverse':
            formattedText = reverseString(input);
            description = 'Text reversed';
            break;
        default:
            formattedText = input;
            description = 'No formatting applied';
    }
    
    // Display results with character count
    output.innerHTML = `
        <div style="background: #F0F9FF; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #0EA5E9;">
            <h4>✨ Text Formatting Results:</h4>
            <p><strong>Original:</strong> "${input}"</p>
            <p><strong>Formatted:</strong> "${formattedText}"</p>
            <p><strong>Action:</strong> ${description}</p>
            <p><strong>Character Count:</strong> ${formattedText.length} characters</p>
            <p><strong>Word Count:</strong> ${countWords(formattedText)} words</p>
        </div>
    `;
    
    console.log("✅ Part 2: Text formatting function executed", {
        original: input,
        formatted: formattedText,
        type: formatType
    });
}

// Helper function to convert text to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Helper function to count words
function countWords(str) {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

// ========================================
// PART 3: JAVASCRIPT LOOPS
// For, While, and Array Iteration
// ========================================

// Function demonstrating multiple types of loops
function generatePatterns() {
    const input = parseInt(document.getElementById('pattern-number').value);
    const output = document.getElementById('pattern-output');
    
    if (isNaN(input) || input < 1 || input > 10) {
        output.innerHTML = '<span style="color: red;">⚠️ Please enter a number between 1 and 10!</span>';
        return;
    }
    
    let result = '<div style="background: #FEF3C7; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #F59E0B;">';
    result += '<h4>🔢 Number Patterns Generated:</h4>';
    
    // Loop 1: For loop - Number sequence
    result += '<p><strong>1. Number Sequence (For Loop):</strong><br>';
    let sequence = '';
    for (let i = 1; i <= input; i++) {
        sequence += i + (i < input ? ', ' : '');
    }
    result += sequence + '</p>';
    
    // Loop 2: While loop - Multiplication table
    result += '<p><strong>2. Multiplication Table (While Loop):</strong><br>';
    let multiTable = '';
    let multiplier = 1;
    while (multiplier <= 5) {
        multiTable += `${input} × ${multiplier} = ${input * multiplier}<br>`;
        multiplier++;
    }
    result += multiTable + '</p>';
    
    // Loop 3: For loop - Star pattern
    result += '<p><strong>3. Star Pattern (Nested For Loop):</strong><br>';
    let starPattern = '';
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= i; j++) {
            starPattern += '⭐';
        }
        starPattern += '<br>';
    }
    result += starPattern + '</p>';
    
    // Loop 4: Array methods - Even numbers
    result += '<p><strong>4. Even Numbers (Array Methods):</strong><br>';
    const numbersArray = Array.from({length: input * 2}, (_, i) => i + 1);
    const evenNumbers = numbersArray.filter(num => num % 2 === 0);
    result += evenNumbers.join(', ') + '</p>';
    
    result += '</div>';
    output.innerHTML = result;
    
    console.log("✅ Part 3: Loop patterns generated", {
        input: input,
        sequence: sequence,
        evenNumbers: evenNumbers
    });
}

// Function to add subjects using array methods
function addSubject() {
    const input = document.getElementById('subject-input');
    const subject = input.value.trim();
    
    if (!subject) {
        alert('Please enter a subject name!');
        return;
    }
    
    // Check for duplicates using array methods
    if (subjects.some(s => s.toLowerCase() === subject.toLowerCase())) {
        alert('This subject is already in the list!');
        return;
    }
    
    subjects.push(subject);
    input.value = '';
    
    console.log("✅ Part 3: Subject added to array", {subject, totalSubjects: subjects.length});
}

// Function to display all subjects using forEach loop
function displayAllSubjects() {
    const output = document.getElementById('subjects-output');
    
    if (subjects.length === 0) {
        output.innerHTML = '<span style="color: #F59E0B;">📝 No subjects added yet. Add some subjects first!</span>';
        return;
    }
    
    let result = '<div style="background: #ECFDF5; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid #10B981;">';
    result += '<h4>📚 Your Subjects List:</h4>';
    result += '<ol>';
    
    // forEach loop to iterate through subjects array
    subjects.forEach((subject, index) => {
        result += `<li><strong>${subject}</strong> (Position: ${index + 1})</li>`;
    });
    
    result += '</ol>';
    result += `<p><strong>Total Subjects:</strong> ${subjects.length}</p>`;
    
    // Additional array method demonstrations
    const sortedSubjects = [...subjects].sort();
    result += `<p><strong>Alphabetically Sorted:</strong> ${sortedSubjects.join(', ')}</p>`;
    
    result += '</div>';
    output.innerHTML = result;
    
    console.log("✅ Part 3: forEach loop executed", {subjects, totalCount: subjects.length});
}

// Function to clear subjects array
function clearSubjects() {
    subjects = [];
    document.getElementById('subjects-output').innerHTML = '<span style="color: #6B7280;">🗑️ All subjects cleared!</span>';
    console.log("✅ Part 3: Subjects array cleared");
}

// ========================================
// PART 4: DOM MANIPULATION
// Dynamic content creation and event handling
// ========================================

// DOM Interaction 1: Dynamic background color changer
function setupColorChanger() {
    const colorBtn = document.getElementById('color-btn');
    const resetBtn = document.getElementById('reset-color-btn');
    const colorInfo = document.getElementById('color-info');
    
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    
    // Event listener for color change
    colorBtn.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        document.body.classList.add('color-transition');
        
        colorInfo.innerHTML = `
            <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 4px solid ${randomColor};">
                <p><strong>🎨 Background Color Changed!</strong></p>
                <p><strong>Color Code:</strong> ${randomColor}</p>
                <p><strong>Changed at:</strong> ${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        
        console.log("✅ Part 4: Background color changed to", randomColor);
    });
    
    // Event listener for color reset
    resetBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '#F9FAFB';
        colorInfo.innerHTML = '<span style="color: #6B7280;">🔄 Background color reset to default</span>';
        console.log("✅ Part 4: Background color reset");
    });
}

// DOM Interaction 2: Dynamic Todo List Management
function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    
    if (!task) {
        alert('Please enter a task!');
        return;
    }
    
    // Create todo object
    const todo = {
        id: ++todoIdCounter,
        text: task,
        completed: false,
        createdAt: new Date().toLocaleTimeString()
    };
    
    todos.push(todo);
    input.value = '';
    
    renderTodos();
    updateTodoStats();
    
    console.log("✅ Part 4: Todo added", todo);
}

// Function to render todos dynamically
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="complete-btn" onclick="toggleTodo(${todo.id})">
                    ${todo.completed ? '↩️ Undo' : '✅ Complete'}
                </button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">
                    🗑️ Delete
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Function to toggle todo completion status
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        updateTodoStats();
        console.log("✅ Part 4: Todo toggled", {id, completed: todo.completed});
    }
}

// Function to delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
    updateTodoStats();
    console.log("✅ Part 4: Todo deleted", {id});
}

// Function to update todo statistics
function updateTodoStats() {
    const totalCount = todos.length;
    const completedCount = todos.filter(t => t.completed).length;
    
    document.getElementById('task-count').textContent = totalCount;
    document.getElementById('completed-count').textContent = completedCount;
}

// DOM Interaction 3: Toggle content visibility
function toggleContent() {
    const secretContent = document.getElementById('secret-content');
    const isVisible = secretContent.classList.contains('visible');
    
    if (isVisible) {
        secretContent.classList.remove('visible');
        console.log("✅ Part 4: Secret content hidden");
    } else {
        secretContent.classList.add('visible');
        console.log("✅ Part 4: Secret content revealed");
    }
}

// ========================================
// CONSOLE DEMONSTRATION
// Additional console output examples
// ========================================

function showConsoleDemo() {
    console.log("🔥 === CONSOLE DEMONSTRATION ===");
    console.log("📊 Current Application State:");
    console.table({
        "Student Name": studentName || "Not set",
        "Student Age": studentAge || "Not set",
        "Total Subjects": subjects.length,
        "Total Todos": todos.length,
        "Completed Todos": todos.filter(t => t.completed).length
    });
    
    console.log("📝 All Subjects:", subjects);
    console.log("✅ All Todos:", todos);
    
    console.log("🎯 Assignment Parts Demonstrated:");
    console.log("✅ Part 1: Variables, conditionals, data types");
    console.log("✅ Part 2: Custom functions (calculateGrades, formatText)");
    console.log("✅ Part 3: Loops (for, while, forEach, array methods)");
    console.log("✅ Part 4: DOM manipulation (events, element creation, styling)");
    
    alert("📝 Console demo complete! Check the developer console (F12) for detailed output.");
}

// ========================================
// ADDITIONAL UTILITY FUNCTIONS
// Extra demonstrations of JavaScript concepts
// ========================================

// Function to demonstrate more advanced concepts
function demonstrateAdvancedConcepts() {
    console.log("🚀 === ADVANCED CONCEPTS DEMONSTRATION ===");
    
    // Array methods demonstration
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Original array:", numbers);
    console.log("Filtered (even):", numbers.filter(n => n % 2 === 0));
    console.log("Mapped (squared):", numbers.map(n => n * n));
    console.log("Reduced (sum):", numbers.reduce((sum, n) => sum + n, 0));
    
    // Object manipulation
    const studentData = {
        name: studentName,
        age: studentAge,
        subjects: subjects,
        todos: todos,
        getInfo: function() {
            return `${this.name} (${this.age} years old) has ${this.subjects.length} subjects and ${this.todos.length} todos`;
        }
    };
    console.log("Student object:", studentData);
    console.log("Student info:", studentData.getInfo());
}

// Initialize advanced concepts demonstration
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(demonstrateAdvancedConcepts, 1000);
});