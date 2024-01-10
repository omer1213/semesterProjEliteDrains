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


async function searchPlumbers() {

    var city = document.getElementById('cityInput').value;
    var resultsDiv = document.getElementById('results');

    const response = await axios.get("http://localhost:3000/api/plumbers")
    // console.log(response.data)

    // Dummy data (you would replace this with actual data from your database)
    var dummyData = response.data;
    console.log(dummyData);

    var filteredData = dummyData.filter(plumber => plumber.city === city);

    // Clear previous results
    resultsDiv.innerHTML = '';
    if (filteredData == "") {
        alert("Not Found")
    }
    else {
        // Display new results
        filteredData.forEach(plumber => {
            var plumberDiv = document.createElement('div');
            plumberDiv.className = 'p-4 border border-gray-300 rounded mb-2 bg-white';
            plumberDiv.innerHTML = `<p><strong>Name:</strong> ${plumber.name}</p>
                                <p><strong>Email:</strong> ${plumber.email}</p>
                                <p><strong>Phone:</strong> ${plumber.phone}</p>
                                <p><strong>Age:</strong> ${plumber.age}</p>
                                <p><strong>Rate:</strong> ${plumber.rate}</p>`;
            resultsDiv.appendChild(plumberDiv);
        });
    }


}