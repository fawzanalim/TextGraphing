// Get references to the elements
const inputText = document.getElementById("inputText");
const outputArea = document.getElementById("outputArea");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const desmosButton = document.getElementById("openDesmosButton");

// Add a click event listener to open the Desmos calculator when the button is clicked
desmosButton.addEventListener("click", function() {
    window.open("https://www.desmos.com/calculator", "_blank");
});

// Add a click event listener to the "Copy to Clipboard" button
copyButton.addEventListener("click", function() {
    // Select the text in the outputArea
    outputArea.select();
    outputArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    outputArea.setSelectionRange(0, 0);

    // Alert the user that the text has been copied
    alert("Equations copied to clipboard!");
});

// Function to generate equations based on input
function generateEquations(inputText) {
    // Clean the input text
    const cleanedTextArray = inputText.split("\n").map(line => line.replace(/[^a-zA-Z\s]/g, '').toUpperCase());

    // Define functions for characters A to Z
    const charFunctions = {
        'A': function_A,
        'B': function_B,
        'C': function_C,
        'D': function_D,
        'E': function_E,
        'F': function_F,
        'G': function_G,
        'H': function_H,
        'I': function_I,
        'J': function_J,
        'K': function_K,
        'L': function_L,
        'M': function_M,
        'N': function_N,
        'O': function_O,
        'P': function_P,
        'Q': function_Q,
        'R': function_R,
        'S': function_S,
        'T': function_T,
        'U': function_U,
        'V': function_V,
        'W': function_W,
        'X': function_X,
        'Y': function_Y,
        'Z': function_Z
    };

    
    // Initialize line number and grid size
    let m = 0;
    const gridSize = 5;

    // Loop through each character in the cleaned text
    for (const line of cleanedTextArray) {
        for (let n = 0; n < line.length; n++) {
            const char = line.charAt(n);

            // Call functions based on characters (A to Z and space)
            if (charFunctions[char]) {
                charFunctions[char](n * gridSize, m * gridSize);
            } else if (char === ' ') {
                // Handle space character
                // You can add specific handling for spaces if needed
            }
        }

        // Reduce m by 1 for the next line
        m -= 1.4;
    }

}

// Add a click event listener to the Generate Equations button
generateButton.addEventListener("click", function() {
    // Get the input text
    const userInput = inputText.value;
    n = 0;
    m = 0;
    outputArea.value = '';
    // Call the generateEquations function with the user input
    generateEquations(userInput);
});


