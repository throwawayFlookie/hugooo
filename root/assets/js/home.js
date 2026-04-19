// title
const titles = [
    "Hallooo!",
    "Hi",
    "😺",

]

document.getElementById("hello").textContent =
    titles[Math.floor(Math.random() * titles.length)];

// splash
const splashes = [
    "made just for you",
    "Trink genug Wasser! :o",
    "come on, do something...",
    "Es gibt auch die legacy Version von der Homepage :D",
    "Hank is always watching!",
    "[Hier splash Text einfügen]",
    "sweet potato"
];

document.getElementById("splash").textContent =
  splashes[Math.floor(Math.random() * splashes.length)];


// featured
const featuredList = [
    { text: "this one is kinda cool", link: "games.html" },
    { text: "i like this one a lot", link: "messages.html" }
];

const featured = featuredList[Math.floor(Math.random() * featuredList.length)];

document.getElementById("featured-text").textContent = featured.text;

function goToFeatured() {
    window.location.href = featured.link;
}


// message
const messages = [
    "hi :)",
    "drink water pls",
    "i hope you're okay",
    "i made this because I like you"
];

document.getElementById("message-text").textContent =
  messages[Math.floor(Math.random() * messages.length)];


// navigation
function goTo(page) {
    window.location.href = page;
}

function randomProject() {
    const pages = ["bellaAndCoco.html", "historyOfHank.html", "infoDump.html", "todo.html", "wordWeek.html"];
    goTo(pages[Math.floor(Math.random() * pages.length)]);
}