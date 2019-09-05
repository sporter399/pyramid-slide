const brickChar = document.getElementById("brick-char");
const rangeElem = document.getElementById("range");
const scrollValue = document.getElementById("scroll-value");


scrollValue.innerHTML = rangeElem.value;


brickChar.onchange = function(event) {
    let height = rangeElem.value;
    drawPyramid(height);
}

rangeElem.oninput = function(event) {
    let height = rangeElem.value;
    drawPyramid(height);
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    scrollValue.innerHTML = rangeElem.value;

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickChar.value;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
