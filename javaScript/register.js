

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



function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var rate = document.getElementById('rate').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (!name || !email || !phone || !age || !rate || !password) {
        alert('All fields must be filled out');
        return;
    }

    // Email validation using a simple pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone number validation using a simple pattern
    var phonePattern = /^03\d{2}-\d{7}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid Pakistan phone number (e.g., 03XZ-YYYYYYY)');
        return;
    }
    if (age < 0) {
        alert('Age cannot be negative');
        return;
    }

    // Additional validation for hourly rate and age
    if (rate < 5) {
        alert('Hourly rate must be 5 or greater');
        return;
    }
    //password validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long');
        return;
    }

    // Call submitForm and handle the promise
    submitForm()
        .then(data => {
            alert('Form submitted successfully!');
            console.log(data);
        })
        .catch(error => {
            alert('Error submitting form. Please try again.');
            console.error('Error:', error);
        });
}

function resetFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('age').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('password').value = '';
}
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var rate = document.getElementById('rate').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (!name || !email || !phone || !age || !rate || !password) {
        alert('All fields must be filled out');
        return;
    }

    // Email validation using a simple pattern
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone number validation using a simple pattern
    var phonePattern = /^03\d{2}-\d{7}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid Pakistan phone number (e.g., 03XZ-YYYYYYY)');
        return;
    }
    if (age < 0) {
        alert('Age cannot be negative');
        return;
    }

    // Additional validation for hourly rate and age
    if (rate < 5) {
        alert('Hourly rate must be 5 or greater');
        return;
    }
    //password validation
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long');
        return;
    }

    // Call submitForm and handle the promise
    submitForm()
        .then(data => {
            alert('Form submitted successfully!');
            console.log(data);
        })
        .catch(error => {
            alert('Error submitting form. Please try again.');
            console.error('Error:', error);
        });
}

function resetFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('age').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('password').value = '';
    document.getElementById('city').value = '';
}
// function submitForm() {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var age = document.getElementById('age').value;
//     var rate = document.getElementById('rate').value;
//     var password = document.getElementById('password').value; // Added line for password

//     // Create an object with the form data
//     var formData = {
//         name: name,
//         email: email,
//         phone: phone,
//         age: age,
//         rate: rate,
//         password: password // Added password field
//     };

//     // Send a POST request to the backend
//     fetch('http://localhost:3000/api/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Check if the response has an error field
//             if (data.error) {
//                 alert(`Error: ${data.error}`);
//             } else {
//                 alert('You are registered successfully. Welcome to EliteDrains');
//                 resetFormFields();
//                 console.log(data);
//                 window.location.href = '../index.html';
//             }
//         })
//         .catch(error => {
//             alert('Email already registered Try With new Email!!!');
//             resetFormFields();
//             console.error('Error:', error);
//         });
// }

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var age = document.getElementById('age').value;
    var rate = document.getElementById('rate').value;
    var password = document.getElementById('password').value;
    var city = document.getElementById('city').value; // Added line for city

    // Create an object with the form data
    var formData = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        rate: rate,
        password: password,
        city: city // Added city field
    };

    // Send a POST request to the backend
    fetch('http://localhost:3000/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Check if the response has an error field
            if (data.error) {
                alert(`Error: ${data.error}`);
            } else {
                alert('You are registered successfully. Welcome to EliteDrains');
                resetFormFields();
                console.log(data);
                window.location.href = '../index.html';
            }
        })
        .catch(error => {
            alert('Email already registered. Try with a new Email!!!');
            resetFormFields();
            console.error('Error:', error);
        });
}

