const url = 'https://jsonplaceholder.typicode.com/posts';

const respuesta=document.querySelector("#respuesta")
const respuesta2=document.querySelector("#respuesta2")

document.addEventListener("DOMContentLoaded", llamarApi)

function llamarApi(){
  fetch(url)
    .then(response => response.json())
    .then((datos) => mostrarHTML(datos))
         
}

function mostrarHTML(data){
  let top =5;
  let table;
  if (data.lengt < top) {
    top = data.lengt
  } 
  for (let i = 0; i < top; i++) {
    let cliente = `<td>${data[i].title}</td>`;
    let comentario = `<td>${data[i].body}</td>`;
    respuesta.innerHTML += `<tr>${cliente + comentario}</tr>`;
  };
  // data.forEach(item => {
  //   const row = document.createElement('tr');
  //   row.innerHTML = `
  //     <td>${item.title}</td>
  //     <td>${item.body}</td>
  // `
  // respuesta.appendChild(row)
  // });
  
  mostrarHTML2(data,top)
   
}

function mostrarHTML2(data,n){
  let top =11;
  let table;
  if (n === 5 && data.lengt < top) {
    top = data.lengt
  } 
  for (let i = 5; i < top; i++) {
    let cliente = `<td>${data[i].title}</td>`;
    let comentario = `<td>${data[i].body}</td>`;
    respuesta2.innerHTML += `<tr>${cliente + comentario}</tr>`;
  };  
}





   

