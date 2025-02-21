// Loads the main layout of the webpage from layout.html
// and inserts it into the body of the webpage.
// Also moves the current page's content into the main
// content div of the layout.
fetch("layout.html")
	.then((response) => response.text())
	.then((layoutHTML) => {
		const parser = new DOMParser();
		const layoutDoc = parser.parseFromString(layoutHTML, "text/html");

		// Store current body content
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = document.body.innerHTML;

		// Replace body with layout's body content
		document.body.innerHTML = layoutDoc.body.innerHTML;

		// Find the #content div in the new layout
		const mainDiv = document.getElementById("content");

		if (mainDiv) {
			// Move existing content into #content
			while (tempDiv.firstChild) {
				mainDiv.appendChild(tempDiv.firstChild);
			}
		}

		// Check for script tags in "content" div and move them back to the body
		const scripts = mainDiv.querySelectorAll("script");
		scripts.forEach((script) => {
			document.body.appendChild(script);
		});

		// Get the title of the page and replace the h1 element in the banner
		const title = document.title;
		const banner = document.getElementById("banner");
		if (banner) {
			banner.querySelector("h1").textContent = title;
		}
	})
	.catch((error) => {
		console.error("Error loading layout.html: " + error);
	});
