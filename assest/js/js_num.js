// Initialize dictionary with 5 words
        let dictionary = {
            "ephemeral": {
                phonetic: "/ɪˈfɛmərəl/",
                partOfSpeech: "adjective",
                definition: "Lasting for a very short time; transient.",
                example: "The ephemeral beauty of cherry blossoms makes them even more special.",
                synonyms: ["transient", "fleeting", "short-lived", "momentary"],
                addedDate: "2023-10-15"
            },
            "serendipity": {
                phonetic: "/ˌsɛrənˈdɪpɪti/",
                partOfSpeech: "noun",
                definition: "The occurrence of events by chance in a happy or beneficial way.",
                example: "Finding that rare book in a small bookstore was pure serendipity.",
                synonyms: ["fortuity", "chance", "luck", "fluke"],
                addedDate: "2023-10-10"
            },
            "eloquent": {
                phonetic: "/ˈɛləkwənt/",
                partOfSpeech: "adjective",
                definition: "Fluent or persuasive in speaking or writing.",
                example: "Her eloquent speech moved the entire audience to tears.",
                synonyms: ["articulate", "fluent", "expressive", "persuasive"],
                addedDate: "2023-10-05"
            },
            "ubiquitous": {
                phonetic: "/juːˈbɪkwɪtəs/",
                partOfSpeech: "adjective",
                definition: "Present, appearing, or found everywhere.",
                example: "Smartphones have become ubiquitous in modern society.",
                synonyms: ["omnipresent", "everywhere", "pervasive", "universal"],
                addedDate: "2023-10-01"
            },
            "melancholy": {
                phonetic: "/ˈmɛlənkəli/",
                partOfSpeech: "noun",
                definition: "A feeling of pensive sadness, typically with no obvious cause.",
                example: "The gray, rainy day filled her with a deep sense of melancholy.",
                synonyms: ["sadness", "sorrow", "gloom", "despondency"],
                addedDate: "2023-09-28"
            }
        };
        
        // Additional words that can be added
        const additionalWords = {
            "resilient": {
                phonetic: "/rɪˈzɪliənt/",
                partOfSpeech: "adjective",
                definition: "Able to withstand or recover quickly from difficult conditions.",
                example: "Children are often more resilient than adults give them credit for.",
                synonyms: ["tough", "durable", "strong", "robust"],
                addedDate: "2023-11-01"
            },
            "pragmatic": {
                phonetic: "/præɡˈmætɪk/",
                partOfSpeech: "adjective",
                definition: "Dealing with things sensibly and realistically based on practical considerations.",
                example: "Her pragmatic approach to problem-solving made her an excellent manager.",
                synonyms: ["practical", "realistic", "sensible", "down-to-earth"],
                addedDate: "2023-11-05"
            },
            "verbose": {
                phonetic: "/vərˈboʊs/",
                partOfSpeech: "adjective",
                definition: "Using or expressed in more words than are needed.",
                example: "His verbose explanation could have been summarized in two sentences.",
                synonyms: ["wordy", "long-winded", "prolix", "garrulous"],
                addedDate: "2023-11-10"
            },
            "ambiguous": {
                phonetic: "/æmˈbɪɡjuəs/",
                partOfSpeech: "adjective",
                definition: "Open to more than one interpretation; not having one obvious meaning.",
                example: "The instructions were ambiguous, leaving everyone confused.",
                synonyms: ["unclear", "vague", "equivocal", "indefinite"],
                addedDate: "2023-11-15"
            },
            "juxtaposition": {
                phonetic: "/ˌdʒʌkstəpəˈzɪʃən/",
                partOfSpeech: "noun",
                definition: "The fact of two things being seen or placed close together with contrasting effect.",
                example: "The juxtaposition of modern architecture next to historic buildings is striking.",
                synonyms: ["contrast", "comparison", "collocation", "proximity"],
                addedDate: "2023-11-20"
            }
        };
        
        // Statistics
        let searchCount = 0;
        let lastSearchedWord = "";
        
        // DOM elements
        const resultCard = document.getElementById('resultCard');
        const searchInput = document.getElementById('searchInput');
        const wordsList = document.getElementById('wordsList');
        const emptyState = document.getElementById('emptyState');
        const totalWordsEl = document.getElementById('totalWords');
        const searchesEl = document.getElementById('searches');
        const lastSearchEl = document.getElementById('lastSearch');
        
        // Initialize the app
        function initApp() {
            updateWordList();
            updateStats();
            
            // Set up enter key for search
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchWord();
                }
            });
            
            // Show a random word on load
            setTimeout(() => {
                const words = Object.keys(dictionary);
                const randomWord = words[Math.floor(Math.random() * words.length)];
                showWord(randomWord);
            }, 500);
        }
        
        // Search for a word
        function searchWord() {
            const word = searchInput.value.trim().toLowerCase();
            
            if (!word) {
                alert("Please enter a word to search");
                return;
            }
            
            if (dictionary[word]) {
                showWord(word);
                searchCount++;
                lastSearchedWord = word;
                updateStats();
            } else {
                // Check if it's in additional words
                if (additionalWords[word]) {
                    if (confirm(`"${word}" is not in the main dictionary but is available. Add it to dictionary?`)) {
                        addWordToDictionary(word, additionalWords[word]);
                        showWord(word);
                    }
                } else {
                    // Try to find similar words
                    const similarWords = findSimilarWords(word);
                    if (similarWords.length > 0) {
                        let message = `"${word}" not found. Did you mean:\n`;
                        similarWords.forEach(w => {
                            message += `• ${w}\n`;
                        });
                        alert(message);
                    } else {
                        alert(`"${word}" not found in dictionary. Try another word.`);
                    }
                }
            }
        }
        
        // Display a word in the result card
        function showWord(word) {
            if (!dictionary[word]) {
                resultCard.style.display = 'none';
                return;
            }
            
            const entry = dictionary[word];
            
            document.getElementById('wordTitle').textContent = word.charAt(0).toUpperCase() + word.slice(1);
            document.getElementById('wordPhonetic').textContent = entry.phonetic;
            document.getElementById('partOfSpeech').textContent = entry.partOfSpeech;
            document.getElementById('wordDefinition').textContent = entry.definition;
            document.getElementById('wordExample').textContent = `"${entry.example}"`;
            
            resultCard.style.display = 'block';
            searchInput.value = '';
            
            // Highlight the word in the list
            highlightWordInList(word);
        }
        
        // Find similar words (simple implementation)
        function findSimilarWords(word) {
            const words = Object.keys(dictionary);
            return words.filter(w => 
                w.startsWith(word.substring(0, 3)) || 
                w.includes(word) || 
                word.includes(w.substring(0, 3))
            ).slice(0, 3); // Return up to 3 similar words
        }
        
        // Update the word list display
        function updateWordList() {
            wordsList.innerHTML = '';
            
            const words = Object.keys(dictionary);
            
            if (words.length === 0) {
                emptyState.style.display = 'block';
                totalWordsEl.textContent = '0';
                return;
            }
            
            emptyState.style.display = 'none';
            
            // Sort words alphabetically
            words.sort().forEach(word => {
                const entry = dictionary[word];
                
                const wordCard = document.createElement('div');
                wordCard.className = 'word-card';
                wordCard.onclick = () => {
                    showWord(word);
                    searchInput.value = word;
                };
                
                wordCard.innerHTML = `
                    <h4>${word.charAt(0).toUpperCase() + word.slice(1)}</h4>
                    <p><strong>${entry.partOfSpeech}</strong> • ${entry.definition.substring(0, 80)}${entry.definition.length > 80 ? '...' : ''}</p>
                    <p style="margin-top: 8px; font-size: 0.8rem; color: #999;">Added: ${entry.addedDate}</p>
                `;
                
                wordsList.appendChild(wordCard);
            });
            
            totalWordsEl.textContent = words.length;
        }
        
        // Highlight a word in the list
        function highlightWordInList(word) {
            const wordCards = document.querySelectorAll('.word-card');
            wordCards.forEach(card => {
                card.style.backgroundColor = 'white';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                
                // Check if this card contains the word
                const cardWord = card.querySelector('h4').textContent.toLowerCase();
                if (cardWord === word.toLowerCase()) {
                    card.style.backgroundColor = '#f0f4ff';
                    card.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.2)';
                }
            });
        }
        
        // Add a random word to the dictionary
        function addRandomWord() {
            const availableWords = Object.keys(additionalWords).filter(word => !dictionary[word]);
            
            if (availableWords.length === 0) {
                alert("No more words available to add!");
                return;
            }
            
            const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
            addWordToDictionary(randomWord, additionalWords[randomWord]);
            
            // Show the newly added word
            showWord(randomWord);
            searchInput.value = randomWord;
        }
        
        // Add a word to the dictionary
        function addWordToDictionary(word, wordData) {
            // Create a new entry with today's date
            const today = new Date().toISOString().split('T')[0];
            dictionary[word] = {
                ...wordData,
                addedDate: today
            };
            
            updateWordList();
            updateStats();
            
            // Show confirmation
            const resultCard = document.getElementById('resultCard');
            resultCard.style.background = 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)';
            
            setTimeout(() => {
                resultCard.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            }, 1000);
        }
        
        // Show all words in an alert
        function showAllWords() {
            const words = Object.keys(dictionary);
            
            if (words.length === 0) {
                alert("Dictionary is empty!");
                return;
            }
            
            let message = `Dictionary contains ${words.length} words:\n\n`;
            words.sort().forEach((word, index) => {
                const entry = dictionary[word];
                message += `${index + 1}. ${word} (${entry.partOfSpeech}): ${entry.definition.substring(0, 60)}...\n`;
            });
            
            alert(message);
        }
        
        // Reset dictionary to original 5 words
        function resetDictionary() {
            if (confirm("Reset dictionary to original 5 words? This will remove any added words.")) {
                // Keep only the original 5 words
                const originalWords = ["ephemeral", "serendipity", "eloquent", "ubiquitous", "melancholy"];
                const newDictionary = {};
                
                originalWords.forEach(word => {
                    if (dictionary[word]) {
                        newDictionary[word] = dictionary[word];
                    } else {
                        // If for some reason the original word is missing, restore it
                        newDictionary[word] = {
                            "ephemeral": {
                                phonetic: "/ɪˈfɛmərəl/",
                                partOfSpeech: "adjective",
                                definition: "Lasting for a very short time; transient.",
                                example: "The ephemeral beauty of cherry blossoms makes them even more special.",
                                synonyms: ["transient", "fleeting", "short-lived", "momentary"],
                                addedDate: "2023-10-15"
                            },
                            "serendipity": {
                                phonetic: "/ˌsɛrənˈdɪpɪti/",
                                partOfSpeech: "noun",
                                definition: "The occurrence of events by chance in a happy or beneficial way.",
                                example: "Finding that rare book in a small bookstore was pure serendipity.",
                                synonyms: ["fortuity", "chance", "luck", "fluke"],
                                addedDate: "2023-10-10"
                            },
                            "eloquent": {
                                phonetic: "/ˈɛləkwənt/",
                                partOfSpeech: "adjective",
                                definition: "Fluent or persuasive in speaking or writing.",
                                example: "Her eloquent speech moved the entire audience to tears.",
                                synonyms: ["articulate", "fluent", "expressive", "persuasive"],
                                addedDate: "2023-10-05"
                            },
                            "ubiquitous": {
                                phonetic: "/juːˈbɪkwɪtəs/",
                                partOfSpeech: "adjective",
                                definition: "Present, appearing, or found everywhere.",
                                example: "Smartphones have become ubiquitous in modern society.",
                                synonyms: ["omnipresent", "everywhere", "pervasive", "universal"],
                                addedDate: "2023-10-01"
                            },
                            "melancholy": {
                                phonetic: "/ˈmɛlənkəli/",
                                partOfSpeech: "noun",
                                definition: "A feeling of pensive sadness, typically with no obvious cause.",
                                example: "The gray, rainy day filled her with a deep sense of melancholy.",
                                synonyms: ["sadness", "sorrow", "gloom", "despondency"],
                                addedDate: "2023-09-28"
                            }
                        }[word];
                    }
                });
                
                dictionary = newDictionary;
                searchCount = 0;
                lastSearchedWord = "";
                
                updateWordList();
                updateStats();
                showWord("ephemeral");
                
                alert("Dictionary reset to original 5 words!");
            }
        }
        
        // Update statistics display
        function updateStats() {
            totalWordsEl.textContent = Object.keys(dictionary).length;
            searchesEl.textContent = searchCount;
            lastSearchEl.textContent = lastSearchedWord || "-";
        }
        
        // Initialize the application when page loads
        window.onload = initApp;
         

        // Program to create a word-meaning dictionary
