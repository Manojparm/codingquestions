/*what is palindrome
a word,verse,or sentence (such as "madam") or a number
(such as 1881) that reads the same backward or forward.
*/

const checkPalindrom=(str)=>{
  const reverseStr=str.split("").reverse().join("");
  if(reverseStr===str){
    console.log("yes it is palindrome");
  } 
  else{
    console.log("No it in not palindrome");
  }
  
  
}
checkPalindrom("eye");