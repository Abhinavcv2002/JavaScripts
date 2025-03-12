const data = [{no:1,name:"vv",age:22}]
function  add(){

//-- Two way of --//

        // let no = document.getElementById("no").value;
        // let name = document.getElementById("name").value;
        // let age = document.getElementById("age").value;
        // data.push({no:no,name:name,age:age})
        // console.log(data);
        // document.getElementById("no").value = ''
        // document.getElementById("name").value = ''
        // document.getElementById("age").value = ''

//-- Another way --//
    
        let no = document.getElementById("no")
        let name = document.getElementById("name")
        let age = document.getElementById("age")
        data.push({no:no.value,name:name.value,age:age.value})
        no.value = name.value = age.value = ''
        console.log(data);
        
    display()
}

function display(){
    let tbody = document.getElementById('tbody')
    tbody.innerHTML = ''
    for(user of data){
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td> ${user.no} </td>
        <td> ${user.name} </td>
        <td> ${user.age} </td>
        `

        tbody.appendChild(tr)
    }
}

display()