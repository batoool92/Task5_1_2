const slides_container = document.querySelector('.slides_container');
const slides_container_array = slides_container.querySelectorAll('.slide');
const slide = document.querySelector('.slide');
const left_button = document.querySelector('#left_button');
const right_button = document.querySelector('#right_button');
const indicator1 = document.querySelector('#indicator1');
const indicator2 = document.querySelector('#indicator2');
const indicator3 = document.querySelector('#indicator3');
var currentSlide = 1;



//right button
right_button.addEventListener('click', () => {
    const slide_width = slide.clientWidth;
    slides_container.scrollLeft += slide_width;
    if (currentSlide !== slides_container_array.length) //change currentslide 
        currentSlide += 1;
});
//left button
left_button.addEventListener('click', () => {
    const slide_width = slide.clientWidth;
    slides_container.scrollLeft -= slide_width;
    if(currentSlide!== 0) //change currentslide 
    currentSlide -= 1;
});

// dots function

function showSlide(index) {

    if (currentSlide == index) { //if I press same slide dot, do nothing
        console.log(index);
        return false;
    }
    //go to slide if I press dot number > currentslide 
    else if (currentSlide < index) {
        const num = (index - currentSlide);
        slides_container.scrollLeft += (num * slide.clientWidth);

    }
    //go to slide if I press dot number < currentslide 
    else {
        const num = (currentSlide - index);
        slides_container.scrollLeft -= (num * slide.clientWidth);
    }
    currentSlide = index; // change currentslide

}