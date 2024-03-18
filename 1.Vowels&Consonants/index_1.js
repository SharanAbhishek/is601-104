function countCharacters() {
    // Get the input string entered by the user
    var inputString = document.getElementById('inputString').value.toLowerCase();

    // Initialize counters for vowels and consonants
    var vowelsCount = 0;
    var consonantsCount = 0;

    // Define arrays of vowels and consonants
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = 'bcdfghjklmnpqrstvwxyz';

    // Loop through each character in the input string
    for (var i = 0; i < inputString.length; i++) {
        var char = inputString[i];

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelsCount++;
        }
        // Check if the character is a consonant
        else if (consonants.includes(char)) {
            consonantsCount++;
        }
    }

    // Display the counts of vowels and consonants in the result div
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Vowels: ' + vowelsCount + '<br>Consonants: ' + consonantsCount;
}