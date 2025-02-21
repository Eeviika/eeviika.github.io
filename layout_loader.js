// Loads the main layout of the webpage from layout.html
// and inserts it into the body of the webpage.
// Also moves the current page's content into the main
// content div of the layout.
document.addEventListener("DOMContentLoaded", function() {
    fetch("layout.html")
    .then(response => response.text())
    .then(layoutHTML => {
        const parser = new DOMParser();
        const layoutDoc = parser.parseFromString(layoutHTML, "text/html");

        var currentBody = document.body.innerHTML;
        document.body.innerHTML = layoutDoc.body.innerHTML;
        
        const mainDiv = document.getElementById("content");

        if (mainDiv && currentBody) {
            mainDiv.appendChild(parser.parseFromString(currentBody, "text/html").body);
        } else {
            console.error("Could not find main content div or current body content. Please check layout.html and the current page's content.");
        }

        console.log("Layout loaded successfully.");

    })
    .catch(error => {
        console.error("Error loading layout.html: " + error);
    });
})