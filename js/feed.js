
const users = {
  christianBuehner: {
    name: "Christian Buehner",
    source: "img/users/christian-buehner.jpg",
    subscribers: 72425,
  },
  coolCat: {
    name: "Cool Cat",
    source: "img/users/cool-cat.jpg",
    subscribers: 500,
  },
  grandma: {
    name: "The Internet Grandma",
    source: "img/users/grandma.jpg",
    subscribers: 500,
  },
  ianDooley: {
    name: "Ian Dooley",
    source: "img/users/ian-dooley.jpg",
    subscribers: 500,
  },
  kellySikkema: {
    name: "Kelly Sikkema",
    source: "img/users/kelly-sikkema.jpg",
    subscribers: 500,
  },
  me: {
    name: "octotco",
    source: "img/users/octopus.jpg",
    subscribers: 5,
  },
}

const videos = [
  {
      title: "Okay, But How Were the Pyramids Actually Built?",
      publisher: users.christianBuehner,
      thumbnail: "img/thumbnails/pyramid.jpg",
      description: ". . .",
      views: "32 259",
      published: "2025-03-02",
  },
  {
      title: "Did We Really Land On the Moon?",
      publisher: users.me,
      thumbnail: "img/thumbnails/moon-landing.jpg",
      description: ". . .",
      views: "69 420",
      published: "2022-06-05",
  },
  {
      title: "This Cat Wont Stop Sleeping On My Front Porch",
      publisher: users.coolCat,
      thumbnail: "img/thumbnails/eepy-cat.jpg",
      description: ". . .",
      views: "743",
      published: "5 minutes ago",
  },
  {
      title: "This Is How You Become a Pro Web Designer",
      publisher: users.kellySikkema,
      thumbnail: "img/thumbnails/front-end.jpg",
      description: ". . .",
      views: "5.2 million",
      published: "2023-01-23",
  },
  {
    title: "You Will Never Eat Fast Food Again After Watching This Video",
    publisher: users.ianDooley,
    thumbnail: "img/thumbnails/fast-food.jpg",
    description: ". . .",
    views: "38 million",
    published: "2021-01-23",
  },
  {
    title: "Grandma's Homemade Cookies Recipe",
    publisher: users.grandma,
    thumbnail: "img/thumbnails/cookies.jpg",
    description: ". . .",
    views: "1 million",
    published: "2023-01-23",
  },
  {
    title: "Don't Believe The Earth Is Flat? Wrong.",
    publisher: users.ianDooley,
    thumbnail: "img/thumbnails/earth.jpg",
    description: ". . .",
    views: "69 420",
    published: "2022-06-05",
  },
  {
    title: "Watering Flowers In Full HD",
    publisher: users.grandma,
    thumbnail: "img/thumbnails/water-lily.jpg",
    description: ". . .",
    views: "1 337",
    published: "2015-08-30",
  },
]

const videoFeedContainer = document.querySelector(".video-feed-container")
const template = videoFeedContainer.firstElementChild


videos.forEach(addVideo);

function addVideo(data, index, array) {
  const clone = template.cloneNode(true)
  const thumbnail = clone.querySelector(".thumbnail")
  const userIcon = clone.querySelector(".user-icon")
  const title = clone.querySelector(".title")
  const subText = clone.querySelector(".subtext")

  thumbnail.src = data.thumbnail
  userIcon.src = data.publisher.source
  title.textContent = data.title
  subText.textContent = data.publisher.name + " - " + data.views + " views - uploaded " + data.published
    
  videoFeedContainer.appendChild(clone)
}

template.remove()


