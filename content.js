//document.body.style.border = "5px solid red";
run()
chrome.storage.onChanged.addListener(run)

const observer = new MutationObserver(run)

function run() {
    chrome.storage.sync.get(['active'], function (data) {
        if (!data.active) {
            observer.disconnect()
            return
        }

        let images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].src = "https://i.imgur.com/vq9cIK9.jpg";
            images[i].srcset = "";
        }
        observer.observe(document.body, {attributes: true, childList: true, subtree: true})
    })
}