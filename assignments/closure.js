// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const outside = "It's a beautiful day in the neighborhood"

function house (){
  console.log("in the heezy")

  function bedroom (){
    console.log("now I'm getting sleepy")

    function closet (){
      console.log("now I'm trapped in the closet")
    }
    return closet;
  }

  function garage (){
    console.log("new whip who dis")
  }

  function livingRoom(){
    console.log()
    function television(){
      console.log("I thought hurricane season was over!")
    }
    return television;
  }
}

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
