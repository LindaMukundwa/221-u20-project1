let portalButton = document.getElementById('portal_button');

portalButton.addEventListener('onclick', () => {
  goToLocation('https://my.marist.edu')
})

portalButton.onclick = () => {
    window.location.href="https://marist.edu"
}

function feedItem(title, body, linkURL, imageURL) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkURL;
    this.imageURL = imageURL;
}

const currentStories = [];

var one = new feedItem();

one.title = 'Example';
one.body = 'This is an example to make sure that it works';
one.linkUrl = 'https://www.google.com';
one.imageURL = '/images/news_pic.jpg';

var two = new feedItem();

two.title = 'Example';
two.body = 'This is an example to make sure that it works';
two.linkUrl = 'https://www.google.com';
two.imageURL = '/images/news_pic.jpg';


console.log(one);
console.log(two);

// put instances into array 

for(let i = 0; i < 1; i++ ) {
    currentStories.push(one);
}

currentStories.push(two);

console.log('Array after: ', currentStories);

function displayItem(feedItem) {
    document.getElementById('NewsFeed').innerHTML += feedItem;
}

displayItem(one);

// show each item
document.onload = () => {

    let feed = document.getElementById('NewsFeed');

    for(let i = 0; i < currentStories.length(); i++) {
        feed.innerHTML += currentStories[i].title;
        feed.innerHTML += currentStories[i].body;
        feed.innerHTML += currentStories[i].linkURL;
        feed.innerHTML += '<img src=' + currentStories[i].imageURL + ' />';
        //displayItem();
    }
}

