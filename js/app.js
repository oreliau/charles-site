// for citation tab show and hide element

// search element
var selectcitation = document.querySelectorAll('.citation');
var selectvideo = document.querySelectorAll('.video');
var selectbook = document.querySelectorAll('.book');

//search button
var buttoncitation = document.getElementById('citationbtn');
var buttonvideo = document.getElementById('videobtn');
var buttonbook = document.getElementById('bookbtn');


// hide fuction
function hidecitation(className) {
    var index = 0, length = selectcitation.length;
    for ( ; index < length; index++) {
        selectcitation[index].classList.add('hideelem');
    }
};

function hidebook(className) {
    var index = 0, length = selectbook.length;
    for ( ; index < length; index++) {
        selectbook[index].classList.add('hideelem')
    }
};

function hidevideo(className) {
    var index = 0, length = selectvideo.length;
    for ( ; index < length; index++) {
        selectvideo[index].classList.add('hideelem')
    }
};


//show function
function showbook(className) {
    var index = 0, length = selectbook.length;
    for ( ; index < length; index++) {
        selectbook[index].classList.remove('hideelem')
    }
};

function showvideo(className) {
    var index = 0, length = selectvideo.length;
    for ( ; index < length; index++) {
        selectvideo[index].classList.remove('hideelem')
    }
};

function showcitation(className) {
    var index = 0, length = selectcitation.length;
    for ( ; index < length; index++) {
        selectcitation[index].classList.remove('hideelem')
    }
};


//click on book btn
buttonbook.addEventListener('click', hidevideo);
buttonbook.addEventListener('click', hidecitation);
buttonbook.addEventListener('click', showbook);

// click on video btn
buttonvideo.addEventListener('click', hidecitation);
buttonvideo.addEventListener('click', hidebook);
buttonvideo.addEventListener('click', showvideo);

//click on citation btn
buttoncitation.addEventListener('click', hidevideo);
buttoncitation.addEventListener('click', hidebook);
buttoncitation.addEventListener('click', showcitation);