/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = date.getDay();


// Step 4: Declare a variable to hold a message that will be displayed

let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

if (dayOfWeek < 6 ) {
    message1 = "Hang in there"
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
} else {
    message1 = "Woohoo! It is the weekend!"
};

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

let message2;



// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above


let day;

switch (dayOfWeek) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  message2 = "Today is " + day + ".";
  
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

document.querySelector("#message1").innerHTML = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.querySelector("#message2").innerHTML = message2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = ["El Salvador"]

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:

function output(temples) {

  templeList = temples;
  let div = document.querySelector("#temples");
  temples.ForEach(temple => {
    // - Creates an HTML <article> element
    let article = document.createElement('article');
    // - Creates an HTML <h3> element and add the temple's templeName property to it
    let h3 = document.createElement('h3');
    h3.innerHTML = temple.templeName;
    // - Creates an HTML <h4> element and add the temple's location property to it
    let h4One = document.createElement('h4');
    h4One.innerHTML = temple.location;
    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    let h4Two = document.createElement('h4');
    h4Second.innerHTML = temple.dedicated;
    // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    let image = document.createElement('img');
    image.setAttribute('src', temple.imageUrl);
    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    article.appendChild(h3);
    article.appendChild(h4One);
    article.appendChild(h4Two);
    article.appendChild(image);
    // - Appends the <article> element to the HTML element with an ID of temples
    div.appendChild(article);
  })
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
  // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
  let response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
  // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
  let templeArray = await response.json();
  output(templeArray);
}


  // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
  getTemples(templeList)



// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

function reset() {
  return document.querySelector('#temples').innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy(item) {
  // - Calls the reset function
  reset();
  // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
  let sort = document.querySelector("#sortBy");

  if (item.target.value === 'templeNameAscending') {
    let sorted = templeList.sort(function(a,b) {return a.templeName>b.templeName ? 1 : -1});
    return output(sorted);
  } else if (item.target.value === 'templeNameDescending') {
    let sorted = templeList.sort(function(a,b) {return b.templeName>a.templeName ? 1 : -1});
    
    return output(sorted);
  };
}

// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener('change', sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
