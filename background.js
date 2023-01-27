chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    if(message.msg === "image"){
        console.log("message", message)
        console.log("sender", sender)
        console.log("senderResponse", senderResponse)

        console.log("message", message)

        return true;  // Will respond asynchronously.
    }
  });