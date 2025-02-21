// Loads the main layout of the webpage from layout.html
// and inserts it into the body of the webpage.
// Also moves the current page's content into the main
// content div of the layout.
fetch("layout.html")
	.then((response) => response.text())
	.then((layoutHTML) => {
		const parser = new DOMParser();
		const layoutDoc = parser.parseFromString(layoutHTML, "text/html");

		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = document.body.innerHTML;

		document.body.innerHTML = layoutDoc.body.innerHTML;

		const mainDiv = document.getElementById("content");

		if (mainDiv) {
			while (tempDiv.firstChild) {
				mainDiv.appendChild(tempDiv.firstChild);
			}
		}

		const scripts = mainDiv.querySelectorAll("script");
		scripts.forEach((script) => {
			document.body.appendChild(script);
		});

		const title = document.title;
		const banner = document.getElementById("banner");
		if (banner) {
			banner.querySelector("h1").textContent = title;
		}
	})
	.catch((error) => {
		console.error("Error loading layout.html: " + error);
	});
