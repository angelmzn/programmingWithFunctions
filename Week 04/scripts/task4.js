/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let username = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
username.name = "Angel Eduardo Manzano Corpeño";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
username.photo="images/me.jpg";
    

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

username.favoriteFoods = ["Pizza", "tacos", "Pupusas", "Burritos", "Fruit"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
username.hobbies = ["Reading", "Videogames", "Watching Internet Videos", "Go out with my family"]

// Step 6: Add another property named placesLived with a value of an empty array
username.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
username.placesLived = [{place: "", length: ""}]

// Step 8: For each property, add appropriate values as strings

username.placesLived = [{place: "Jucuapa", length: "10 years"}]


// Step 9: Add additional objects with the same properties for each place you've lived

username.placesLived = [{place: "Jucuapa", length: "10 years"}, {place: "San Salvador", length: "20 years"}, {place: "Guatemala", length: "2 years"}]
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("span").innerHTML = username.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = username.photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = username.photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

const foodList = document.querySelector("#favorite-foods");

username.favoriteFoods.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    foodList.appendChild(li);
});


// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

const hobbyList = document.querySelector("#hobbies");

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

username.hobbies.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = item;
    hobbyList.appendChild(li);
});


// Step 8: For each object in the <em>placesLived</em> property:

const placesList = document.querySelector("#places-lived");

username.placesLived.forEach((item) => {
    // - Create an HTML <dt> element and put its place property in the <dt> element
    let dt = document.createElement("dt");
    dt.innerHTML = item.place;
    // - Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement("dd");
    dd.innerHTML = item.length;
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    placesList.appendChild(dt);
    placesList.appendChild(dd);
});





