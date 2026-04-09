const canvas = document.querySelector('#canvas');

for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseenter', (e) => {
        let bgColor = cell.style.backgroundColor;
        if (bgColor === '') {
            cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1} ${Math.floor(Math.random() * 255) + 1} ${Math.floor(Math.random() * 255) + 1} / 0.1)`;
        } else if (bgColor !== '') {
            let bgArr = bgColor.split(',');
            const opacity = bgArr[3] !== undefined ? parseFloat(bgArr[3]) : 1;
            if (opacity < 1) {
                cell.style.backgroundColor = `${bgArr.slice(0, 3).join(',')}, ${Math.min(1, opacity + 0.1)})`;
            }
        }
    })

    canvas.append(cell);
}