// CONST ARRAY
const leftButton = [
    document.getElementById('leftBtn'),
    document.getElementById('leftBtn2'),
    document.getElementById('leftBtn3'),
    document.getElementById('leftBtn4'),
    document.getElementById('leftBtn5'),
    document.getElementById('leftBtn6'),
    document.getElementById('leftBtn7'),
    document.getElementById('leftBtn8')
];

const rightButton = [
    document.getElementById('rightBtn'),
    document.getElementById('rightBtn2'),
    document.getElementById('rightBtn3'),
    document.getElementById('rightBtn4'),
    document.getElementById('rightBtn5'),
    document.getElementById('rightBtn6'),
    document.getElementById('rightBtn7'),
    document.getElementById('rightBtn8')
];

// Gradient Background
var gradient = [
    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)"
];

// Background Images
var img = [
    "url(img/road.jpg)",
    "url(img/hotel-entrance.jpg)",
    "url(img/pt-figure.jpg)",
    "url(img/roof.jpg)",
    "url(img/roof-2.jpg)",
    "url(img/helicopter-zombies.jpg)",
    "url(img/helicopter.jpg)"
];

// Current Img & Gradient for First Choice
document.body.style.backgroundImage = img[0] + ", " + gradient[0];


// JOSE'S SET OF CHOICES
// CHOICE 1
leftButton[0].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionTwo').style.display = "block";
	document.getElementById('questionOne').style.display = "none";
    document.body.style.backgroundImage = img[1] + ", " + gradient[1];  
};

rightButton[0].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathOne').style.display = "block";
	document.getElementById('questionOne').style.display = "none";
};


// CHOICE 2
leftButton[1].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathTwo').style.display = "block";
	document.getElementById('questionTwo').style.display = "none";
};

rightButton[1].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionThree').style.display = "block";
	document.getElementById('questionTwo').style.display = "none";
    document.body.style.backgroundImage = img[2] + ", " + gradient[1];
};


// CHOICE 3
leftButton[2].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathThree').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
};

rightButton[2].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionFive').style.display = "block";
	document.getElementById('questionThree').style.display = "none";
    document.body.style.backgroundImage = img[3] + ", " + gradient[1];
};


// CHOICE 4
leftButton[3].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionFive').style.display = "block";
	document.getElementById('questionFour').style.display = "none";
};

rightButton[3].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathFour').style.display = "block";
	document.getElementById('questionFour').style.display = "none";
};


// JONATHAN'S SET OF CHOICES
// CHOICE 5
leftButton[4].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathFive').style.display = "block";
	document.getElementById('questionFive').style.display = "none";
};

rightButton[4].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionSix').style.display = "block";
	document.getElementById('questionFive').style.display = "none";
    document.body.style.backgroundImage = img[4] + ", " + gradient[0];
};


// CHOICE 6
leftButton[5].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionSeven').style.display = "block";
	document.getElementById('questionSix').style.display = "none";
    document.body.style.backgroundImage = img[5] + ", " + gradient[0];
};

rightButton[5].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathSix').style.display = "block";
	document.getElementById('questionSix').style.display = "none";
};


// CHOICE 7
leftButton[6].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathSeven').style.display = "block";
	document.getElementById('questionSeven').style.display = "none";
};

rightButton[6].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('questionEight').style.display = "block";
	document.getElementById('questionSeven').style.display = "none";
};


// ENDING
leftButton[7].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('deathEight').style.display = "block";
	document.getElementById('questionEight').style.display = "none";

};

rightButton[7].onclick = function () {
    const answer = document.getElementById('buttons').value;

    document.getElementById('ending').style.display = "block";
	document.getElementById('questionEight').style.display = "none";
    document.body.style.backgroundImage = img[6] + ", " + gradient[0];
};