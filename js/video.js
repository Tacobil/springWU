/* Hard coded video data */
const videos = [
    {
        id: "EsWesK8GJIg",
        title: "I accidentally bought a sex toy for my employees",
        publisher: "DougDoug Clips",
        description: "I'm getting my gump in a week I CAN'T WAIT I'M SO EXCITED. GUMP GUMP GUMP GUMP!!!!!",
        views: 393577,
        date: "6 Oct 2025",
    },
    {
        id: "mos_0KQswGc",
        title: "Fatty dragon has a pat",
        publisher: "John P",
        description: "I was too laxy to add a desciption",
        views: 83370,
        date: "15 Apr 2026",
    },
    {
        id: "hSZg06T47o8",
        title: "Avicii - Island ft. The High",
        publisher: "Avicii Unreleased",
        description: "Avicii - Island ft. The High is Avicii's unreleased version of a song written by The High (Jonas Wallin), and Laura Welsh.",
        views: 297692,
        date: "20 Nov 2022",
    },
    {
        id: "iz4HtoRR5dY",
        title: "When the Wildlife Department killed my Pet.",
        publisher: "Exotics Lair",
        description: "I was too laxy to add a desciption",
        views: 83370,
        date: "15 Apr 2026",
    }
]


/*  */
const params = new URLSearchParams(window.location.search);
const videoId = params.get("v");

const titleElement = document.querySelector("#video-title")
const publisherElement = document.querySelector("#video-publisher")
const descriptionElement = document.querySelector("#video-description")
const viewsElement = document.querySelector("#video-views")
const dateElement = document.querySelector("#video-date")
const videoFrame = document.querySelector(".video-template")

/* Load specific video data */
const videoData = videos.find(v => v.id === videoId); /* Get video data from the videoId */

titleElement.textContent = videoData.title
publisherElement.textContent = videoData.publisher
descriptionElement.textContent = videoData.description
viewsElement.textContent = videoData.views + " views"
dateElement.textContent = "Published " + videoData.date
videoFrame.src = "https://www.youtube.com/embed/" + videoData.id

const documentTitle = document.querySelector("title")
documentTitle.textContent = "MyTube | " + videoData.title
