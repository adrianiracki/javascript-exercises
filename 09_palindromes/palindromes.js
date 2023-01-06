const palindromes = function (string) {
    let onlyLetters = '';
    for(let i = 0; i < string.length; i++){
      if(/[a-z]/i.test(string.charAt(i))){
          onlyLetters += string.charAt(i);
      }
    };
      let reversed = '';
      for(let i = onlyLetters.length - 1; i >= 0; i--) {
        reversed += onlyLetters.charAt(i);
      }
      return reversed.toLowerCase() === onlyLetters.toLowerCase();
    };

// Do not edit below this line
module.exports = palindromes;