const wordDictionary = {
    "ephemeral": "lasting for a very short time",
    "ubiquitous": "present everywhere or appearing everywhere",
    "serendipity": "the occurrence of fortunate discoveries by accident",
    "eloquent": "fluent or persuasive in speaking or writing",
    "resilient": "able to withstand or recover quickly from difficult conditions",
    "melancholy": "a feeling of pensive sadness, typically with no obvious cause"
};

// Function to display all words and meanings
function displayDictionary() {
    console.log("📚 WORD-MEANING DICTIONARY\n");
    console.log("Total words:", Object.keys(wordDictionary).length);
    console.log("=" .repeat(40));
    
    for (let word in wordDictionary) {
        console.log(`${word.toUpperCase()}:`);
        console.log(`Meaning: ${wordDictionary[word]}`);
        console.log("-".repeat(40));
    }
}

// Function to search for a word's meaning
function searchWord(word) {
    const lowercaseWord = word.toLowerCase();
    if (wordDictionary.hasOwnProperty(lowercaseWord)) {
        console.log(`\n🔍 SEARCH RESULT:`);
        console.log(`${lowercaseWord.toUpperCase()}: ${wordDictionary[lowercaseWord]}`);
        return wordDictionary[lowercaseWord];
    } else {
        console.log(`\n❌ "${word}" not found in the dictionary.`);
        return null;
    }
}

