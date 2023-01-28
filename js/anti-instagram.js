const antiInstagramCss = "css/anti-instagram.css";

const redirects = [
    {
        "description": "Instagram: Redirect from Reels",
        "urlPattern": "https://www.instagram.com/reels/videos",
        "destinationUrl": "https://www.instagram.com/"
    },
    {
        "description": "Instagram: Redirect from Explore",
        "urlPattern": "https://www.instagram.com/explore",
        "destinationUrl": "https://www.instagram.com/"
    }
]

redirects.forEach(el => {
    if (window.location.href.startsWith(el.urlPattern)) {
        // Redirect the user to a new URL
        window.location.href = el.destinationUrl;
    }
});


// Inject the CSS to hide the Reel and Explore Buttons
var link = document.createElement("link");
link.href = chrome.runtime.getURL(antiInstagramCss);
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);