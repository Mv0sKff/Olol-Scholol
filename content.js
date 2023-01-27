//document.body.style.border = "5px solid red";

let images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].src = "https://i.imgur.com/vq9cIK9.jpg";
    images[i].srcset = "";
}