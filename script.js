document.addEventListener('DOMContentLoaded', (event) => {
    // Event listener for "WATCH" buttons
    const watchButtons = document.querySelectorAll('.btn-outline-dark');

    watchButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Redirecting to the live stream!');
            // Here you would typically redirect to the streaming page or perform another action
        });
    });

    // Mouseover effect for event items
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f8f9fa'; // changes background color on hover
        });

        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // resets background color when not hovered
        });
    });
});

document.getElementById('searchBar').addEventListener('focus', function() {
    animateWidth(this, 200, 300); // Expands to 200px over 300 milliseconds
});

document.getElementById('searchBar').addEventListener('blur', function() {
    animateWidth(this, 100, 300); // Contracts to 50px over 300 milliseconds
});

function animateWidth(element, targetWidth, duration) {
    var startWidth = element.offsetWidth;
    var startTime = Date.now();

    function animate() {
        var elapsedTime = Date.now() - startTime;
        var width = startWidth + (targetWidth - startWidth) * Math.min(elapsedTime / duration, 1);

        element.style.width = width + 'px';

        if (elapsedTime < duration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

document.getElementById('playAudio').addEventListener('click', function() {
    var audio = new Audio('ronaldo-siuuuu.mp3'); 
    audio.play();
});

function rotate(element, duration, angle) {
let startRotation = 0;

function updateRotation(timestamp) {
    if (!startRotation) startRotation = timestamp;
    
    const timePassed = timestamp - startRotation;
    
    const currentAngle = (timePassed / duration) * angle;
    
    element.style.transform = 'rotate(' + currentAngle + 'deg)';
    
    if (timePassed < duration) {
    requestAnimationFrame(updateRotation);
    } else {
    element.style.transform = 'rotate(0deg)';
    }
}

requestAnimationFrame(updateRotation);
}

document.addEventListener('DOMContentLoaded', (event) => {
const logo = document.getElementById('logo');

logo.addEventListener('click', function() {
    rotate(logo, 2000, 360);
});
});

document.addEventListener('DOMContentLoaded', (event) => {
    var cardImage = document.querySelector('.card-img-top-container img');
    var hoverText = document.querySelector('.card-img-top-container .hover-text');

    cardImage.addEventListener('mouseenter', function() {
        hoverText.style.display = 'flex'; 
    });

    // Add mouseleave event listener
    cardImage.addEventListener('mouseleave', function() {
        hoverText.style.display = 'none'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const statisticsItems = document.querySelectorAll('.list-group-item');
  
    statisticsItems.forEach((item) => {
      item.addEventListener('click', () => {
        // Start the animation
        animateElement(item);
      });
    });
  });
  
function animateElement(element) {
let start = null;
const duration = 500; // animation duration in milliseconds
const scaleUp = 1.1; // scale up factor
const scaleDown = 1; // scale down back to normal size
const originalBackgroundColor = element.style.backgroundColor; // Store the original background color
const animationBackgroundColor = 'lightblue'; // Change to the new background color on click

function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    // Change background color during animation
    if (progress < duration / 2) {
    // Scale up and change background color in the first half of the animation
    element.style.backgroundColor = animationBackgroundColor;
    element.style.transform = `scale(${scaleUp})`;
    } else {
    // Scale down in the second half of the animation
    element.style.transform = `scale(${scaleDown})`;
    }

    if (progress < duration) {
    requestAnimationFrame(step); // Continue the animation
    } else {
    element.style.transform = `scale(${scaleDown})`; // Reset to original scale
    element.style.backgroundColor = originalBackgroundColor; // Reset the background color
    }
}

requestAnimationFrame(step); // Start the animation
}
  
// Get the button
var scrollTopButton = document.getElementById("scrollTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollTopButton.addEventListener('click', function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    var searchQuery = document.getElementById('searchBar').value;
    
    // You can process the search query here
    console.log('Search Query:', searchQuery);
    
    // For example, redirect to a search results page (if you have one)
    // window.location.href = '/search-results.html?query=' + encodeURIComponent(searchQuery);

    // Or, you can make an AJAX call to your server to fetch/search data
    // fetch('/search?query=' + encodeURIComponent(searchQuery))
    //   .then(response => response.json())
    //   .then(data => {
    //     // Process and display the search results
    //   });
});
