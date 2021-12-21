const gameBoard = (() => {
  let board = new Array(9);

  const getBoard = () => {
    const currentBoard = document.querySelectorAll("div.square");
    currentBoard.forEach((square, index) => {
        board[index] = square.innerHTML;
    })
  };

  const displayBoard = () => {
    const divs = document.querySelectorAll("div.square")
    board.forEach((row) => {
        
    })

  }

  const getSquare = index => board[index]

  const updateSquare = (index, value) => {
    board[index] = value;
  };

  return {
    getBoard,
    updateSquare,
    displayBoard
  };

})();

const game = (() => {})();

const player = (letter) => {
    const _letter = letter;

    const getLetter = () => _letter;

    const makeMove = (row, col) => {
        gameBoard.updateSquare(row, col, getLetter())
        gameBoard.displayBoard();
    }

    return {getLetter, makeMove }
};

const ryan = player("X")
const cpu = player("O")