// Function to add a new word
function addWord(word, meaning) {
    const lowercaseWord = word.toLowerCase();
    if (!wordDictionary.hasOwnProperty(lowercaseWord)) {
        wordDictionary[lowercaseWord] = meaning;
        console.log(`\n✅ "${word}" has been added to the dictionary.`);
        console.log(`Total words now: ${Object.keys(wordDictionary).length}`);
        return true;
    } else {
        console.log(`\n⚠️  "${word}" already exists in the dictionary.`);
        return false;
    }
}

// Main program
console.log("=== WORD DICTIONARY PROGRAM ===\n");

// Display initial dictionary
displayDictionary();

// Example usage
console.log("\n=== EXAMPLE USAGE ===");

// Search for a word
searchWord("eloquent");
searchWord("unknown");

// Add a new word
addWord("verisimilitude", "the appearance of being true or real");

// Display updated dictionary
console.log("\n=== UPDATED DICTIONARY ===");
displayDictionary();

// Get all words as an array
console.log("\n=== ALL WORDS (Alphabetical Order) ===");
const allWords = Object.keys(wordDictionary).sort();
console.log("Words:", allWords.join(", "));

// Check if a word exists
console.log("\n=== WORD CHECK ===");
console.log("Does 'resilient' exist?", wordDictionary.hasOwnProperty("resilient") ? "Yes" : "No");
console.log("Does 'obsolete' exist?", "obsolete" in wordDictionary ? "Yes" : "No");

