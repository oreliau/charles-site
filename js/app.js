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

//remove button
function removeBtnCitation(className) {
    buttoncitation.classList.remove('active')
}
function removeBtnBook(className) {
    buttonbook.classList.remove('active')
}
function removeBtnVideo(className) {
    buttonvideo.classList.remove('active')
}

//active button
function addBtnCitation(className) {
    buttoncitation.classList.add('active')
}
function addBtnBook(className) {
    buttonbook.classList.add('active')
}
function addBtnVideo(className) {
    buttonvideo.classList.add('active')
}

//click on book btn
buttonbook.addEventListener('click', hidevideo);
buttonbook.addEventListener('click', hidecitation);
buttonbook.addEventListener('click', showbook);
buttonbook.addEventListener('click', removeBtnCitation);
buttonbook.addEventListener('click', removeBtnVideo);
buttonbook.addEventListener('click', addBtnBook);

// click on video btn
buttonvideo.addEventListener('click', hidecitation);
buttonvideo.addEventListener('click', hidebook);
buttonvideo.addEventListener('click', showvideo);
buttonvideo.addEventListener('click', removeBtnCitation);
buttonvideo.addEventListener('click', removeBtnBook);
buttonvideo.addEventListener('click', addBtnVideo);

//click on citation btn
buttoncitation.addEventListener('click', hidevideo);
buttoncitation.addEventListener('click', hidebook);
buttoncitation.addEventListener('click', showcitation);
buttoncitation.addEventListener('click', removeBtnBook);
buttoncitation.addEventListener('click', removeBtnVideo);
buttoncitation.addEventListener('click', addBtnCitation);