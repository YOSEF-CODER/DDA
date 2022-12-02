const x1 = document.getElementById('x1');
const y1 = document.getElementById('y1');
const x2 = document.getElementById('x2');
const y2 = document.getElementById('y2');
const button = document.querySelector('button');

const container = document.querySelector('.container');
const row = document.querySelector('.row');
const pixel = document.querySelector('.pixel');

button.addEventListener('click', (e) => {
    let rows = [];
    let row = [];
    e.preventDefault();

    let dx = +x2.value - +x1.value;
    let dy = +y2.value - +y1.value;
    let steps = Math.max(Math.abs(dx), Math.abs(dy));
    var xinc = dx / steps;
    var yinc = dy / steps;


    let n = +y2.value + (+y1.value);
    let m = +x2.value + (+x1.value);



    for (let k = 0; k < n; k++) {

        // Printing all elements of ith row
        for (let j = 0; j < m; j++) {

            row.push(0);

        }
        rows.push(row);
        row = [];
    }


    var x = +x1.value;
    var y = +y1.value;
    for (let i = 0; i <= steps; i++) {
        let xRounded = Math.round(y);
        let yRounded = Math.round(x);


        // console.log(rows[xRounded][yRounded]);
        rows[xRounded][yRounded] = 1;
        x = x + xinc;
        y = y + yinc;
        // console.log(typeof xinc, typeof yinc);

    }

    console.log(rows);
    container.innerHTML = '';

    for (let k = 0; k <= n; k++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        // Printing all elements of ith row

        for (let j = 0; j < m; j++) {
            let pixelDiv = document.createElement('div');

            pixelDiv.textContent = rows[k][j];
            if (rows[k][j] == 1) {
                pixelDiv.classList.add('pixel');
                pixelDiv.classList.add('color');
            } else {
                pixelDiv.classList.add('pixel');
            }
            rowDiv.append(pixelDiv);

        }

        container.append(rowDiv);

    }

})