function function_A(X, Y) 
{
    const equation1 = `10x-3y=${10 * X - 3 * Y + 10}\\left\\{${X + 1}\\le x\\le${X + 2.5}\\right\\}`;
    const equation2 = `10x+3y=${10 * X + 3 * Y + 40}\\left\\{${X + 2.5}\\le x\\le${X + 4}\\right\\}`;
    const equation3 = `y=${Y + 2}\\left\\{${X + 1.6}\\le x\\le${X + 3.4}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_B(X, Y) 
{
    const equation1 = `x=${X + 1.5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `(x-${X + 2})^2+(y-${Y + 3.75})^2=1.25^2\\left\\{x \\ge${X + 2}\\right\\}`;
    const equation3 = `(x-${X + 2})^2+(y-${Y + 1.25})^2=1.25^2\\left\\{x \\ge${X + 2}\\right\\}`;
    const equation4 = `y=${Y + 5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    const equation5 = `y=${Y + 2.5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    const equation6 = `y=${Y}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
    outputArea.value += equation5 + '\n';
    outputArea.value += equation6 + '\n';
}

function function_C(X, Y) 
{
    const equation1 = `(x-${X + 2.5})^2+(y-${Y + 2.5})^2=2.5^2\\left\\{x \\le${X + 4.5}\\right\\}`;

    outputArea.value += equation1 + '\n';
}

function function_D(X, Y) 
{
    const equation1 = `x=${X + 1.5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `(x-${X + 2})^2+(y-${Y + 2.5})^2=2.5^2\\left\\{x \\ge${X + 2}\\right\\}`;
    const equation3 = `y=${Y + 5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    const equation4 = `y=${Y}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
}

function function_E(X, Y) {
    const equation1 = `y=${Y + 5}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;
    const equation2 = `y=${Y + 2.5}\\left\\{${X + 1}\\le x\\le${X + 3}\\right\\}`;
    const equation3 = `y=${Y}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;
    const equation4 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
}

function function_F(X, Y) {
    const equation1 = `y=${Y + 5}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;
    const equation2 = `y=${Y + 2.5}\\left\\{${X + 1}\\le x\\le${X + 3}\\right\\}`;
    const equation3 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_G(X, Y) {
    const equation1 = `(x-${X + 3})^2+(y-${Y + 2.5})^2=2.5^2\\left\\{x \\le${X + 4.5}\\right\\}`;
    const equation2 = `y=${Y + 2}\\left\\{${X + 3}\\le x\\le${X + 4.5}\\right\\}`;
    const equation3 = `x=${X + 4.5}\\left\\{${Y + 0.5}\\le y\\le${Y + 2}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_H(X, Y) {
    const equation1 = `y=${Y + 2.5}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;
    const equation2 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `x=${X + 4}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_I(X, Y) {
    const equation1 = `y=${Y + 5}\\left\\{${X + 1.5}\\le x\\le${X + 3.5}\\right\\}`;
    const equation2 = `x=${X + 2.5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `y=${Y}\\left\\{${X + 1.5}\\le x\\le${X + 3.5}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_J(X, Y) {
    const equation1 = `x=${X + 3}\\left\\{${Y + 1}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `(x-${X + 2})^2+(y-${Y + 1})^2=1^2\\left\\{${Y}\\le y\\le${Y + 1}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
}

function function_K(X, Y) {
    const equation1 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `3x-4y=${3 * X - 4 * Y - 8}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;
    const equation3 = `x+y=${X + Y + 4}\\left\\{${7 * X + 8}\\le7x\\le${7 * X + 28}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_L(X, Y) {
    const equation1 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `y=${Y}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
}

function function_M(X, Y) {
    const equation1 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `x=${X + 4}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `4x+3y=${4 * X + 3 * Y + 19}\\left\\{${X + 1}\\le x\\le${X + 2.5}\\right\\}`;
    const equation4 = `4x-3y=${4 * X - 3 * Y + 1}\\left\\{${X + 2.5}\\le x\\le${X + 4}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
}

function function_N(X, Y) {
    const equation1 = `x=${X + 1}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `x=${X + 4}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `5x+3y=${5 * X + 3 * Y + 20}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;

    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_O(X, Y) {
    const equation1 = `(x-${X + 2.5})^2+(y-${Y + 2.5})^2=2.5^2`;
    outputArea.value += equation1 + '\n';
}

function function_P(X, Y) {
    const equation1 = `x=${X + 1.5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `(x-${X + 2})^2+(y-${Y + 3.75})^2=1.25^2\\left\\{x\\ge${X + 2}\\right\\}`;
    const equation3 = `y=${Y + 5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    const equation4 = `y=${Y + 2.5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
}

function function_Q(X, Y) {
    const equation1 = `(x-${X + 2.5})^2+(y-${Y + 2.5})^2=2.5^2`;
    const equation2 = `x+y=${X + Y + 5}\\left\\{${X + 4}\\le x\\le${X + 5}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
}

function function_R(X, Y) {
    const equation1 = `x=${X + 1.5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `(x-${X + 2})^2+(y-${Y + 3.75})^2=1.25^2\\left\\{x\\ge${X + 2}\\right\\}`;
    const equation3 = `y=${Y + 5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    const equation4 = `y=${Y + 2.5}\\left\\{${X + 1.5}\\le x\\le${X + 2}\\right\\}`;
    const equation5 = `20x+10y=${20 * X + 10 * Y + 65}\\left\\{${X + 2}\\le x\\le${X + 3.25}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
    outputArea.value += equation5 + '\n';
}

function function_S(X, Y) {
    const equation1 = `(x-${X + 2.5})^2+(y-${Y + 3.8})^2=1.2^2\\left\\{y\\ge${Y + 4},x\\le${X + 2}\\right\\}`;
    const equation2 = `(x-${X + 2.5})^2+(y-${Y + 1.2})^2=1.2^2\\left\\{y\\le${Y + 1},x\\ge${X + 3}\\right\\}`;
    const equation3 = `0.42*x+y=${0.42 * X + Y + 3.55}\\left\\{${X + 2}\\le x\\le${X + 3}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_T(X, Y) {
    const equation1 = `x=${X + 2.5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `y=${Y + 5}\\left\\{${X + 1}\\le x\\le${X + 4}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
}

function function_U(X, Y) {
    const equation1 = `x=${X + 4}\\left\\{${Y + 1.5}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `x=${X + 1}\\left\\{${Y + 1.5}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `(x-${X + 2.5})^2+(y-${Y + 1.5})^2=1.5^2\\left\\{${Y}\\le y\\le${Y + 1.5}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_V(X, Y) {
    const equation1 = `10x+3y=${10 * X + 3 * Y + 25}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `10x-3y=${10 * X - 3 * Y + 25}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
}

function function_W(X, Y) {
    const equation1 = `4x+y=${4 * X + Y + 5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `4x-y=${4 * X + Y + 15}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `12x-5y=${12 * X - 5 * Y + 15}\\left\\{${Y}\\le y\\le${Y + 3}\\right\\}`;
    const equation4 = `12x+5y=${12 * X + 5 * Y + 45}\\left\\{${Y}\\le y\\le${Y + 3}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
    outputArea.value += equation4 + '\n';
}

function function_X(X, Y) {
    const equation1 = `5x+3y=${5 * X + 3 * Y + 20}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `5x-3y=${5 * X - 3 * Y + 5}\\left\\{${Y}\\le y\\le${Y + 5}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
}

function function_Y(X, Y) {
    const equation1 = `5x+3y=${5 * X + 3 * Y + 20}\\left\\{${Y + 2.5}\\le y\\le${Y + 5}\\right\\}`;
    const equation2 = `5x-3y=${5 * X - 3 * Y + 5}\\left\\{${Y + 2.5}\\le y\\le${Y + 5}\\right\\}`;
    const equation3 = `x=${X + 2.5}\\left\\{${Y}\\le y\\le${Y + 2.5}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

function function_Z(X, Y) {
    const equation1 = `y=${Y}\\left\\{${X}\\le x\\le${X + 5}\\right\\}`;
    const equation2 = `y=${Y + 5}\\left\\{${X}\\le x\\le${X + 5}\\right\\}`;
    const equation3 = `x-y=${X - Y}\\left\\{${X}\\le x\\le${X + 5}\\right\\}`;
    
    outputArea.value += equation1 + '\n';
    outputArea.value += equation2 + '\n';
    outputArea.value += equation3 + '\n';
}

