let users = document.getElementById('users')



users.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => addToList(users))

})




function addToList(data) {
    let ul = document.getElementById('users-parent');
    // console.log(ul);
    data.map(user => {
        let li = document.createElement('li')
       li.innerText = `This is user ${user.name} and his/her city is ${user.address.city}`
        //  console.log(newList);
         ul.appendChild(li)

    })


}