function setupNavigation() {
    const navHome = document.getElementById('nav-Home');
    const navAboutus = document.getElementById('nav-Aboutus');
    const navProperties = document.getElementById('nav-Properties');
    const navServices = document.getElementById('nav-Services');
    const buttonContactUs = document.getElementById('button2');

    // Function to handle click on Home navigation
    navHome.addEventListener('click', function() {
        console.log("Home");
        // window.location.href = ''; // Navigate to Home URL
    });

    // Function to handle click on About us navigation
    navAboutus.addEventListener('click', function() {
        console.log("About us");
        // window.location.href = ''; // Navigate to About us URL
    });

    // Function to handle click on Properties navigation
    navProperties.addEventListener('click', function() {
        console.log("Properties");
        // window.location.href = ''; // Navigate to Properties URL
    });

    // Function to handle click on Services navigation
    navServices.addEventListener('click', function() {
        console.log("Services");
        // window.location.href = ''; // Navigate to Services URL
    });

    // Function to handle click on Contact Us button
    buttonContactUs.addEventListener('click', function() {
        console.log("Contact Us");
        // window.location.href = ''; // Navigate to Contact Us URL
    });
}

// Call the setupNavigation function when the document is loaded
document.addEventListener('DOMContentLoaded', setupNavigation);


function FirstBlog() {
    const LearnMore = document.getElementById('Learn-More');
    const BrowseProperties = document.getElementById('Browse');
    

    // Function to handle click on Home navigation
    LearnMore.addEventListener('click', function() {
        console.log("Learn-More");
        // window.location.href = ''; // Navigate to Home URL
    });

    BrowseProperties.addEventListener('click', function() {
        console.log("Browse");
        // window.location.href = ''; // Navigate to Home URL
    });

}
document.addEventListener('DOMContentLoaded', FirstBlog);