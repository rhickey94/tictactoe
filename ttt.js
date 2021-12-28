const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  // let board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];

  const makeMove = (index, value) => {
    if (board[index] === "") {
      board[index] = value;
    } else {
      console.log("Square is already taken!");
    }
  };

  const getSquare = index => {
    return board[index]
  }
  
  const getBoard = () => {
    return board;
  };

  const hasEmptySpaces = () => {
    let counter = 0;

    board.forEach((square) => {
      if (square.length > 0) {
        counter++;
      }
    });

    return counter < board.length;
  };

  const numOfEmptySpaces = () => {
    let counter = 0;

    board.forEach((square) => {
      if (square.length < 1) {
        counter++;
      }
    });

    return counter;
  }

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  }

  return {
    makeMove,
    getSquare,
    getBoard,
    hasEmptySpaces,
    numOfEmptySpaces,
    reset
  };
})();

const player = (letter) => {
  const _letter = letter;

  const getLetter = () => _letter;

  return { getLetter };
};

const gameController = (() => {
  const player1 = player("X")
  const player2 = player("O")

  const playRound = boardIndex => {
    gameBoard.makeMove(boardIndex, getCurrentPlayer())

    if (!gameBoard.hasEmptySpaces()) {
      console.log("game over")
    }

    return getCurrentPlayer();
  }

  const getCurrentPlayer = () => {
    return gameBoard.numOfEmptySpaces() % 2 === 0 ? player1.getLetter() : player2.getLetter()
  }

    return {
      playRound,
      getCurrentPlayer
    }
})();

const htmlController = (() => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square, index) => {
    square.addEventListener("click", (e) => {
      square.innerHTML = gameController.playRound(index)
      
    })
  })

})();