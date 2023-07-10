function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Recursive case: factorial of n is n multiplied by factorial of (n-1)
    return n * factorial(n - 1);
  } 

factorial();

function isAProxy(arg) {
    let child = {};
    Object.setPrototypeOf(child, arg);
  
    let parent = {};
    Object.setPrototypeOf(arg, parent);
  
    try {
      Object.setPrototypeOf(parent, child); // see 9.1.2.1.8.c.i
      return true;
    } catch({}) {
      return false;
    }
  }
  
//   isAProxy(new Proxy({}, {})); // true
//   isAProxy({}); // false