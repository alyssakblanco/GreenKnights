var modal = document.getElementById("infoModal");
var heading = document.getElementById("heading");
var description = document.getElementById("description");
var closebtn = document.getElementsByClassName("closebtn")[0];
var link = document.getElementById("link");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");

one.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "Bathroom Essentials";
    description.innerText = "Plastic bathroom products end up in a landfill indefinitely, or in our oceans. Swap out items like hairbrushes, combs, q-tips, and toilet scrubbers for ones made out of wood.";
    link.setAttribute("href", "#");
    link.innerHTML="";   
}

two.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "DIY";
    description.innerText = "Mix your own toothpaste, mouthwash, and deodorant. Normally these products come in plastic containers that are non-recyclable.";
    link.setAttribute("href", "https://www.thezerowastecollective.com/post/zero-waste-bathroom-diy-toothpaste-mouthwash-deodorant");
    link.innerHTML = "Click here to learn how!";
}

three.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "Shampoo";
    description.innerText = "Try using a shampoo bar instead of shampoo from a plastic bottle.";
    link.setAttribute("href", "https://www.sustainablejungle.com/best-of-sustainable-beauty/zero-waste-shampoo-conditioner/");
    link.innerHTML = "Zero waste shampoo and conditioners!";
}

four.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "Soap";
    description.innerText = "Replace plastic soap bottles with bar soap in non-plastic packaging!";
    link.setAttribute("href", "#");
    link.innerHTML="";
}

five.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "Shaving";
    description.innerText = "Swap disposable razors for a safety razor. Safety razors are made of stainless steel. The blades can be recycled at the end of their life, and the razor itself can last years!";
    link.setAttribute("href", "https://www.greenmatters.com/p/zero-waste-razors-shaving-guide");
    link.innerHTML = "Safety Razor Guide";
}

six.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "Toilet Paper";
    description.innerText = "Use 100% recycled toilet paper!";
    link.setAttribute("href", "https://www.seventhgeneration.com/bathroom-tissue-2-ply");
    link.innerHTML = "Seventh Generation 100% recycled toilet paper";
}
seven.onclick = function() {
    modal.style.display = "block";
    heading.innerText = "Makeup";
    description.innerText = "You can make your own makeup remover instead of buying single use wipes, or plastic bottles.";
    link.setAttribute("href", "https://www.healthline.com/health/diy-makeup-remover");
    link.innerHTML = "Click here for some recipes.";  
}

eight.onclick = function() {
    modal.style.display = "block";
    //heading.innerText ="heading";
    description.innerText = "You can use reusable facial rounds instead of single-use cotton pads/balls";
    link.setAttribute("href", "https://www.amazon.com/Remover-3-15inch-Reusable-Washable-Cleansing/dp/B07J55LS28/ref=sr_1_3?crid=1PSI6U8AGKMO0&keywords=reusable+facial+rounds&qid=1585590408&sprefix=reusable+facial%2Caps%2C181&sr=8-3");
    link.innerHTML="Buy here!";
}

closebtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function() {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}