function reverse(s) {
  let rev = "";
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return rev;
}

function ispalindrome(str) {
  reverseStr = reverse(str);
  if (reverseStr === str) {
    console.log("passed string is palindrome ");
  } else {
    console.log("passed string is not palindrome");
  }
}
let test = "race car";
ispalindrome(test());
