let vaporPics = ['https://image.freepik.com/free-vector/retro-futuristic-back-side-view-80s-supercar-trendy-synthwave-vaporwave-cyberpunk-sunset-background-back-80-s-concept_148087-103.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4uWF2-Lqpkb_NFr8AmLBZP_WUh5gqJHVTh98E1IlmGNrd6kPE&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSCYGc4UuDByevbVMvyweCSnaOI2hbV4uq0qP3MH6TTtCj0MyE&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaw2TGnQuxiYukx9Hpge_AKBHlFu737r0kjfKnWFwuAKDgwSid&usqp=CAU']
let cachedElements = new Set();

document.addEventListener('contextmenu', addToCache)
document.addEventListener('click', addToCache);

function addToCache(e) {
    if (e.srcElement.tagName === 'IMG') {
        cachedElements.add(e.srcElement);
    }
}

document.addEventListener('keypress', replacePictures);

function replacePictures(e) {
    if (e.keyCode === 120) {
        cachedElements.forEach(function (ele) {
            let parent = ele.parentNode;
            let imgToAdd = document.createElement('img');
            let stylesToAdd = window.getComputedStyle(ele);
            imgToAdd.style.height = `${stylesToAdd.getPropertyValue('height')}`;
            imgToAdd.style.width = `${stylesToAdd.getPropertyValue('width')}`;
            let randomI = Math.floor(Math.random() * vaporPics.length);
            console.log(randomI)
            imgToAdd.setAttribute('src', vaporPics[randomI])
            parent.replaceChild(imgToAdd, ele);
        })
        cachedElements.clear();
    }
}