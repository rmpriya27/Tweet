//select all the elements
let textElement=document.getElementById("tweetText");
let tweetList=document.getElementById("tweetList");
let tweetButton=document.getElementById("tweetButton");
let tweetCounter=document.getElementById("counter");
let noTweets=document.getElementById("tweetPara");
let MAX_LENGTH=80;

function onAddClick(){
   //create a new List element and append the input value
    let newTweetList=document.createElement("li");
    tweetList.appendChild(newTweetList);
    newTweetList.textContent=textElement.value;
    noTweets.classList.add("hidden");
    clearText(textElement);
    onInput();
}
//to clear the input text field after adding the tweet to the list
function clearText(elementHandle){
    elementHandle.value='';
}
//checks if the input text is between 0 to 80 characters
function onInput(){
    let tweetText=textElement.value;
    let tweetLength=tweetText.length;
    //console.log(tweetText);
    //console.log(MAX_LENGTH-tweetLength);
    tweetCounter.textContent=Math.max(MAX_LENGTH-tweetLength,0);
    if(tweetLength===0){
        tweetButton.setAttribute("disabled",true);
    }else if(tweetLength>MAX_LENGTH){
        tweetButton.setAttribute("disabled",true);
        tweetCounter.classList.add("error");
    }else{
        tweetButton.removeAttribute("disabled");
        tweetCounter.classList.remove("error");
    }
}
function onUpdateClick(listElement){
    let updateText=listElement.value;
    listElement.textContent="";
    let tmpInputElement=document.createElement("input");
    tmpInputElement.value=updateText;
}

//if Enter key is pressed, activates click event of button
function onInputKeyDown(event){
    if(event.key==="Enter"){
        tweetButton.click();
    }
}
tweetButton.addEventListener("click",onAddClick);
textElement.addEventListener("input",onInput);
textElement.addEventListener("keydown",onInputKeyDown);

onInput();