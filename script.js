// let input = document.getElementById ( 'inputBox');
// let button = document.querySelectorAll('button');
// // // let clear = document.querySelectorAll(".clear");
// let equals = document.querySelectorAll(".equals-button");

// let string = "";
// let arr = Array.from(button)
// arr.forEach(button =>{
//      button.addEventListener( 'click', (e) =>{
//       if(e.target.innerHTML == '='){
//         string = eval( string);
//         input.value = string;
//       }
      
//     else{
//         string += e.target.innerHTML;
//         input.value = string;
//       }
     
//      }) 
// })

let displayed = document.getElementById('inputBox')

function display(num){
  if (displayed.value === "0" && num !== "." ) {
    displayed.value = num;
  } else {
       displayed.value += num;
  }
}

function Calculate() {
  try {
     displayed.value = eval(displayed.value);
  } catch (err) {
       alert("Invalid Expression");
  }
}






















