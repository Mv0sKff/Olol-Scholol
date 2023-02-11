//document.body.style.border = "5px solid red";
run()
chrome.storage.onChanged.addListener(run)

const observer = new MutationObserver(run)

//"https://i.imgur.com/vq9cIK9.jpg"
var imageUrl = chrome.runtime.getURL('media/olol-scholol-poster.png')

function run() {
    chrome.storage.sync.get(['active'], function (data) {
        if (!data.active) {
            observer.disconnect()
            return
        }

        let images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].src = imageUrl;
            images[i].srcset = imageUrl;
        }

        let backgroundImages = document.querySelectorAll('[style*="background-image"]')
        for (let i = 0; i < backgroundImages.length; i++) {
            backgroundImages[i].style.backgroundImage = 'url("' + imageUrl + '")';
        }

        let svgs = document.getElementsByTagName('svg');
        for (let i = 0; i < svgs.length; i++) {
            //console.log("svg", i)
            const imgNew = document.createElement("img");
            imgNew.src = imageUrl;
            svgs[i].replaceWith(imgNew);
        }

        observer.observe(document.body, {attributes: true, childList: true, subtree: true})
    })
}
