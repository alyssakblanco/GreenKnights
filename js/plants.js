var modal = document.getElementById("myModal");
var heading = document.getElementById("heading");
var description = document.getElementById("description");
var close = document.getElementById("close");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var oneB = document.getElementById("oneB");
var twoB = document.getElementById("twoB");
var threeB = document.getElementById("threeB");
var fourB = document.getElementById("fourB");
var fiveB = document.getElementById("fiveB");

var btn = document.getElementById("switch");
var plantBG = document.getElementById("bkgrdPic");

//y waiting until second click 2 work
//BUTTON FUNCTION
btn.onclick = function(){
    if(one.style.visibility == "visible"){
        plantBG.src = "imgs/plants/plants2.png";
            
        oneB.style.visibility = "visible";
        twoB.style.visibility = "visible";
        threeB.style.visibility = "visible";
        fourB.style.visibility = "visible";
        fiveB.style.visibility = "visible";
            
        one.style.visibility = "hidden";
        two.style.visibility = "hidden";
        three.style.visibility = "hidden";
        four.style.visibility = "hidden";
        five.style.visibility = "hidden";
    }else{
        plantBG.src = "imgs/plants/plants1.png";

        oneB.style.visibility = "hidden";
        twoB.style.visibility = "hidden";
        threeB.style.visibility = "hidden";
        fourB.style.visibility = "hidden";
        fiveB.style.visibility = "hidden";
            
        one.style.visibility = "visible";
        two.style.visibility = "visible";
        three.style.visibility = "visible";
        four.style.visibility = "visible";
        five.style.visibility = "visible";
    }
}

one.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Ponytail Palm";
    description.innerText = "This plant will absorb carbon dioxide and release oxygen which will help maintain a healthy environment in your room."
    care.innerText= "Ponytail Care:";
    instructions.innerText="It will need a bright place in your room. The palm has to be watered once every 7-10 days when the soil looks dry.";
};
two.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Peace Lily";
    description.innerText = "Peace lily is a well known houseplant with dark green leaves and white blooms. This low maintenance plant will not only enhance your décor, but will also work hard to purify and clean the air in your room. Research by the American Horticultural Therapy Association found a plant in your room such as this lily can increase your memory."
    care.innerText= "Peace Lily Care:";
    instructions.innerText="The more sunshine the lily gets, the more it blooms. Place this plant in an area with medium to high sunlight. The soil also must be evenly moist.";
};
three.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Cacti and Succulents";
    description.innerText = "The dryland plants are easy to take care of, and they come in different colors, shapes, and textures. The plants are perfect picks for students, since they don’t have high water needs. A study completed by the Royal College of Agriculture in England discovered that having plants in schools help students to be more attentive by 70 percent. You can have one on your desk to help you stay focused."
    care.innerText= "Cacti and Succulent Care:";
    instructions.innerText="Cacti and succulents like bright sunlight. The best place for them is a window where they can receive maximum light. Let the soil dry completely before watering.";
};
four.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Lucky Bamboo";
    description.innerText = "Keep a bamboo where you study. Studies by the American Horticultural Therapy Association revealed that students who have plants such as lucky bamboo in their rooms can focus better than those without."
    care.innerText= "Bamboo Care:";
    instructions.innerText="Grown best in medium to low light. The leaves can get sunburns it's under direct sunlight. The soil needs to be moist, so grow bamboo in a water-filled pot or water it frequently.";
};
five.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Sago Palm";
    description.innerText = "This plant has tough dark green tropical foliage. The Sago Palm is an unusual and edgy choice for a room plant.";
    care.innerText= "Sago Palm Care:";
    instructions.innerText="Sago Palm loves medium to bright spots. The soil needs to be dry before being watered. It thrives under minimum care, so it will survive your busy college days. NASA research shows that having plants such as this palm in your room removes up to 87 percent of indoor pollutants.";
};

oneB.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Myosotis or Forget-Me-Not";
    description.innerText = "This plant has gray-green foliage and clusters of small, light-blue flowers. The plant releases oxygen into the air that can improve your sleep quality."
    care.innerText= "Forget-Me-Not Care:";
    instructions.innerText="Requires little care. Grows best in moist, but well-drained soil. It can also grow in nutrient-poor soil, so it is not necessary to fertilize them. The pot it's in needs to have drainage holes as well. Place it in full or partial sunlit place. In winter, reduce watering to about once or twice each month, since the plant is dormant. Water it more regularly in the spring.";
};
twoB.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Aloe";
    description.innerText = "Aloe can survive in various conditions with minimum maintenance. The plant’s extracted juice can soothe skin and heal minor burns and cuts. According to studies from the American Horticultural Therapy Association, having plants such as aloe in your room promotes a sense of optimism and well-being."
    care.innerText= "Aloe Care:";
    instructions.innerText="Aloe likes bright light, so keep it near a window. Its soil also needs to be evenly moist, Aloe does not like to be too dry or too moist.";
};
threeB.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Anthurium";
    description.innerText = "This plant has bright and shiny red or pink blooms with deep green leaves. This beautiful plant is easy to maintain, and it will make your room feel cozy. It is tolerant for different living conditions, and if it receives enough sunlight the plant will bloom all year around. Keeping a plant in your room improves mood and promotes goal achievement, according to studies by the American Horticultural Therapy association."
    care.innerText= "Anthurium Care:";
    instructions.innerText="For best growth results, keep Arthurium in bright spot. The soil also needs to be evenly moisturized.";
};
fourB.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Snake Plant";
    description.innerText = "The Snake Plant has vertical, striped leaves. It gives a trendy, modern look to your room! Studies by the American Horticultural Therapy Association show that caring for a plant increases levels of self-esteem."
    care.innerText= "Snake Plant Care:";
    instructions.innerText="They are easy to maintain. The Snake Plant only needs to be watered once a week, and it can grow in high, medium, or low sunlight. In addition, it is tolerant to dry soil, therefore it's a perfect choice for busy students!";
};
fiveB.onclick = function(){
    modal.style.display = "block";
    heading.innerText = "Money Tree";
    description.innerText = "Money trees are frequently grown and braided together for a more interesting look, as well as to resemble a tropical bonsai. It gives a classy, sophisticated appearance to your dorm. A research study revealed people that have plants in their rooms experience less stress and heal faster than those without.";
    care.innerText= "Money tree Care:";
    instructions.innerText="The Money Tree needs medium to bright sunlight, and evenly moist soil.";
};


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