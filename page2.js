
function checkLocation() {

    const userLocation = prompt("Please enter your location (e.g., Punjab, Haryana, Chandigarh):");

    const normalizedLocation = userLocation.toLowerCase();

    if (normalizedLocation === "punjab" || normalizedLocation === "haryana" || normalizedLocation === "chandigarh") {
       
        const username = prompt("Enter your username:");
        const password = prompt("Enter your password:");

        if (username === "aditi" && password === "saini") {
   
            window.location.href = "https://www.google.com/maps/@30.7144277,76.837499,14z?entry=ttu";
        } else {
            alert("Wrong credentials. Access denied.");
        }
    } else {
        alert("Access denied. You are not in Punjab, Haryana, or Chandigarh.");
    }
}
