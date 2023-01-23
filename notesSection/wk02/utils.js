var box = document.getElementById('box');

// export function changeColor()
  export function changeColor(){
  if (box.style.backgroundColor == 'pink') {
    box.style.backgroundColor = 'turquoise';
    box.style.border = '2px Solid teal';
  } else {
    box.style.backgroundColor = 'pink';
    box.style.border = '2px Solid palevioletred';
  }
  }

  export function double (n){
    return n * 2;
  }

  