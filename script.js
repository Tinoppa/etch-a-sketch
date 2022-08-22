const container = document.getElementById('container');
const btn = document.getElementById('set');
const resetBtn = document.getElementById('reset');
let userRows;
let userCols = userRows;
makeRows(16,16);

function init() {
    
window.location.reload();

}

resetBtn.addEventListener('click', function (){
    init();
})


function makeRows(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        
    }

   
}

btn.addEventListener('click', function(){
     userRows = parseInt(prompt('Set a number'));
     userCols = userRows;
    console.log(userCols);
    makeRows(userRows,userCols);
    if (userRows > 100) {
        init();
        alert("Way too much, try again");
    }
    
});


const divs = document.getElementsByClassName('grid-item');

for (const div of divs) {
    div.addEventListener('mouseover', function onHover() {
      this.style.backgroundColor = 'black';

        
    });
    
    
  }

