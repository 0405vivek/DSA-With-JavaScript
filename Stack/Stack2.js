// Famous interview problems
// Next greater elements
function nGreater(arr) {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }

    return result;
}

// Example usage
let arr = [1, 6, 4, 3, 5, 9, 7];
console.log(nGreater(arr)); 

// Balanced parenthesis

function Balanced(str) {
    let stack = [];
    let pair = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let char of str) {
        if (char === '{' || char === '[' || char === '(') {
            stack.push(char);
        } else if (char === '}' || char === ']' || char === ')') {
            if (stack.length === 0 || stack.pop() !== pair[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(Balanced("{[()]}"));
console.log(Balanced("{[(])}"));
console.log(Balanced("{{[[(())]]}}"));
console.log(Balanced("{[}"));





// Reverse string

function reverseString(str) {
    let stack = [];
    
    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = "";
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

console.log("hello = >",reverseString("hello")); 
console.log( "Satck = >", reverseString("Stack"));

