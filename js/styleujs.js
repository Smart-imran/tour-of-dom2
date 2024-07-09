const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = "2px solid red"; 
    section.style.marginBottom ="5px";
    section.style.borderRadius ="15px";
    section.style.paddingLeft ="20px";
    section.style.backgroundColor ="Lightgray"
    
}

const placesContainer = document.getElementById("place-container");

placesContainer.style.backgroundColor ="yellow";
placesContainer.classList.add("text-center");
