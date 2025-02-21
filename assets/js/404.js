const messages = [
    `Sorry, but whatever you're looking for isn't here.`,
    `Insert error message here.`,
    `The page you are looking for is not available.`,
    `"But you're not supposed to be here, Mr. Freeman..."`,
    `"I'm sorry, Dave. I'm afraid I can't do that."`,
    `"Thank you, Mario! But our page is in another castle!"`,
    `"All your base are belong to us."`,
    `"Snake? Snake?! SNAAAAKE!"`,
    `"Cortana? I think we're lost."`,
    `"The cake is a lie."`,
    `"It's dangerous to go alone! Take this 404 error!"`,
    `"The site you are trying to reach is no longer in service."`,
]

const message = messages[Math.floor(Math.random() * messages.length)];

document.getElementById("errorMessage").textContent = message;
document.getElementById("errorDetails").textContent = `You attempted to access ${window.location.href} at ${new Date().toLocaleString()}.`;