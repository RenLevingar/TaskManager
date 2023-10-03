const result2 = document.querySelector(".result2");
var editMode = false;

const fetchPeople = async() =>{
    try {
        const {data} = await axios.get('/api/people')
        console.log(await axios.get('/api/people'))
        console.log(data)   

        const personList = data.x.map((person) => {
            console.log(person)
                return `<h5>${person.name}</h5>`;
        })
        result2.innerHTML = personList.join("");
    } catch (error) {
        console.log(error);
        // formAlert.textContent = error.response.data.msg;
    }
}
fetchPeople();

// HTML
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".personNameInput");
const input2 = document.querySelector(".personAgeInput");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const nameValue = input.value;
    const ageValue = input2.value;

    try {
        if(editMode == false) {
            const {data} = await axios.post('/api/people', {name: nameValue, age: ageValue});
            const h5 = document.createElement('h5');
            result2.appendChild(h5);
            h5.textContent = data.person;
        } else {
            const newperson = input.value;
            const newDesc = input2.value;
            fetch(`/api/people/${currentID}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: newperson, desc: newDesc, status: false})
            })
            fetchPeople();
            editMode = false;
        }
        fetchPeople();
    } catch (error) {
        console.log(error.response)
        formAlert.textContent = error.response.data.msg;
    }
    input.value = "";
    input2.value = "";
})

// async function deleteperson(id) {
//     await fetch(`/api/people/${id}`, {
//         method: 'DELETE',
//         headers: {'Content-Type': 'application/json'},
//     })
//     fetchPeople();
// }

// var currentID = '';

// function nameEdit(pId, pName, pDesc) {
//     editMode = true;
//     input.value = pName;
//     currentID = pId;
//     input2.value = pDesc;
// }

// async function changeStatus(name, id, desc, status) {
//     try {
//         let element = document.getElementById(`item${id}`);
//         console.log(element)
//         console.log(element.checked)
//         if(element.checked){
//             console.log('check')
//             fetch(`/api/people/${id}`, {
//                 method: 'PUT',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({status:true})
//             })
//             console.log('finished')
//             fetchPeople();
//         }else{
//             console.log('no')
//             fetch(`/api/people/${id}`, {
//                 method: 'PUT',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({status:false})
//             })
//             fetchPeople()
//         }
//     } catch (error) {
//         console.log(error)
//     }
    
//     fetchPeople();
// }