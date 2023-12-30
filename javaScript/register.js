

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




