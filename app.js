// const gameBoard = (() => {
//     const container = document.querySelector(".container");
    
//     const generateGrid = size => {
//         container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//         for(let i = 0; i < size; i++) {
//             for(let j = 0; j < size; j++) {
//             let square = document.createElement("div");
//             square.setAttribute("class", "square");
//             container.appendChild(square);
//             }   
//         }
//     }

//     const addListeners = () => {
//         const squares = document.querySelectorAll(".square");
//         squares.forEach(square => {
//             square.addEventListener("click", console.log(square))
//         })
//     }

//     const render = (size) => {
//         generateGrid(size);
//         addListeners();
//     }

//     return {
//         render: render
//     }
// })();

const gameBoard = (() => {
    const container = document.querySelector(".container");
    const squares = document.querySelectorAll(".square");

    const addListeners = () => {
        squares.forEach(square => {
            square.addEventListener("click", console.log(square))
        });
    }

    

    const render = () => {
        addListeners();
    }

    return {
        render: render
    }
})();

gameBoard.render()
