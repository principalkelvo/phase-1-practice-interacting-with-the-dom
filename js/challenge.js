//create dom challenge
let counter = document.getElementById("counter");

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("restart");
const like = document.getElementById("heart");
const likes = document.getElementsByClassName("likes");
const pause = document.getElementById("pause");
const buttons = document.querySelectorAll('button');
const commentList = document.getElementById("list");
const comment = document.getElementById("comment-input");
const submit = document.getElementById("submit");
let paused = false;

// counting();


//counting
setInterval(() => {
    if(!paused) {
        counter.innerHTML++
    }
}, 1000);

//toggle pause and resume
const togglePaused = () => {
    paused = !paused;
    if(paused){
        buttons.forEach(button => {
            button.disabled = true;
            pause.disabled=false;
        }
        );
        pause.innerHTML = "resume";
        console.log("paused");
    }
    else{
        //enanble all buttons
        buttons.forEach(button => {
            button.disabled = false;
        }
        );
        
        pause.innerHTML = "pause";
        console.log("unpaused");
    }
}

//reset counter
function resetCounter(){
    counter.innerHTML = 0;
}

//add event listener to reset
reset.addEventListener("click", resetCounter);

//minus counter
function minusCounter(){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

//add event listener to minus
minus.addEventListener("click", minusCounter);

//plus counter
function plusCounter(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

//add event listener to plus
plus.addEventListener("click", plusCounter);

//NOT WORKING CORRECTLY

//likes counter comment
let likeTimes = 0;
function likeCounter(){
   //create list of likes comment inside likes ul  
    likeTimes=+1;
    let list = document.createElement("li");
    list.innerHTML = counter.innerHTML +" has been liked"+ " " +likeTimes+  " " + "times";
    likes[0].appendChild(list);
    console.log(likeTimes);
   
}

//add event listener to like
like.addEventListener("click", likeCounter);


//add event listener to pause or resume
pause.addEventListener("click", togglePaused);

//submit comment
function submitComment(){
    event.preventDefault();
    let list = document.createElement("p");
    list.innerHTML = comment.value;
    commentList.appendChild(list);
    comment.value = "";
}

//add event listener to submit
submit.addEventListener("click", submitComment);


