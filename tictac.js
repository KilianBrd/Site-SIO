        var currentPlayer = "X";
        var gameOver = false;
        var cells = document.getElementsByClassName("cell");
        document.getElementById("restart").addEventListener("click", function() {
            restartGame();
        });

        function restartGame() {
            currentPlayer = "X";
            gameOver = false;
            for (var i = 0; i < cells.length; i++) {
                cells[i].textContent = "";
            }
            messageGagne = "";
            document.getElementById('messageGagne').innerHTML = messageGagne;

        }

        for (var i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", function(event) {
                if (!gameOver) {
                    if (event.target.textContent === "") {
                        event.target.textContent = currentPlayer;
                        checkForWinner();
                        togglePlayer();
                    }
                }
            });
        }

        function togglePlayer() {
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
        function checkForWinner() {
            if (checkCells(1, 2, 3) || 
                checkCells(4, 5, 6) || 
                checkCells(7, 8, 9) || 
                checkCells(1, 4, 7) || 
                checkCells(2, 5, 8) || 
                checkCells(3, 6, 9) || 
                checkCells(1, 5, 9) || 
                checkCells(3, 5, 7)) {
                gameOver = true;
                var messageGagne = '<p id="messageGagne"> Le joueur ' + currentPlayer + ' a gagné</p>';
                document.getElementById('messageGagne').innerHTML = messageGagne;
            } 
        }
        function checkCells(a, b, c) {
            var cellA = document.getElementById("cell-" + a);
            var cellB = document.getElementById("cell-" + b);
            var cellC = document.getElementById("cell-" + c);
            return (cellA.textContent === currentPlayer &&
                    cellB.textContent === currentPlayer &&
                    cellC.textContent === currentPlayer);
        }