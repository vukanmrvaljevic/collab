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


// Phase 1
leftButton[0].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('Two').style.display = "block";
    document.getElementById('One').style.display = "none";
  
};
rightButton[0].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('lostOne').style.display = "block";
    document.getElementById('One').style.display = "none";
};
// Phase 2
leftButton[1].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('lostTwo').style.display = "block";
    document.getElementById('Two').style.display = "none";
};
rightButton[1].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('Three').style.display = "block";
    document.getElementById('Two').style.display = "none";
    
};
// Phase 3
leftButton[2].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('lostThree').style.display = "block";
    document.getElementById('Three').style.display = "none";
};
rightButton[2].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('Five').style.display = "block";
    document.getElementById('Three').style.display = "none";
 
};
// Phase 4
leftButton[3].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('Five').style.display = "block";
    document.getElementById('Four').style.display = "none";
};
rightButton[3].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('lostFour').style.display = "block";
    document.getElementById('Four').style.display = "none";
};

// Phase 5
leftButton[4].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('lostFive').style.display = "block";
    document.getElementById('Five').style.display = "none";
};
rightButton[4].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('Six').style.display = "block";
    document.getElementById('Five').style.display = "none";

};
// Phase 6
leftButton[5].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('ending').style.display = "block";
    document.getElementById('Six').style.display = "none";
  
};
rightButton[5].onclick = function () {
    const answer = document.getElementById('buttons').value;
    document.getElementById('lostSix').style.display = "block";
    document.getElementById('Six').style.display = "none";
};
