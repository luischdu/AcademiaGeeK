let user = [
    {
        name: "Juan",
        lastname: "Mendez",
        email: "jmendez@email.com",
    },
]

if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'))
}
let btn = document.querySelector('#submit')
function setUpUser() {
    btn.addEventListener('click', e => {
        user = {
            name: document.querySelector('#name').value,
            lastname: document.querySelector('#lastname').value,
            email: document.querySelector('#email').value,
        }
        localStorage.setItem('user', JSON.stringify(user))
        document.querySelector('.newname').innerHTML = `${user.name} ${user.lastname}`
        e.preventDefault();
    })
}

setUpUser()