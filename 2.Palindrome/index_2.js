function checkPalindrome() {
    var inputString = document.getElementById('inputString').value;
    var length = inputString.length;
    var isPalindrome = true;

    for (var i = 0; i < length / 2; i++) {
        if (inputString[i] !== inputString[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    var resultMessage = isPalindrome ? 'Yes, it is a palindrome.' : 'No, it is not a palindrome.';
    document.getElementById('result').innerHTML = resultMessage;
}