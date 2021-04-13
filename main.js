//================
//news app
//================

// one function to store everything
function reportData() {
    //get the initial api pull
    function initialPull() {
        // create url variable for 1st api
        const topStoriesAPI = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        //fetch first api
        fetch(topStoriesAPI)
        //first then statement grabs json info from api
            .then(response => response.json())
            // second then statement grabs json info and makes an arr from 0-99
            .then(function (arr) {
                arr = arr.slice(0, 99);
                // loop through arr to find the number from the json info above and insert it into the story api below.
                arr.forEach(function (num) {
                    const storyAPI = `https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`
                    // call function thats below to get second api call
                    getStoryAPI(storyAPI)
                });
            })
    }
    // second api call
    function getStoryAPI(storyAPI) {
        //fetch second api that was made into a variable above.
        fetch(storyAPI)
        //first .then statement grabs storyAPI json.
            .then(response => response.json())
            // second then statement grabs storyAPI json info.
            .then(function (storyAPI) {
                // use created function below to make create html
                createHTML(storyAPI)
            })
    }


    // create html divs for dom use

    // query container to get container div 
    const container2 = document.querySelector('.container-2')
    // create function to allow me to call it above
    function createHTML(storyAPI) {
        //create variable for divs, use template string to request info for title, score, author, and comments
        let html = `
        <div class="container-3">
            <div class="articleBox">
                <div id="articleBoxTitle"><a class = "link" target = "_blank" href="${storyAPI.url}"> ${storyAPI.title}</a> </div>
                <br>
                <div class="MainSub">
                    <div id="articleBoxScore">Score: ${storyAPI.score}</div>
                    <div id="articleBoxAuthor">Author: ${storyAPI.by}</div>
                    <div id="articleBoxComments">Comments: ${storyAPI.kids.length}</div>
                </div>
            </div>
        </div>`
        // add our html div to the container (just like appending)
        container2.innerHTML += html;
    }
    // call the function again incase there is a number left in our arr
    initialPull()
    const button = document.querySelector("#button");
    const tick = new Audio('GotchaBitch!!!.mp3');

    button.addEventListener("click", function() {
    tick.play ();
    })
}

// call the function to make everything work
reportData()