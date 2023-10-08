let res = fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=> data.json()).then((value)=>bar(value));

document.body.style = "margin : 0"
document.body.style = "Padding : 0"


let head = document.createElement("div")
head.innerHTML = "Users List"
head.style.backgroundColor = "blue"
head.style.top = "0"
head.style.padding = " 2rem "
head.style.color = "white"
head.style.fontWeight = "500"

document.body.append(head)

let container = document.createElement("div")
container.className = "container";
container.style.paddingTop = "3rem"

let row = document.createElement("div")
row.className = "row";

container.append(row);

function bar(value){
    for(let i = 0; i<value.length;i++){
        row.innerHTML += `
        <div class = "col-md-3">
            <div class="card border-primary mb-3" style="max-width: 18rem; font-size:14px; box-shadow: 0px 0px 0px -41px rgba(0,0,0,0.45),
            0px 13px 23px -16px rgba(0,0,0,0.45); padding: .8rem; border:none; background-color: rgb(156, 241, 230);">
                <p class="card-text" style = "font-weight: 500">Name : ${value[i].name}</p>
                <p class="card-text">Email : ${value[i].email}</p> 
                <p class="card-text">Street : ${value[i].address.street}</p>
                <p class="card-text">City : ${value[i].address.city}</p>
            </div>
        </div>
        `
    }
    document.body.append(container)
}