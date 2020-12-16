const palindrome = str => {
  let newStr = str.replace(/\W|_/gi, "").toLowerCase();
  if (newStr.length < 1) return false;
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) return false;
  }
  return true;
}

/* const test = (foo, expected, msg) => {
  console.log(`${msg} should return`, expected, `instead it returns`, foo);
  return foo;
} */

// test(palindrome("eye"), "boolean", `palindrome("eye")`);
// test(palindrome("eye"), true, `palindrome("eye")`)
// test(palindrome("_eye"), true, `palindrome("_eye")`);
// test(palindrome("race car"), true, `palindrome("race car")`);
// test(palindrome("not a palindrome"), false, `palindrome("not a palindrome")`);
// test(palindrome("A man, a plan, a canal. Panama"), true, `palindrome("A man, a plan, a canal. Panama")`);
// test(palindrome("never odd or even"), true, `palindrome("never odd or even")`);
// test(palindrome("nope"), false, `palindrome("nope")`);
// test(palindrome("almostomla"), false, `palindrome("almostomla")`);
// test(palindrome("My age is 0, 0 si ega ym."), true, `palindrome("My age is 0, 0 si ega ym.")`);
// test(palindrome("1 eye for of 1 eye."), false, `palindrome("1 eye for of 1 eye.")`);
// test(palindrome("0_0 (: /-\ :) 0-0"), true, `palindrome("0_0 (: /-\ :) 0-0")`);
// test(palindrome("five|\_/|four"), false, `palindrome("five|\_/|four")`);
