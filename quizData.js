const quizData = [
    {
        question: "What does 'this' keyword refer to in JavaScript?",
        options: ["The current function", "The global object", "The object that owns the method", "The window object"],
        correctAnswer: "The object that owns the method"
    },
    {
        question: "What is the purpose of the 'typeof' operator?",
        options: ["To check if a variable is defined", "To convert a value to a specific data type", "To determine the data type of a variable", "To check if a variable is null"],
        correctAnswer: "To determine the data type of a variable"
    },
    {
        question: "What is the difference between 'var', 'let', and 'const'?",
        options: ["Scope and reassignment", "Data types they can hold", "Memory allocation", "Performance"],
        correctAnswer: "Scope and reassignment"
    },
    {
        question: "How do you create an array in JavaScript?",
        options: ["Using the 'Array' constructor", "Using array literals", "Both of the above", "None of the above"],
        correctAnswer: "Both of the above"
    },
    {
        question: "What is the purpose of the 'push()' method?",
        options: ["Remove the last element from an array", "Add an element to the end of an array", "Remove the first element from an array", "Add an element to the beginning of an array"],
        correctAnswer: "Add an element to the end of an array"
    },
    {
        question: "What is the purpose of the 'pop()' method?",
        options: ["Remove the last element from an array", "Add an element to the end of an array", "Remove the first element from an array", "Add an element to the beginning of an array"],
        correctAnswer: "Remove the last element from an array"
    },
    {
        question: "What is the purpose of the 'shift()' method?",
        options: ["Remove the last element from an array", "Add an element to the end of an array", "Remove the first element from an array", "Add an element to the beginning of an array"],
        correctAnswer: "Remove the first element from an array"
    },
    {
        question: "What is the purpose of the 'unshift()' method?",
        options: ["Remove the last element from an array", "Add an element to the end of an array", "Remove the first element from an array", "Add an element to the beginning of an array"],
        correctAnswer: "Add an element to the beginning of an array"
    },
    {
        question: "What is a closure in JavaScript?",
        options: ["A function that returns another function", "A function that has no parameters", "A function that has no return value", "A function that can access variables outside its scope"],
        correctAnswer: "A function that can access variables outside its scope"
    },
    {
        question: "What is the purpose of the 'forEach()' method?",
        options: ["To iterate over an array", "To filter elements from an array", "To map elements to a new array", "To find a specific element in an array"],
        correctAnswer: "To iterate over an array"
    },
    {
        question: "What is the purpose of the 'map()' method?",
        options: ["To iterate over an array", "To filter elements from an array", "To map elements to a new array", "To find a specific element in an array"],
        correctAnswer: "To map elements to a new array"
    },
    {
        question: "What is the purpose of the 'filter()' method?",
        options: ["To iterate over an array", "To filter elements from an array", "To map elements to a new array", "To find a specific element in an array"],
        correctAnswer: "To filter elements from an array"
    },
    {
        question: "What is the purpose of the 'find()' method?",
        options: ["To iterate over an array", "To filter elements from an array", "To map elements to a new array", "To find a specific element in an array"],
        correctAnswer: "To find a specific element in an array"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
    {
        question: "What is the purpose of the 'DOM'?",
        options: ["To interact with the browser's console", "To interact with the browser's history", "To interact with the browser's HTML and CSS", "To interact with the browser's network"],
        correctAnswer: "To interact with the browser's HTML and CSS"
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "How do you select elements by their class name using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method?",
        options: ["To add CSS styles to an element", "To attach event listeners to an element", "To remove event listeners from an element", "To create a new element"],
        correctAnswer: "To attach event listeners to an element"
    },
    {
        question: "What is the purpose of the 'preventDefault()' method?",
        options: ["To prevent the default behavior of an event", "To prevent an event from occurring", "To stop the execution of a function", "To cancel the animation of an element"],
        correctAnswer: "To prevent the default behavior of an event"
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JSON string to a JavaScript object"
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JavaScript object to a JSON string"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords?",
        options: ["To handle asynchronous operations", "To create synchronous functions", "To improve function performance", "To define constants"],
        correctAnswer: "To handle asynchronous operations"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object that represents the eventual completion (or failure) of an asynchronous operation", "A function that always returns a value", "A way to define constants", "A data structure for storing key-value pairs"],
        correctAnswer: "An object that represents the eventual completion (or failure) of an asynchronous operation"
    },
    {
        question: "What is the purpose of the 'fetch()' API?",
        options: ["To make HTTP requests", "To manipulate the DOM", "To store data in the browser's local storage", "To create timers"],
        correctAnswer: "To make HTTP requests"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
    {
        question: "What is the purpose of the 'DOM'?",
        options: ["To interact with the browser's console", "To interact with the browser's history", "To interact with the browser's HTML and CSS", "To interact with the browser's network"],
        correctAnswer: "To interact with the browser's HTML and CSS"
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "How do you select elements by their class name using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method?",
        options: ["To add CSS styles to an element", "To attach event listeners to an element", "To remove event listeners from an element", "To create a new element"],
        correctAnswer: "To attach event listeners to an element"
    },
    {
        question: "What is the purpose of the 'preventDefault()' method?",
        options: ["To prevent the default behavior of an event", "To prevent an event from occurring", "To stop the execution of a function", "To cancel the animation of an element"],
        correctAnswer: "To prevent the default behavior of an event"
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JSON string to a JavaScript object"
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JavaScript object to a JSON string"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords?",
        options: ["To handle asynchronous operations", "To create synchronous functions", "To improve function performance", "To define constants"],
        correctAnswer: "To handle asynchronous operations"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object that represents the eventual completion (or failure) of an asynchronous operation", "A function that always returns a value", "A way to define constants", "A data structure for storing key-value pairs"],
        correctAnswer: "An object that represents the eventual completion (or failure) of an asynchronous operation"
    },
    {
        question: "What is the purpose of the 'fetch()' API?",
        options: ["To make HTTP requests", "To manipulate the DOM", "To store data in the browser's local storage", "To create timers"],
        correctAnswer: "To make HTTP requests"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
    {
        question: "What is the purpose of the 'DOM'?",
        options: ["To interact with the browser's console", "To interact with the browser's history", "To interact with the browser's HTML and CSS", "To interact with the browser's network"],
        correctAnswer: "To interact with the browser's HTML and CSS"
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "How do you select elements by their class name using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method?",
        options: ["To add CSS styles to an element", "To attach event listeners to an element", "To remove event listeners from an element", "To create a new element"],
        correctAnswer: "To attach event listeners to an element"
    },
    {
        question: "What is the purpose of the 'preventDefault()' method?",
        options: ["To prevent the default behavior of an event", "To prevent an event from occurring", "To stop the execution of a function", "To cancel the animation of an element"],
        correctAnswer: "To prevent the default behavior of an event"
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JSON string to a JavaScript object"
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JavaScript object to a JSON string"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords?",
        options: ["To handle asynchronous operations", "To create synchronous functions", "To improve function performance", "To define constants"],
        correctAnswer: "To handle asynchronous operations"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object that represents the eventual completion (or failure) of an asynchronous operation", "A function that always returns a value", "A way to define constants", "A data structure for storing key-value pairs"],
        correctAnswer: "An object that represents the eventual completion (or failure) of an asynchronous operation"
    },
    {
        question: "What is the purpose of the 'fetch()' API?",
        options: ["To make HTTP requests", "To manipulate the DOM", "To store data in the browser's local storage", "To create timers"],
        correctAnswer: "To make HTTP requests"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
    {
        question: "What is the purpose of the 'DOM'?",
        options: ["To interact with the browser's console", "To interact with the browser's history", "To interact with the browser's HTML and CSS", "To interact with the browser's network"],
        correctAnswer: "To interact with the browser's HTML and CSS"
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "How do you select elements by their class name using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method?",
        options: ["To add CSS styles to an element", "To attach event listeners to an element", "To remove event listeners from an element", "To create a new element"],
        correctAnswer: "To attach event listeners to an element"
    },
    {
        question: "What is the purpose of the 'preventDefault()' method?",
        options: ["To prevent the default behavior of an event", "To prevent an event from occurring", "To stop the execution of a function", "To cancel the animation of an element"],
        correctAnswer: "To prevent the default behavior of an event"
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JSON string to a JavaScript object"
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JavaScript object to a JSON string"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords?",
        options: ["To handle asynchronous operations", "To create synchronous functions", "To improve function performance", "To define constants"],
        correctAnswer: "To handle asynchronous operations"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object that represents the eventual completion (or failure) of an asynchronous operation", "A function that always returns a value", "A way to define constants", "A data structure for storing key-value pairs"],
        correctAnswer: "An object that represents the eventual completion (or failure) of an asynchronous operation"
    },
    {
        question: "What is the purpose of the 'fetch()' API?",
        options: ["To make HTTP requests", "To manipulate the DOM", "To store data in the browser's local storage", "To create timers"],
        correctAnswer: "To make HTTP requests"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
    {
        question: "What is the purpose of the 'DOM'?",
        options: ["To interact with the browser's console", "To interact with the browser's history", "To interact with the browser's HTML and CSS", "To interact with the browser's network"],
        correctAnswer: "To interact with the browser's HTML and CSS"
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "How do you select elements by their class name using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method?",
        options: ["To add CSS styles to an element", "To attach event listeners to an element", "To remove event listeners from an element", "To create a new element"],
        correctAnswer: "To attach event listeners to an element"
    },
    {
        question: "What is the purpose of the 'preventDefault()' method?",
        options: ["To prevent the default behavior of an event", "To prevent an event from occurring", "To stop the execution of a function", "To cancel the animation of an element"],
        correctAnswer: "To prevent the default behavior of an event"
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JSON string to a JavaScript object"
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JavaScript object to a JSON string"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords?",
        options: ["To handle asynchronous operations", "To create synchronous functions", "To improve function performance", "To define constants"],
        correctAnswer: "To handle asynchronous operations"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object that represents the eventual completion (or failure) of an asynchronous operation", "A function that always returns a value", "A way to define constants", "A data structure for storing key-value pairs"],
        correctAnswer: "An object that represents the eventual completion (or failure) of an asynchronous operation"
    },
    {
        question: "What is the purpose of the 'fetch()' API?",
        options: ["To make HTTP requests", "To manipulate the DOM", "To store data in the browser's local storage", "To create timers"],
        correctAnswer: "To make HTTP requests"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
    {
        question: "What is the purpose of the 'DOM'?",
        options: ["To interact with the browser's console", "To interact with the browser's history", "To interact with the browser's HTML and CSS", "To interact with the browser's network"],
        correctAnswer: "To interact with the browser's HTML and CSS"
    },
    {
        question: "How do you select an element by its ID using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementById()"
    },
    {
        question: "How do you select elements by their class name using JavaScript?",
        options: ["document.getElementById()", "document.getElementsByClassName()", "document.querySelector()", "document.querySelectorAll()"],
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "What is the purpose of the 'addEventListener()' method?",
        options: ["To add CSS styles to an element", "To attach event listeners to an element", "To remove event listeners from an element", "To create a new element"],
        correctAnswer: "To attach event listeners to an element"
    },
    {
        question: "What is the purpose of the 'preventDefault()' method?",
        options: ["To prevent the default behavior of an event", "To prevent an event from occurring", "To stop the execution of a function", "To cancel the animation of an element"],
        correctAnswer: "To prevent the default behavior of an event"
    },
    {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JSON string to a JavaScript object"
    },
    {
        question: "What is the purpose of the 'JSON.stringify()' method?",
        options: ["To convert a JavaScript object to a JSON string", "To convert a JSON string to a JavaScript object", "To stringify a JavaScript object", "To parse a URL"],
        correctAnswer: "To convert a JavaScript object to a JSON string"
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords?",
        options: ["To handle asynchronous operations", "To create synchronous functions", "To improve function performance", "To define constants"],
        correctAnswer: "To handle asynchronous operations"
    },
    {
        question: "What is a promise in JavaScript?",
        options: ["An object that represents the eventual completion (or failure) of an asynchronous operation", "A function that always returns a value", "A way to define constants", "A data structure for storing key-value pairs"],
        correctAnswer: "An object that represents the eventual completion (or failure) of an asynchronous operation"
    },
    {
        question: "What is the purpose of the 'fetch()' API?",
        options: ["To make HTTP requests", "To manipulate the DOM", "To store data in the browser's local storage", "To create timers"],
        correctAnswer: "To make HTTP requests"
    },
    {
        question: "What is the difference between '==' and '==='?",
        options: ["Type and value comparison", "Value comparison only", "Type comparison only", "No difference"],
        correctAnswer: "Type and value comparison"
    },
]

export default quizData;