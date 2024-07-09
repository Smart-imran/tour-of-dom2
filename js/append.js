 // 1. where to add 
const placesList =document.getElementById("places-list");
//2 what to be added 
const li  =document.createElement("li");
li.innerText ="Singapur";

//3. add the child
placesList.appendChild(li);


//ehre to add
const mainCointainer =document.getElementById("main-content");
//what to be add 
const section = document.createElement("section");
const h1 = document.createElement("h1");

h1.innerText="My food List";
section.appendChild(h1);


const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText ="Birayni";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText ="Borhani";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText ="Lassi";
ul.appendChild(li3);

section.appendChild(ul);

mainCointainer.appendChild(section);

//set inner html directly

const sectiondress = document.createElement("section");
sectiondress.innerHTML =`<h1>My dress Section</h1> <ul>
<li>Pangabi</li>
<li>T-shirt</li>
<li>Pant</li>

</ul>`

mainCointainer.appendChild(sectiondress);
