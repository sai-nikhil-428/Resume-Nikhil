document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('ul li a');

    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY;

        navLinks.forEach(link => {
            // Check that the hash is not an empty string
            if (link.hash) {
                let section = document.querySelector(link.hash);

                if (section) {
                    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                        link.classList.add('menuactive');
                    } else {
                        link.classList.remove('menuactive');
                    }
                }
            }
        });
    });
});
