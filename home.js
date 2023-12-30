

function toggleMobileMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.transform === 'translateX(0%)') {
        mobileMenu.style.transform = 'translateX(-100%)';
    } else {
        mobileMenu.style.transform = 'translateX(0%)';
    }
}

// Toggle mobile dropdown menu visibility
function toggleMobileDropdown() {
    var mobileDropdown = document.getElementById('mobileDropdown');
    mobileDropdown.style.display = (mobileDropdown.style.display === 'none' || mobileDropdown.style.display === '') ? 'block' : 'none';
}

// Close mobile menu when a link is clicked
function closeMobileMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.transform = 'translateX(-100%)';
}


//findPlumbers Section
const projectsCounter = document.getElementById('projectsCounter');
const clientsCounter = document.getElementById('clientsCounter');
const percentageCounter = document.getElementById('percentageCounter');

const startCountUp = () => {
    if (isElementInViewport(projectsCounter)) {
        countUp(projectsCounter, 2000);
    }
    if (isElementInViewport(clientsCounter)) {
        countUp(clientsCounter, 5000);
    }
    if (isElementInViewport(percentageCounter)) {
        countUp(percentageCounter, 60, '%');
    }
};

const countUp = (element, target, suffix = '') => {
    let current = 0;
    const increment = target / 80; // Change this value for faster/slower animation

    const updateCounter = () => {
        current += increment;
        element.textContent = Math.floor(current) + suffix;

        if (current < target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };

    updateCounter();
};

const isElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', startCountUp);
startCountUp(); // Initial check
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll function
    function scrollToElement(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Attach click event to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToElement(targetId);
        });
    });
});


//fade up anumation jquweryyyyy
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-up').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});
// fade right
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-right').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

// for zoom in
$(document).ready(function () {
    $(window).scroll(function () {
        $('.zoom-in').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

// for fade left
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-left').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});

// for fade down right
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-down-right').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});
// for fade left
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-down-left').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});
// for fade down
$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-down').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active');
            }
        });
    });
});