// Store output element
        const output = document.getElementById('output');
        
        // Clear output
        function clearOutput() {
            output.innerHTML = '';
        }
        
        // Add message to output
        function addMessage(message, type = '') {
            const div = document.createElement('div');
            div.className = `result-item ${type}`;
            div.textContent = message;
            output.appendChild(div);
        }
        
        // Demo 1: Primitive const
        function demoPrimitive() {
            clearOutput();
            addMessage('=== DEMO: const with Primitive Value ===', 'success');
            
            try {
                const myNumber = 10;
                addMessage(`1. Created: const myNumber = ${myNumber}`);
                addMessage(`2. Type: ${typeof myNumber}`);
                addMessage(`3. Try to read: myNumber = ${myNumber}`);
                addMessage('✅ Success! Primitive const value is accessible.');
            } catch (error) {
                addMessage(`❌ Error: ${error.message}`, 'error');
            }
        }
        
        function tryReassignPrimitive() {
            clearOutput();
            addMessage('=== TRYING TO REASSIGN PRIMITIVE const ===', 'error');
            
            try {
                const myNumber = 10;
                addMessage(`Created: const myNumber = ${myNumber}`);
                
                // This will throw an error
                myNumber = 20;
                addMessage(`Assigned: myNumber = 20`);
                addMessage(`❌ UNEXPECTED: This should have failed!`);
            } catch (error) {
                addMessage(`✅ Expected error: ${error.message}`, 'error');
                addMessage('This proves you CANNOT reassign a const primitive.');
            }
        }
        
        // Demo 2: Object const
        function demoObject() {
            clearOutput();
            addMessage('=== DEMO: const with Object ===', 'success');
            
            try {
                const person = { name: "Alice", age: 25 };
                addMessage(`1. Created: const person = ${JSON.stringify(person)}`);
                addMessage(`2. Type: ${typeof person}`);
                addMessage('✅ Success! Object const is accessible.');
            } catch (error) {
                addMessage(`❌ Error: ${error.message}`, 'error');
            }
        }
        
        function modifyObject() {
            clearOutput();
            addMessage('=== MODIFYING const Object ===', 'success');
            
            try {
                const person = { name: "Alice", age: 25 };
                addMessage(`Original: ${JSON.stringify(person)}`);
                
                // Modify properties
                person.age = 26;
                person.city = "New York";
                person.job = "Developer";
                
                addMessage(`After modifications: ${JSON.stringify(person)}`);
                addMessage('✅ Success! You CAN modify properties of a const object.');
            } catch (error) {
                addMessage(`❌ Error: ${error.message}`, 'error');
            }
        }
        
        function tryReassignObject() {
            clearOutput();
            addMessage('=== TRYING TO REASSIGN const Object ===', 'error');
            
            try {
                const person = { name: "Alice", age: 25 };
                addMessage(`Created: const person = ${JSON.stringify(person)}`);
                
                // This will throw an error
                person = { name: "Bob", age: 30 };
                addMessage(`Reassigned: person = ${JSON.stringify(person)}`);
                addMessage(`❌ UNEXPECTED: This should have failed!`);
            } catch (error) {
                addMessage(`✅ Expected error: ${error.message}`, 'error');
                addMessage('This proves you CANNOT reassign a const object variable.');
            }
        }
        
        // Demo 3: Array const
        function demoArray() {
            clearOutput();
            addMessage('=== DEMO: const with Array ===', 'success');
            
            try {
                const colors = ["red", "green"];
                addMessage(`1. Created: const colors = ${JSON.stringify(colors)}`);
                addMessage(`2. Type: ${typeof colors} (Array.isArray: ${Array.isArray(colors)})`);
                addMessage(`3. Length: ${colors.length}`);
                addMessage('✅ Success! Array const is accessible.');
            } catch (error) {
                addMessage(`❌ Error: ${error.message}`, 'error');
            }
        }
        
        function modifyArray() {
            clearOutput();
            addMessage('=== MODIFYING const Array ===', 'success');
            
            try {
                const colors = ["red", "green"];
                addMessage(`Original: ${JSON.stringify(colors)}`);
                
                // Modify array
                colors.push("blue");
                colors[0] = "yellow";
                colors[3] = "purple";
                
                addMessage(`After modifications: ${JSON.stringify(colors)}`);
                addMessage(`New length: ${colors.length}`);
                addMessage('✅ Success! You CAN modify elements of a const array.');
            } catch (error) {
                addMessage(`❌ Error: ${error.message}`, 'error');
            }
        }
        
        // Initialize with first demo
        window.onload = demoPrimitive;