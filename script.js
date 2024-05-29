document.addEventListener('DOMContentLoaded', function() {
    const trails = document.querySelectorAll('.trail');

    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.classList.add('visible');
        }, index * 200);
    });
});
