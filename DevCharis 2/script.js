// JavaScript is not always required for a basic sticky header, but you can use it for more advanced functionality if needed.

// In this example, let's add a class to the header when the user scrolls down the page to make it sticky.
window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
