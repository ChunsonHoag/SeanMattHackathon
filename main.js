let selectorButton = document.createElement('a');
selectorButton.innerText= 'A E S T H E T I C';
selectorButton.setAttribute('class', 'vaporwaveBtn');
document.querySelector('body').appendChild(selectorButton);
// let hereComeDatBoi = document.createElement('audio')
// hereComeDatBoi.setAttribute('src', './assets/HereComeDatBoi.mp3');
// hereComeDatBoi.setAttribute('type', 'audio/mpeg');
// document.querySelector('body').appendChild(hereComeDatBoi);
// let myAudio = new Audio(chrome.runtime.getURL('./assets/HereComeDatBoi.mp3'));

// const changeBackground = () => {
//     let marbleGif = document.createElement('img');
//     marbleGif.setAttribute('class', 'backgroundImage');
//     marbleGif.setAttribute('src', 'backgroundImage');
//     document.querySelector('body').appendChild(marbleGif);
// }

const changeColors = () => {
    let pastels = ['#FF71CE', '#B967FF', '#01CDFE', '#05FFA1', '#F8EDA0', '#6cfec4'];
    const element = document.querySelector('body');
    element.style.backgroundColor = '#ff88a6';
    // element.style.backgroundColor = 'linear-gradient(90deg, rgba(242,99,111,1) 0%, rgba(23,166,140,1) 54%, rgba(242,203,5,1) 100%)';
    element.style.backgroundImage = "url('https://i.gifer.com/YpNY.gif')";
    let allDivs = document.querySelectorAll('div');
    for (let i = 0; i < allDivs.length; i++){
        let colorCounter = 0;
        allDivs[i].classList.add('fade-in-out');
        // allDivs[i].style.color = pastels[i % pastels.length];
        setInterval(function(){
            allDivs[i].style.color = pastels[(i+colorCounter) % pastels.length];
            // allDivs[i].classList.remove('fade-in-out');
            // allDivs[i].classList.add('fade-in-out');
            colorCounter++;
        }, 422)
    }

}


// const playSong = () => {
//     myAudio.play();
//     setTimeout(changeColors, 14000);
// }

selectorButton.addEventListener('click', changeColors);


// el.classList.add('hide');
// el.classList.remove('show');

// .show {
//     opacity: 1;
//   }
//   .hide {
//     opacity: 0;
//     transition: opacity 400ms;
//   }

// event listener for spacebar
// conditional check of element where mouse is
// if element is image, replace it


//boolean flag of mouse over an image
// each time mouse is over img, set flag true
// when mouse leaves img, set flag false
//event listener for when spacebar is hit
    // if boolean flag true
    // replace image

// document.addEventListener("keydown", function(e){
//     if (e.keyCode === 88){
//         console.log('did we press X')
//         let allImgs = document.querySelectorAll('img');
//         for (let i = 0; i < allImgs.length; i++){
//             console.log('mouse over an image')
//             allImgs[i].addEventListener("mouseover", function(event){
//                 let parent = allImgs[i].parentNode;
//                 parent.remove(allImgs[i])
//             })
//         }
//     }
// })