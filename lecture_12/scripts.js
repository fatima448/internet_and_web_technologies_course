// "use strict";
// const firstGroup = document.querySelector("#text-group-1");
// const secondGroup = document.querySelector(".text-group-2");

// firstGroup.style.color = "red";
// firstGroup.style.fontSize = "48px";
// firstGroup.style.fontWeight = "900";

// secondGroup.forEach((element) => {
//     element.style.color=" blue";
//     element.style.fontSize="48px" ;
//     element.style.fontWeight="900";
// });

//add ,remove,toggle,click ,mousedown,mouseup, keydown, keyup.key press
"use strict";
const submitBtn = document.querySelector("#submit-btn");
const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");
const ageInput = document.querySelector("#age");
const container =document.querySelector(".container");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let userFirstName = firstNameInput.value;
    let userLastName =lastNameInput.value;
    let userAge = ageInput.value;

    // console.log(userFirstName ,typeof userFirstName);

    const user ={
        firstName: userFirstName,
        lastName :userLastName,
        age:userAge,
    };

    const card =document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`<h2> ${user.firstName} ${user.lastName}</h2>
    <p> ${user.age}</p>`;
    container.insertAdjacentElement("afterbegin",card);
})