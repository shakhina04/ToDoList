let doc = document;
let body = doc.body;

let h1 = doc.createElement("h1");
let fill_box = doc.createElement("div");
let inp = doc.createElement("input");
let btn = doc.createElement("button");
let line = doc.createElement("div");
let result = doc.createElement("div");
let p = doc.createElement("p");



h1.innerHTML = "Todo List";
body.append(h1);

fill_box.classList.add("fill_box");
body.append(fill_box);

inp.type = "text";
fill_box.append(inp);

btn.innerHTML = "Add";
fill_box.append(btn);

line.classList.add("line");
body.append(line);

result.classList.add("result");
body.append(result);


let objs = []


// add event
let inpt = doc.querySelector("input");
let button = doc.querySelector("button");

button.addEventListener("click", (e) => {
  if (inpt.value === "") return;
  createDeleteElements(inpt.value);
  inpt.value = "";
});
// create and delete toDo
function createDeleteElements(value) {

  const list_box = doc.createElement("div");
  let p = doc.createElement("h6");
  const cross = doc.createElement("img");
  list_box.append("p");
  list_box.append("cross");
  cross.src = "img/cross.svg";
  p.className = "p";
  p.textContent = value;



  // time_p = obj.time
  // console.log(time_p);
  p.appendChild(cross);

  //remove toDo
  cross.addEventListener("click", (e) => {
    console.log(p); // в консоли покажет элемент который был удален
    result.removeChild(p); 
  });

  p.addEventListener("click", (e) => {
     // в консоли покажет элемент который был удален
  });
  
  result.appendChild(p);

  let obj = {
    id: Math.random(),
    title: p.innerText,
    isDone: false,
    time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
  };
  objs.push(obj)
  
  // reload(objs)
  console.log(obj); 


  

  p.setAttribute('id', 'myBtn')




  // Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
 p = document.getElementById("myBtn");
//  console.log(p);

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
p.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
    // let change_p = p.innerText
    // p.ondblclick = () => {
    //   // let prmt = prompt('Внести изменения:')
    //   // console.log(prmt);
    //   // change_p = p.innerText
    // }


  ////time
  // let time_p = doc.createElement("p")
  // time_p.classList.add("time_p")
  // p.append('time_p')
  // console.log(time_p);

  // let t = obj.time
  // time_p.innerText = t
  // console.log(obj.time); 
}
// reload(objs)





















