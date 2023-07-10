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