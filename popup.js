

let dataObj = {};

const clipboard = []
const clipboardArea = document.querySelector('#theClipboard')
let clipboardIncrementer = 0
const mainBody = document.querySelector('#mainContent')
document.body.appendChild(mainBody)
// ------------------------------------------------------------------------------------

const jokeContainer = document.createElement('div');
jokeContainer.classList.add('joke-container')
mainBody.appendChild(jokeContainer)
const norrisPic = document.querySelector('.norrislogo')

const jokeButton = document.querySelector('#jokeButton');
norrisPic.addEventListener('click', getJoke );
// ------------------------------------------------------------------------------------


let url = 'https://api.chucknorris.io/jokes/random?category=dev'

function getJoke(){

  fetch(url) 
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const newJoke = document.createElement('h3')
    newJoke.classList.add('joke')
    newJoke.innerText = JSON.stringify(myJson.value)
    jokeContainer.appendChild(newJoke)
    console.log(JSON.stringify(myJson.value));
    responsiveVoice.speak(JSON.stringify(myJson.value))
  });

}
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// setInterval(getContent,1000 )

// function getContent(){
//     chrome.storage.local.get(['content'], function(result) {
//     if(result.content !== undefined){
//       console.log('Value currently is ' + result.content)
//       //  newClipboardEntry.innerText = result.content
//     // clipboard.push(result.content)
//       console.log(clipboard)
//   // clipboardArea.appendChild(newClipboardEntry)

//     }
   
//   });
// }

function copyText(){
  let copiedText = document.getElementById("txt_copy")
  copiedText.select()
  document.execCommand('copy');

  // if(clipboard.length !== 0){
      // for(let i = clipboardIncrementer; i < clipboard.length; i++){
        let newClipboardEntry = document.createElement('h3')
        newClipboardEntry.classList.add('clipitem')
        let content = copiedText.value
        // ------------------------
        dataObj[content] = content;

        chrome.storage.local.set(dataObj, function() {          
          //  alert('Settings saved');
           console.log(dataObj)

        });
        // chrome.storage.local.set({[content]: copiedText.value}, function() {
        //   // Notify that we saved.
        //   alert('Settings saved');
        // });

        chrome.storage.sync.get(['content'], function(result) {
            console.log('Value currently is ' + result.content)
            newClipboardEntry.innerText = content
            // clipboard.push(result.content)

        clipboardArea.appendChild(newClipboardEntry)

          });
      //   chrome.storage.local.get(['key'], function(result) {
      //   console.log('Value currently is ' + result.key);
      // });
       


        // clipboardIncrementer++ 
      // }
  // }
  // alert("Copied the text: " + copiedText.value);

 }
// ------------------------------------------------------------------------------------
 const copyButton = document.querySelector('#copy')
 copyButton.addEventListener('click', copyText)



