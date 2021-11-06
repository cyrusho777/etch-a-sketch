let boolColor = 0;

const container = document.querySelector('#container');

function createGrid(size = 32) {
    for (let i = 0; i < size; i++)
    {
        let row = document.createElement('div');
        container.append(row);
        
        for (let j = 0; j < size; j++)
        {
            const square = document.createElement('div');
            square.setAttribute('id','innerSquare');
            square.classList.add('square');
            square.style.width = (`${500/(size+1)}px`);
            square.style.height = (`${500/(size+1)}px`);
            row.append(square);
        }
    }
    hover();
    toggleColor();
}

function hover(){
    const squareGrid = document.querySelectorAll('#innerSquare');
    squareGrid.forEach(
        (sq) => { sq.addEventListener("mouseover", () => {
            if(sq.style.backgroundColor == '')
            {    
                changeColor(sq);
            };
        });

        });
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => 
{
    resetGrid = document.querySelectorAll('#innerSquare');
    resetGrid.forEach((square) => {
        square.style.backgroundColor = '' });
});


function toggleColor(){
    const colorButton = document.querySelector('#bcolor');
    colorButton.addEventListener('click',() => 
    {
        console.log(colorButton)
        if (boolColor == 1)
        {
            boolColor = 0;
        }
        else (boolColor = 1);

        console.log(boolColor);
    })

}

function changeColor(sq) {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const colorCode = "#" + randomColor;
    if (boolColor == 1)
    {
        sq.style.backgroundColor = colorCode;
    }
    else (sq.style.backgroundColor = 'black');
}

createGrid();