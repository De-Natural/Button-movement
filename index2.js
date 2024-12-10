const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const form = document.querySelector('form');

btn.addEventListener('mouseenter', () => {
  // Check if email and password are both filled
  if (email.value.trim() && password.value.trim()) {
    // Get form dimensions and position
    const formRect = form.getBoundingClientRect();

    // Generate random positions within the form
    const maxX = formRect.width - btn.offsetWidth;
    const maxY = formRect.height - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Apply positions relative to the form
    btn.style.position = 'absolute'; // Ensure the button moves within the form
    btn.style.transform = `translate(${x}px, ${y}px)`;
  }
});