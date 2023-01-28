const antiInstagramCss = "css/anti-instagram.css";

// Redirect from Reels
if (window.location.href.startsWith("https://www.instagram.com/reels/videos")) {
    // Redirect the user to a new URL
    window.location.href = "https://www.instagram.com/";
}

// Redirect from Explore
if (window.location.href.startsWith("https://www.instagram.com/explore")) {
    // Redirect the user to a new URL
    window.location.href = "https://www.instagram.com/";
}

// Inject the CSS to hide the Reel and Explore Buttons
var link = document.createElement("link");
link.href = chrome.runtime.getURL(antiInstagramCss);
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);