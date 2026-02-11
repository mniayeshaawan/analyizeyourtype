// const listItems = document.querySelectorAll("li");

// function toggleDone(e) {
//   if (!e.target.className) {
//     e.target.className = "done";
//   } else {
//     e.target.className = "";
//   }
// }

// listItems.forEach((item) => {
//   item.addEventListener("click", toggleDone);
// });
// Js for line through in p tag
// const listItems = document.querySelector("li");

// function toggleDone(e){
//     if(!e.target.className){
//         e.target.className = "done";
//     } else {
//         e.target.className = "";
//     }
// }

// listItems.forEach((item) => {
//     item.addEventListener("click", toggleDone);
//  });
// if (Math.random()> 0.5){
//   const y = 5;
// }
// console.log(y);
// Function making synatx
// function myFunc(theObject){
//   theObject.make = "Toyota";
// }
// const myCar = {
//   make:"honda",
//   model:"Accord",
//   year: 1998,
// };
// console.log(myCar.make);
// myFunc(myCar);
// console.log(myCar.make);
//   alert ("hello");
// alert "Hello World";
 console.log("Code is runing")
 var a = pompt("Enter your number")
 console.log("Your number is " + a)

 const x = new Boolean();
 console.log(x.valueof());
 const y = new Boolean("Mozilla");
 console.log(y.valueOf());

// class StarPattern {
//     public static void main(String[] args) {

//         // First four lines
//         for (int i = 1; i <= 4; i++) {
//             for (int j = 1; j <= i; j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }

//         // Last line with 6 stars
//         for (int i = 1; i <= 6; i++) {
//             System.out.print("*");
//         }
//     }
// }
function addStringAndNumber(str, num) {
    console.log(`String: "${str}"`);
    console.log(`Number: ${num}`);
    console.log(`Concatenation: "${str + num}"`);
    console.log(`Type of result: ${typeof (str + num)}`);
    
    // Try to convert and add mathematically
    let convertedNum = Number(str);
    if (!isNaN(convertedNum)) {
        console.log(`Mathematical addition: ${convertedNum + num}`);
    } else {
        console.log(`Cannot convert "${str}" to a number for mathematical addition`);
    }
}

// Test the function
addStringAndNumber("Score: ", 100);
console.log("\n---\n");
addStringAndNumber("50", 100);

 function runExample2() {
            console.log("=== Example 2: Console Output ===");
            
            // String concatenation
            let text = "Score: ";
            let score = 100;
            let result = text + score;
            
            console.log('String: "' + text + '"');
            console.log('Number:', score);
            console.log('String + Number:', result);
            console.log('Type of result:', typeof result);
            
            // More examples
            console.log('\n--- More Examples ---');
            console.log('"5" + 2 =', "5" + 2);       // "52"
            console.log('5 + "2" =', 5 + "2");       // "52"
            console.log('5 + 2 =', 5 + 2);           // 7
            console.log('"5" + "2" =', "5" + "2");   // "52"
            
            document.getElementById('output').innerHTML = `
                <h3>Console Example:</h3>
                <p>Check the browser console (F12) to see detailed output</p>
                <p>String concatenation: "${text}${score}" = "${result}"</p>
            `;
        }
        function runExample() {
            // CORRECT: prompt() not pompt()
            let userName = prompt("Enter your name:");
            let userAge = prompt("Enter your age:");
            
            let message = "Hello " + userName + "! ";
            let ageNextYear = Number(userAge) + 1;
            
            let fullMessage = message + "Next year you'll be " + ageNextYear;
            
            document.getElementById('output').innerHTML = `
                <h3>Prompt Example:</h3>
                <p>${fullMessage}</p>
                <p><strong>Note:</strong> "Hello " + ${userAge} = "Hello ${userAge}" (string concatenation)</p>
                <p><strong>Note:</strong> Number(${userAge}) + 1 = ${ageNextYear} (mathematical addition)</p>
            `;
        }
        function runExample3() {
            // CORRECT: Use Date.now() instead of undefined "performance"
            const startTime = Date.now();
            
            // Run some operations
            let result = "";
            for (let i = 0; i < 10000; i++) {
                result = "Iteration " + i;
            }
            
            const endTime = Date.now();
            const elapsedTime = endTime - startTime;
            
            document.getElementById('output').innerHTML = `
                <h3>Performance Example:</h3>
                <p>Operation completed in ${elapsedTime} milliseconds</p>
                <p>String concatenation in a loop 10,000 times</p>
                <p><strong>Note:</strong> Using Date.now() for timing</p>
            `;
            
            console.log(`Operation took ${elapsedTime}ms`);
        }
        
        // If you need high-resolution timing, use performance.now() properly:
        function runPerformanceExample() {
            // Check if performance is available
            if (typeof performance !== 'undefined') {
                const start = performance.now();
                
                // Some operation
                let str = "";
                for (let i = 0; i < 1000; i++) {
                    str += i + ", ";
                }
                
                const end = performance.now();
                const duration = end - start;
                
                document.getElementById('output').innerHTML = `
                    <h3>High-Res Timing:</h3>
                    <p>Operation took ${duration.toFixed(3)} milliseconds</p>
                    <p>Used performance.now() for precise timing</p>
                `;
            } else {
                document.getElementById('output').innerHTML = `
                    <h3>High-Res Timing Not Available</h3>
                    <p>The performance API is not available in this environment</p>
                `;
            }
        }

