// Coding exercise: You are tasked to write a checker that validates
// the parentheses of a LISP code.  Write a program (in Node.js or
// JavaScript) which takes in a string as an input and returns
// true if all the parentheses in the string are properly closed and nested.

function isValid(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }
    
    return n == 0;
    }

console.log(isValid("this is right() (())"))
console.log(isValid("this is not correct(()))"))