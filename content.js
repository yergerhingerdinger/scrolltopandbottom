// Create the button element
fabButton = document.createElement('button');
fabButton.innerText = '↓';
fabButton.classList.add('fab-button');

upButton = document.createElement('button');
upButton.innerText = '↑';
upButton.classList.add('up-button');

// Add click event listener to the button
fabButton.addEventListener('click', () => {
	// Add your action here
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth' // Optional: Smooth scrolling effect
	})	
});

// Add click event listener to the button
upButton.addEventListener('click', () => {
	// Add your action here
	window.scrollTo({
		top: 0,
		behavior: 'smooth' // Optional: Smooth scrolling effect
	})	
});

// Append the button to the body of the page
document.body.appendChild(fabButton);
document.body.appendChild(upButton);