// Fortune Generator functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Array of fortune messages (at least 10 as required)
    var fortunes = [
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
    
    // Style combinations for each button (each button changes all 4 properties)
    var styleOptions = [
        {
            fontColor: '#d8c8c6ff',
            backgroundColor: '#e74c3c',
            borderColor: '#3498db',
            fontFamily: 'Times New Roman',
            fontSize: '1.4rem'
        },
        {
            fontColor: '#3498db',
            backgroundColor: '#f0f8ff',
            borderColor: '#3498db',
            fontFamily: 'Georgia',
            fontSize: '1.6rem'
        },
        {
            fontColor: '#27ae60',
            backgroundColor: '#f0fff0',
            borderColor: '#27ae60',
            fontFamily: 'Courier New',
            fontSize: '1.2rem'
        },
        {
            fontColor: '#9b59b6',
            backgroundColor: '#e6e6fa',
            borderColor: '#9b59b6',
            fontFamily: 'Verdana',
            fontSize: '1.8rem'
        }
    ];
    
    // Get DOM elements
    var fortuneText = document.getElementById('fortune-text');
    var fortuneBox = document.getElementById('fortune-box');
    var styleBtn1 = document.getElementById('style-btn-1');
    var styleBtn2 = document.getElementById('style-btn-2');
    var styleBtn3 = document.getElementById('style-btn-3');
    var styleBtn4 = document.getElementById('style-btn-4');
    
    // Function to get random fortune
    function getRandomFortune() {
        var randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    }
    
    // Display random fortune on page load
    function displayRandomFortune() {
        var randomFortune = getRandomFortune();
        fortuneText.textContent = randomFortune;
        console.log('Random fortune displayed:', randomFortune);
    }
    
    // Function to apply style (changes all 4 properties at once)
    function applyStyle(styleIndex) {
        var style = styleOptions[styleIndex];
        
        // Change font color
        fortuneText.style.color = style.fontColor;
        
        // Change background color
        fortuneBox.style.backgroundColor = style.backgroundColor;
        
        // Change border color
        fortuneBox.style.borderColor = style.borderColor;
        
        // Change font family and size
        fortuneText.style.fontFamily = style.fontFamily;
        fortuneText.style.fontSize = style.fontSize;
        
        console.log('Style ' + (styleIndex + 1) + ' applied:');
        console.log('Font Color:', style.fontColor);
        console.log('Background Color:', style.backgroundColor);
        console.log('Border Color:', style.borderColor);
        console.log('Font Family:', style.fontFamily);
        console.log('Font Size:', style.fontSize);
    }
    
    // Event listeners for style buttons
    styleBtn1.addEventListener('click', function() {
        applyStyle(0);
    });
    
    styleBtn2.addEventListener('click', function() {
        applyStyle(1);
    });
    
    styleBtn3.addEventListener('click', function() {
        applyStyle(2);
    });
    
    styleBtn4.addEventListener('click', function() {
        applyStyle(3);
    });
    
    // Initialize fortune generator
    displayRandomFortune();
    
    console.log('Fortune Generator initialized with', fortunes.length, 'fortunes');
    console.log('Each button will change all 4 properties: font color, background color, border color, and font style');
});