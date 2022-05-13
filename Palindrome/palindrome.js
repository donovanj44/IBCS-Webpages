function myFunction(){
    var word = document.getElementById("word").value;

    if(palindrome(word)==true){
        document.getElementById("response").innerHTML = word + " is a palindrome"
    } else {
        document.getElementById("response").innerHTML = word + " is not a palindrome"
    }
}
function palindrome(word){
    var wordLower = word.toLowerCase();
    var reverse = word.split('').reverse().join('');
    return reverse==wordLower;
}
