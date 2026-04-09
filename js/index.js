const canvas = document.querySelector('#canvas');
const gridBtn = document.querySelector('#grid-size')

let gridSize = 16;

gridBtn.addEventListener('click', () => {
    do {
        gridSize = +prompt("Set a new grid dimension (integer must be 100 or less):", 0);
    } while (gridSize <= 0 || gridSize > 100 || isNaN(gridSize));
    
    canvas.innerHTML = '';
    setGrid();
})


function setGrid() {
    for (let i = 0; i < gridSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.style.width = `calc(100% / ${gridSize})`;
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => {
            let bgColor = cell.style.backgroundColor;
            if (bgColor === '') {
                cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1} ${Math.floor(Math.random() * 255) + 1} ${Math.floor(Math.random() * 255) + 1} / 0.1)`;
            } else if (bgColor !== '' && bgColor[3] === 'a') {
                let bgArr = bgColor.split(',');
                const opacity = bgArr[3] !== undefined ? parseFloat(bgArr[3]) : 1;
                if (opacity < 1) {
                    cell.style.backgroundColor = `${bgArr.slice(0, 3).join(',')}, ${Math.min(1, opacity + 0.1)})`;
                }
            }
        })

        canvas.append(cell);
    }
}

setGrid();