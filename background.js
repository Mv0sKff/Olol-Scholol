chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
    if (message.msg === "image") {
        console.log("message", message)
        console.log("sender", sender)
        console.log("senderResponse", senderResponse)

        console.log("message", message)

        return true;  // Will respond asynchronously.
    }
});

let checkbox = document.getElementById('olol-me').querySelector('input[type="checkbox"]')

chrome.storage.sync.get(['active'], function (data) {
    if (data.active === undefined) {
        chrome.storage.sync.set({active: false})
    }
    checkbox.checked = data.active
})

checkbox.addEventListener('change', function () {
    console.log(checkbox.checked)
    chrome.storage.sync.set({active: checkbox.checked})
})