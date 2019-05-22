// Your code goes here

//1. mouseover links change color to purple///////////////////////////////////////
const navLink = document.querySelectorAll('nav a'); // navLink is an obj name and variable. 
//querySelectorAll is a DOM method.
// document - the DOM tree - it's the whole damn page. 
// querySelectorAll - a document method.
// Use . to select class in the blah blah querySelectorAll (param?) 
// now I'm invoking "The Object" and passing it in the forEach with it's own (param?) 
navLink.forEach((hover) => { 
  hover.addEventListener('mouseover', (event) => { //
    event.target.style.color = 'purple';

    //assign the target to .style. Why? 

    setTimeout( ()=> { event.target.style.color = 'black'}, 1000 )

    
  });
});


//2. click content destination and img//////////////////////////////////////////////
const contentDestination = document.querySelector('.content-destination');
contentDestination.addEventListener('click', (event) => {
  //console.log(`content destination clicked`);
  event.target.style.
});

const contentDestinationImg = document.querySelector(
    '.content-destination img',
  );
  contentDestinationImg.addEventListener('click',(event) => {
    console.log(`content destination img clicked`);
    event.stopPropagation();
  });
  