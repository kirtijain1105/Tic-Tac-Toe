function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Recursive case: factorial of n is n multiplied by factorial of (n-1)
    return n * factorial(n - 1);
  } 

factorial();

var f = function(m){
    x: try {
      return 2;
    } finally {
      try {
        
      } finally {
        switch(m) {
          case 0: return 0;
          case 1: break x;
          case 2: "nop";
        }
      }
    }
    return 1;
  }
  
  console.log(f(0) == 0);
  console.log(f(1) == 1);
  console.log(f(2) == 2);


  