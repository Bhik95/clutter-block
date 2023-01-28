const antiRedditCss = "css/anti-reddit.css";

// Redirect if outside Eurovision Subreddit
if (!window.location.href.includes("/r/eurovision")) {
    // Redirect the user to the Eurovision Subreddit
    window.location.href = "https://www.reddit.com/r/eurovision/";
}