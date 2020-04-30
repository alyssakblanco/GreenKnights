var modal = document.getElementById("myModal");
var heading = document.getElementById("heading");
var description = document.getElementById("description");
var close = document.getElementById("close");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

one.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Can we get a watt watt?";
    description.innerText = "Switching to LEDs is way more energy efficient, and LEDs don’t contain mercury like CFLs. Go natural and take advantage of natural light when needed.";
}
two.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Green curtains for certian!";
    description.innerText = "Get crafty and make your own blinds from recycled textiles (like a flat sheet: Link to DIY). Save energy and keep those Florida cooling bills down by keeping them closed during the day.";
}
three.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Shop used furniture";
    description.innerText = "Second hand furniture is easy to come by! Shop your local thrift, or online listings for lightly used furniture, or buy vintage pieces and give them a makeover.";
}
four.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Eco-friendly bedding";
    description.innerText = "Eco friendly bedding consists of natural materials like cotton, or hemp as opposed to synthetic petroleum-based materials like polyester. ";
}
five.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Opt for essesntials";
    description.innerText = "Say no to aerosol sprays and opt for natural scents like essential oils, or open up the windows for some good old fashioned fresh air. ";
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