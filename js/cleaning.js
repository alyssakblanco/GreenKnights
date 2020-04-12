
var modal = document.getElementById("myModal");
var heading = document.getElementById("heading");
var description = document.getElementById("description");
var close = document.getElementById("close");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");

one.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Using Resuable Towels";
    description.innerText = "Using reusable towels allows people to be less wasteful when cleaning their homes. You can use them over and over again, making them less wasteful than paper towels, and even reusable bamboo paper towels. You can make them from any old preused piece of fabric you have lying around your house, or you can even go out and buy one.";
}
two.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "No Need to Recycle When you Can Reuse";
    description.innerText = "Instead of going out and constantly buying all the different bottles of cleaning supplies that the average household uses, you can buy in bulk and just refill reusable bottles. This wastes less plastic, plus if you start using alternatives to those cleaning supplies you can still fill the bottles with those.";
}
three.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Using Baking Soda";
    description.innerText = "You can add baking soda to things like your mouthwash, because it has antibacterial and antimicrobial properties. It can get rid of different odors you may find around the house, because odors are typically caused by the formation of bacteria. Adding baking soda to your laundry can be a cheap whitening product for those hard to remove dirt and stains, it also helps soften the water.";
} //Borax is useful but has to be used responsibly. You can use it to make homemade laundry detergent, as well as to clean carpets. Do you think that you might be getting bugs such as roaches, water bugs and ants in your dorm or home? You can pour some borax and sugar where you think they may be entering to deter the pests. If you have any dirt, rust, or grime around the house you can use borax to clean, and it will effectively remove the blemishes with a damp sponge or cloth.
four.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Smell Better and Green On! Borax";
    description.innerText = "Borax is useful but has to be used responsibly. You can use it to make homemade laundry detergent, as well as to clean carpets. Do you think that you might be getting bugs such as roaches, water bugs and ants in your dorm or home? You can pour some borax and sugar where you think they may be entering to deter the pests. If you have any dirt, rust, or grime around the house you can use borax to clean, and it will effectively remove the blemishes with a damp sponge or cloth.";
}
five.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Hydrogen Peroxide Burns the Germs Too!";
    description.innerText = "If you have any spaces in the house that you think hold large amounts of bacteria, then hydrogen peroxide is definitely going to be your friend. Mixing hydrogen peroxide with water makes a solution strong enough to kill bacteria and give it a nice clean look.";
}
six.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Cleaning with White Vinegar";
    description.innerText = "White Vinegar can be used for many different cleaning purposes. It is an antifungal that kills germs and bacteria so it's great for mixing with water that you are using to mop floors. It also works very well for cleaning dirty multipurpose work rags in a washer. Could be put in refillable bottles!";
}
seven.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Lemon Juice for the Win";
    description.innerText = "Not only can lemon juice be used as a stain remover (it can break down grease!), but it's also a nice smelling nontoxic bleach. Instead of buying bleach this is a great alternative. It can also be put in refillable bottles!";
}
eight.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "It's a Cleaning Party!";
    description.innerText = "It can be used to breakdown and remove stains from clothing, while also having the potential of being used as a polisher! It can also be put in refillable bottles!";
}


// MODAL FUNCTIONS
close.onclick = function(){
    modal.style.display= "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// NAV FUNCTIONS
function circleNav() {
    var x = document.getElementById("navDiv");
    if (x.style.display == "block") {
        x.style.display = "none";
        document.getElementById("menu").src = "imgs/hamburger.png";
    } else {
        x.style.display = "block";
        document.getElementById("menu").src = "imgs/x.png";
    }
}
function drop() {
    var dropmenu = document.getElementById("dropdown");
    if (dropmenu.style.display == "block") {
        dropmenu.style.display = "none";
        } else {
            dropmenu.style.display = "block";
        }

}