var aboutHex = document.querySelector('#about-hex');
var projectHex = document.querySelector('#project-hex');
var futureHex = document.querySelector('#future-hex');
var contactHex = document.querySelector('#contact-hex');

var aboutNav = document.getElementsByClassName('about-nav');
var projectNav = document.getElementsByClassName('project-nav');
var futureNav = document.getElementsByClassName('future-nav');
var contactNav = document.getElementsByClassName('contact-nav');

//Rotate About hex icon
for(i=0; i < aboutNav.length; i++){
    (function(index){
        aboutNav[i].addEventListener('mouseenter', function(){
            aboutHex.style.transform = 'rotate(360deg)';
        })
        aboutNav[i].addEventListener('mouseout', function(){
            aboutHex.style.transform = 'rotate(0deg)';
        })
    })(i);
}

//Rotate Project hex icon
for(i=0; i < projectNav.length; i++){
    (function(index){
        projectNav[i].addEventListener('mouseenter', function(){
            projectHex.style.transform = 'rotate(360deg)';
        })
        projectNav[i].addEventListener('mouseout', function(){
            projectHex.style.transform = 'rotate(0deg)';
        })
    })(i);
}

//Rotate Future hex icon
for(i=0; i < futureNav.length; i++){
    (function(index){
        futureNav[i].addEventListener('mouseenter', function(){
            futureHex.style.transform = 'rotate(360deg)';
        })
        futureNav[i].addEventListener('mouseout', function(){
            futureHex.style.transform = 'rotate(0deg)';
        })
    })(i);
}

//Rotate Contact hex icon
for(i=0; i < contactNav.length; i++){
    (function(index){
        contactNav[i].addEventListener('mouseenter', function(){
            contactHex.style.transform = 'rotate(360deg)';
        })
        contactNav[i].addEventListener('mouseout', function(){
            contactHex.style.transform = 'rotate(0deg)';
        })
    })(i);
}