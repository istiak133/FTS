// Fortune Generator functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Array of fortune messages (at least 10 as required)
    const fortunes = [
        "True wisdom comes not from knowledge, but from understanding.",
        "The journey of a thousand miles begins with a single step.",
        "Your future depends on many things, but mostly on you.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "In the middle of difficulty lies opportunity.",
        "The only way to do great work is to love what you do.",
        "Life is what happens when you're busy making other plans.",
        "The greatest glory is not in never falling, but in rising every time we fall.",
        "Be yourself; everyone else is already taken.",
        "Yesterday is history, tomorrow is a mystery, today is a gift.",
        "The only impossible journey is the one you never begin.",
        "Believe you can and you're halfway there.",
        "It is during our darkest moments that we must focus to see the light.",
        "The way to get started is to quit talking and begin doing."
    ];
    
    // Color arrays for styling
    const fontColors = ['#2c3e50', '#e74c3c', '#8b4513', '#2e8b57', '#4b0082', '#dc143c'];
    const bgColors = ['#ffffff', '#f0f8ff', '#ffe4e1', '#f0fff0', '#fff8dc', '#e6e6fa'];
    const borderColors = ['#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6', '#e67e22'];
    const fontFamilies = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS'];
    const fontSizes = ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem', '1rem'];
    
    // Get DOM elements
    const fortuneText = document.getElementById('fortune-text');
    const fortuneBox = document.getElementById('fortune-box');
    const fontColorBtn = document.getElementById('font-color-btn');
    const bgColorBtn = document.getElementById('bg-color-btn');
    const borderColorBtn = document.getElementById('border-color-btn');
    const fontStyleBtn = document.getElementById('font-style-btn');
    
    // Function to get random fortune
    function getRandomFortune() {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }
    
    // Function to get random element from array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    // Display random fortune on page load
    function displayRandomFortune() {
        const randomFortune = getRandomFortune();
        fortuneText.textContent = randomFortune;
        console.log('Random fortune displayed:', randomFortune);
    }
    
    // Event listeners for style buttons
    fontColorBtn.addEventListener('click', function() {
        const randomColor = getRandomElement(fontColors);
        fortuneText.style.color = randomColor;
        console.log('Font color changed to:', randomColor);
    });
    
    bgColorBtn.addEventListener('click', function() {
        const randomBgColor = getRandomElement(bgColors);
        fortuneBox.style.backgroundColor = randomBgColor;
        console.log('Background color changed to:', randomBgColor);
    });
    
    borderColorBtn.addEventListener('click', function() {
        const randomBorderColor = getRandomElement(borderColors);
        fortuneBox.style.borderColor = randomBorderColor;
        console.log('Border color changed to:', randomBorderColor);
    });
    
    fontStyleBtn.addEventListener('click', function() {
        const randomFamily = getRandomElement(fontFamilies);
        const randomSize = getRandomElement(fontSizes);
        fortuneText.style.fontFamily = randomFamily;
        fortuneText.style.fontSize = randomSize;
        console.log('Font style changed to:', randomFamily, 'with size:', randomSize);
    });
    
    // Add click event to fortune box to generate new fortune
    fortuneBox.addEventListener('click', function() {
        displayRandomFortune();
    });
    
    // Initialize fortune generator
    displayRandomFortune();
    
    console.log('Fortune Generator initialized with', fortunes.length, 'fortunes');
});