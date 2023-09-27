let doc = document;
let body = doc.body;

let h1 = doc.createElement("h1");
h1.innerHTML = "Todo List";
body.append(h1);

let fill_box = doc.createElement("div");
fill_box.classList.add("fill_box");
body.append(fill_box);

let inp = doc.createElement("input");
inp.type = "text";
fill_box.append(inp);

let btn = doc.createElement("button");
btn.innerHTML = "Add";
fill_box.append(btn);

let line = doc.createElement("div");
line.classList.add("line");
body.append(line);

let result = doc.createElement("div");
result.classList.add("result");
body.append(result);

//////////
let inpt = doc.querySelector("input");
let button = doc.querySelector("button");

// add event
let obj = {
    id: "",
    title: "",
    isdone: "" ,
    time: ""
};
let p = doc.createElement("p");


button.addEventListener("click", (e) => {
//   console.log(title + inpt.value);

  // result.innerHTML += `<li>${inpt.value}</li>`
  if (inpt.value === "") return;
  createDeleteElements(inpt.value);
  inpt.value = "";

  // createDeleteElements()
});
// create and delete toDo
function createDeleteElements(value) {
//   console.log(title + value);

  const list_box = doc.createElement("div");
  list_box.append("p");
  list_box.append("cross");
  let p = doc.createElement("p");
  const cross = doc.createElement("img");
  cross.src = "img/cross.svg";
  p.className = "p";
  p.textContent = value;

//   cross.className = "btn";
//   cross.textContent = "add";
  p.appendChild(cross);
   

  //remove toDo
  cross.addEventListener("click", (e) => {
    console.log(p); // в консоли покажет элемент который был удален
    result.removeChild(p);
  });

  p.addEventListener("click", (e) => {
    // console.log(li); // в консоли покажет элемент который был удален
    p.toggle("li-active");
});

// console.log(obj.title);
obj.id = Math.random()
obj.title = p.innerText
console.log(obj);

  result.appendChild(p);
}
//////////////////////////deleting, true||false
// p.setAttribute('ondblclick', 'colorDiv()' )

// let color = 0;

// function colorDiv() {
//     if (color) {
//         document.getElementsByClassName("P").style.backgroundColor = "red";
//         color = 0;
//     } else {
//         document.getElementsByClassName("P").style.backgroundColor = "blue";
//         color = 1; 
//     } 
// }
//////////////////////////time
// let DateHistory = doc.createElement('h5')
// DateHistory.classList.add('DateHistory')
// result.append(DateHistory)
// console.log(DateHistory);

// let DateHistory2 = doc.createElement('h6')
// DateHistory2.classList.add('DateHistory2')
// result.append(DateHistory2)


// var today = ""; //переменная текущей даты
// window.onload = init; //после загрузки страницы

// function init() {
//   button; //доступ к кнопке
//   button.onclick = handleButtonClick; //подключение созданной функции к переменной
// }
// function handleButtonClick() {
//   //при клике на кнопку
//   doc.getElementsByClassName("DateHistory").innerText = today;
//   doc.getElementsByClassName("DateHistory2").innerHTML = today; //вывод текущей даты
//   today = new Date();
//   console.log(today);
// }
// 

