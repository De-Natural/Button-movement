const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const moveDiv = document.querySelector('.move');

// Function to validate inputs and update button text
function validateInputs() {
    const emailIsValid = email.value.trim().endsWith('@gmail.com');
    const passwordIsValid = 
        password.value.length >= 8 && 
        /[!@#$%^&*(),.?":{}|<>]/.test(password.value);

    // Update button text based on validation
    if (emailIsValid && passwordIsValid) {
        btn.innerHTML = 'No cheating <i class="fa fa-undo" aria-hidden="true"></i>!';
    } else {
        btn.innerText = 'click me';
    }
}

// Attach event listeners to email and password fields
email.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);

btn.addEventListener('mouseenter', () => {
    if (!email.value.trim() || !password.value.trim()) {
        btn.innerText = 'Fill inputs first!';
        return; // Exit the function if inputs are empty
    }

    // Get parent div dimensions
    const parentRect = moveDiv.getBoundingClientRect();

    // Get button dimensions
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Calculate maximum boundaries for the button inside the parent
    const maxX = parentRect.width - btnWidth;
    const maxY = parentRect.height - btnHeight;

    // Generate random positions within the boundaries
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Generate random 3D rotation
    const rotateX = Math.random() * 360 - 180;
    const rotateY = Math.random() * 360 - 180;

    // Apply transformations
    btn.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
