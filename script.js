// Add event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get username and password from input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username == admin){
        
    }
    // Send a request to the server to authenticate the user (not shown here)
    // If authentication is successful, redirect to the dashboard
    // Otherwise, display an error message
    // Example:
    // authenticateUser(username, password)
    //   .then(() => {
    //     window.location.href = "dashboard.html";
    //   })
    //   .catch((error) => {
    //     alert("Authentication failed. Please try again.");
    //   });
});

