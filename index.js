let onlyCol1 =  document.querySelector('.col1')
let col1 = document.querySelector('.col1').innerHTML;
console.log(col1)
let onlyCol2 = document.querySelector('.col2');
let col2 = document.querySelector('.col2').innerHTML;
console.log(onlyCol2)
var w = window.innerWidth;


if(w < 380){
    onlyCol2.innerHTML = col1;
    onlyCol1.innerHTML = col2;
}else if(w>380){
    onlyCol2.innerHTML = col2;
    onlyCol1.innerHTML = col1;
}
// switch (w) {
//     case 500:
//         onlyCol2.innerHTML = col1;
//         onlyCol1.innerHTML = col2
//         break;

//     default:
//         break;
// }