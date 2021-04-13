// query for container two
const containerTwo = document.querySelector('.container-2');

//right side of middle container
const container3 = document.createElement('div');
container3.className = 'container-3';

//the div containing the articles
const articleBox = document.createElement('div');
articleBox.className = "articleBox"

//title of the article box
const articleBoxTitle = document.createElement('div')

articleBoxTitle.className = "articleBoxTitle";

// main sub components div
const mainSub = document.createElement("div");
mainSub.className = "MainSub"

// score
const score = document.createElement("div");
score.className="articleBoxScore";

// author
const author = document.createElement('div');
author.className = "articleBoxAuthor";

//comments
const comments = document.createElement('div');
comments.className = "articleBoxComments"




containerTwo.appendChild(container3);
container3.appendChild(articleBox);
articleBox.appendChild(articleBoxTitle)
articleBox.appendChild(mainSub)
mainSub.appendChild(score)
mainSub.appendChild(author)
mainSub.appendChild(comments)

articleBoxTitle.innerHTML="title"
score.innerHTML="score";
author.innerHTML="author";
comments.innerHTML="comments";


// const container3 = `<div class="container-3">
//                         <div class="articleBox">
//                             <div id="articleBoxTitle">title</div>
//                             <div class="MainSub">
//                                 <div id="articleBoxScore">score</div>
//                                 <div id="articleBoxAuthor">author</div>
//                                 <div id="articleBoxComments">comments</div>
//                             </div>
//                         </div>
//                     </div>`