// let h1 = document.createElement('h1');

// h1.innerHTML = 'day la the h1'
// h1.id = 'test'

// document.body.appendChild(h1)

// let obj ={
//     createElement:function(){
//         // 
//     }
// }
// obj.createElement()
const btn = document.getElementById('btn');

let ip = document.getElementById('textField');
let ip2 = document.getElementById('textField2');
let result = document.querySelector('#result')
function getMessage(){
    let valueInput1 = ip.value;
    let valueInput2 = ip2.value;
    result.innerHTML = Number(valueInput1)+Number(valueInput2)

    // console.log()
}

const student = [
    {id:1,name:'nam',age:20},
    {id:2,name:'hieu',age:20},
    {id:3,name:'trung',age:20},
    {id:4,name:'binh',age:20},
]

const arr = ['hoang','nam','long','hieu','long'];
arr.push()
arr.pop()
arr.shift()
let list = document.querySelector('#list');
function render(){
    let html = '';
    // for (let index = 0; index < arr.length; index++) {
    //     html += '<li>' + arr[index] + '</li>'
    //     console.log(html)
    // }
    // list.innerHTML = html;
    
    for (let index = 0; index < arr.length; index++) {
        html += `<li>${arr[index]} <button onclick ="delete(${index})">Delete</button></li>`;
        list.innerHTML = html
        
    }
}
render()

btn.onclick = function(){
    arr.push(ip.value)
    console.log(arr)
    render()
    ip.value = ''
}

function deleteitem(id){
    arr.splice(id,1);
    render();
}
    

