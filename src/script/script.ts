// Get current year
const today = new Date();
const currentYearElement = document.querySelector("#currentyear") as HTMLElement;
if (currentYearElement) {
  currentYearElement.textContent = today.getFullYear().toString();
}

// Get last updated
const lastUpdatedElement = document.querySelector("#updated") as HTMLElement;
if (lastUpdatedElement) {
  lastUpdatedElement.textContent = document.lastModified;
}




// const currentYearElement = document.getElementById("currentyear");

// if (currentYearElement) {
//   const year: number = new Date().getFullYear();
//   const stringYear: string = year.toString();
//   currentYearElement.textContent = stringYear;
// }



// // Declare the year variable as a constant and assign it the current year as a number
// const year: number = new Date().getFullYear();

// // Convert the year to a string using the toString() method
// const stringYear: string = year.toString();

// // Get the currentYear element by its id and check if it is not null
// const currentYear = document.getElementById("currentyear");
// if (currentYear) {
//   // Assign the stringYear to the textContent property of the currentYear element
//   currentYear.textContent = stringYear;
// }


// const year: number = new Date().getFullYear();
// const stringYear = year.toString();
// const currentYear = document.getElementById("currentyear");
// currentYear.textContent = year;



// // get current year
// const today = new Date();
// const currentyear = document.querySelector("#currentyear");
// currentyear.textContent = today.getFullYear();

// //get last updated
// const lastupdated = document.querySelector("#updated");
// lastupdated.textContent = document.lastModified;