var slideIndex = 0;
        carousel();

        function carousel() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(carousel, 4000); // Change image every 2 seconds
        }

// Get the button element by its id
const new2button = document.getElementById('new2button');

// Add an event listener to the button for the 'click' event
new2button.addEventListener('click', function() {
    // Redirect to another web page
    window.location.href = 'MUNDAEXTREMEV1.HTML'; // Replace 'https://example.com' with the URL of the desired page
});

// Get the button element by its id
const new3button = document.getElementById('new3button');

// Add an event listener to the button for the 'click' event
new3button.addEventListener('click', function() {
    // Redirect to another web page
    window.location.href = 'MUNDAEXTREMEV1.HTML'; // Replace 'https://example.com' with the URL of the desired page
});
// Get the button element by its id
const new4button = document.getElementById('new4button');

// Add an event listener to the button for the 'click' event
new4button.addEventListener('click', function() {
    // Redirect to another web page
    window.location.href = 'MUNDAEXTREMEV1.HTML'; // Replace 'https://example.com' with the URL of the desired page
});

// Get the button element by its id
const new1button = document.getElementById('new1button');

// Add an event listener to the button for the 'click' event
new1button.addEventListener('click', function() {
    // Redirect to another web page
    window.location.href = 'MUNDAEXTREMEV2.HTML'; // Replace 'https://example.com' with the URL of the desired page
});

