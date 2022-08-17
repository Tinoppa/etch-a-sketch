const container = document.getElementById('container');

function makeRows(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}


makeRows(16,16);

const divs = document.getElementsByClassName('grid-item');

for (const div of divs) {
    div.addEventListener('click', function onClick() {
      console.log('box clicked');
      divs.style.color ="red";
    });
  }

/*for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('mouseover', function () {
        div.style.backgroundColor = "red"
    });
    div[i].addEventListener('mouseleave', function () {
        div.style.backgroundColor = 'white';
    });
}*/