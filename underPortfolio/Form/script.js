document.getElementById("myButton").onclick = function () {
  let firstName, lastName;

  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;

  console.log("Hello " + lastName + " " + firstName + "!");
};
