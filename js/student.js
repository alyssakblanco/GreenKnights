
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
        heading.innerText = "Electronic Notetaking";
        description.innerText = "Ditch those notebooks and use your laptop or tablet to take all your notes. Saves space in your backpack, prevents clutter, and you can sync your notes across devices!";
    }
    two.onclick = function(){
        modal.style.display = "block";
        heading.innerText = "Upcycled Supplies";
        description.innerText = "Plastic pens? Shop for recycled ones, and make sure to recycle the plastic when you’re done.";
    }
    three.onclick = function(){
        modal.style.display = "block";
        heading.innerText = "Recycle Old Supplies";
        description.innerText = "All your old binders full of paper and notebooks can be recycled, along with your plastic supplies.";
    }
    four.onclick = function(){
        modal.style.display = "block";
        heading.innerText = "Electronic Mail";
        description.innerText = "Tired of getting tons of wasted paper junk in your mailbox? Save paper by opting out of junk mail letters and opt for e-staments from you service providers!";
    }
    five.onclick = function(){
        modal.style.display = "block";
        heading.innerText = "Smart Power";
        description.innerText = "Use a smart power strip for your electronic devices. They reduce your power usage, and therefore your carbon footprint, by shutting down devices that are in standby mode.";
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