// JS for Typeof
function checkDataType() {
            const valueInput = document.getElementById('valueInput').value;
            const typeSelect = document.getElementById('typeSelect').value;
            
            let valueToCheck;
            
            // If user selected from dropdown, use that
            if (typeSelect) {
                switch(typeSelect) {
                    case 'string':
                        valueToCheck = "Hello World";
                        break;
                    case 'number':
                        valueToCheck = 42;
                        break;
                    case 'boolean':
                        valueToCheck = true;
                        break;
                    case 'null':
                        valueToCheck = null;
                        break;
                    case 'undefined':
                        valueToCheck = undefined;
                        break;
                    case 'object':
                        valueToCheck = {name: "John", age: 30};
                        break;
                    case 'array':
                        valueToCheck = [1, 2, 3];
                        break;
                    case 'function':
                        valueToCheck = function() { return "I'm a function"; };
                        break;
                }
            } else {
                // Try to parse the input value
                valueToCheck = parseValue(valueInput);
            }
            
            // Get the data type
            const dataType = typeof valueToCheck;
            
            // Special case for null
            const isNull = valueToCheck === null;
            
            // Special case for arrays
            const isArray = Array.isArray(valueToCheck);
            
            // Display results
            displayResults(valueToCheck, dataType, isNull, isArray);
        }
        
        // Function to parse input value
        function parseValue(input) {
            // Try to convert to number
            if (!isNaN(input) && input.trim() !== "") {
                const num = Number(input);
                if (!isNaN(num)) return num;
            }
            
            // Check for boolean
            if (input.toLowerCase() === "true") return true;
            if (input.toLowerCase() === "false") return false;
            
            // Check for null
            if (input.toLowerCase() === "null") return null;
            
            // Check for undefined
            if (input.toLowerCase() === "undefined") return undefined;
            
            // Try to parse as JSON (for objects and arrays)
            try {
                const parsed = JSON.parse(input);
                return parsed;
            } catch (e) {
                // Not valid JSON, return as string
                return input;
            }
        }
        
        // Function to display results
        function displayResults(value, dataType, isNull, isArray) {
            const resultCard = document.getElementById('resultCard');
            const resultContent = document.getElementById('resultContent');
            
            let valueDisplay;
            if (typeof value === 'string') {
                valueDisplay = `"${value}"`;
            } else if (typeof value === 'function') {
                valueDisplay = value.toString().substring(0, 50) + "...";
            } else {
                valueDisplay = JSON.stringify(value);
            }
            
            let actualType = dataType;
            if (isNull) actualType = "null (but typeof returns 'object')";
            if (isArray) actualType = "array (but typeof returns 'object')";
            
            resultContent.innerHTML = `
                <div class="result-item">
                    <span>Input Value:</span>
                    <strong>${valueDisplay}</strong>
                </div>
                <div class="result-item">
                    <span>typeof Returns:</span>
                    <span class="data-type">"${dataType}"</span>
                </div>
                <div class="result-item">
                    <span>Actual Data Type:</span>
                    <span class="data-type">${actualType}</span>
                </div>
                <div class="result-item">
                    <span>Value Constructor:</span>
                    <span>${value !== null && value !== undefined ? value.constructor.name : 'N/A'}</span>
                </div>
            `;
            
            // Show the result card with animation
            resultCard.style.display = 'block';
            
            // Scroll to result
            resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        // Function to set example values
        function setExample(value) {
            const valueInput = document.getElementById('valueInput');
            const typeSelect = document.getElementById('typeSelect');
            
            typeSelect.value = '';
            
            if (typeof value === 'string') {
                valueInput.value = value;
            } else if (typeof value === 'number') {
                valueInput.value = value.toString();
            } else if (typeof value === 'boolean') {
                valueInput.value = value.toString();
            } else if (value === null) {
                valueInput.value = 'null';
            } else if (value === undefined) {
                valueInput.value = 'undefined';
            } else if (Array.isArray(value)) {
                valueInput.value = JSON.stringify(value);
            } else if (typeof value === 'object') {
                valueInput.value = JSON.stringify(value);
            }
            
            // Automatically check the data type
            setTimeout(() => checkDataType(), 300);
        }
        
        // Initialize with an example
        window.onload = function() {
            setExample("Hello World");
        };
        
        // Allow pressing Enter to check data type
        document.getElementById('valueInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkDataType();
            }
        });