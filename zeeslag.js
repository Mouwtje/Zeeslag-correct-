
var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard");

for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

		square.id = 's' + j + i;

		
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;
		
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}

var hitCount = 0;

var gameBoard = [
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,1,0,0],
				[1,0,0,0,0,0,0,1,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,1,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,1,1,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,1,0,0,0,0,0,0]
				]

gameBoardContainer.addEventListener("click", fireTorpedo, false);

function fireTorpedo(e) {
	if (e.target !== e.currentTarget) {
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);

		if (gameBoard[row][col] == 0) {
			e.target.style.backgroundColor = '#000011';
			gameBoard[row][col] = 3;
			display.value ++;
			
		} else if (gameBoard[row][col] == 1) {
			e.target.style.backgroundColor = '#ff0000'
			gameBoard[row][col] = 2;
			hitCount++;
			display.value ++;
          }
			
			
			if (hitCount == 15) {
				alert("Iedereen is dood, ga jij het de families vertellen?");
			}
			
		} else if (gameBoard[row][col] > 1) {
			alert("Hier was je dus al geweest");
		}
    }
    e.stopPropagation();
}
