const canvas = document.querySelector('#canvas');

for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    canvas.append(cell);
}

