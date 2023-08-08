var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var src = document.getElementById("myimg"); // Get the parent container

document.getElementById('btn').addEventListener('click', function() {
    var guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    
    // Clear the existing images before appending a new one
    while (src.firstChild) {
        src.removeChild(src.firstChild);
    }

    if (guess === randomNumber) {
 
        document.getElementById('btn').disabled = true;
        var img = document.createElement("img");
        img.src = "Success.jpg";
        img.width = 400;
        img.height = 400;
        src.appendChild(img);
    } else if (guess < randomNumber) {
        var img2 = document.createElement("img");
        img2.src = "high.jpg";
        img2.width = 400;
        img2.height = 400;
        src.appendChild(img2);
    } else {
        var img1 = document.createElement("img");
        img1.src = "low.jpg";
        img1.width = 400;
        img1.height = 400;
        src.appendChild(img1);
    }
});