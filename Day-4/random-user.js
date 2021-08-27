
const profiles = document.getElementById('profiles')

fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => loadProfile(data))

function loadProfile(data) {

    data.results.map(a => {
        let ppp = document.createElement('p')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let pp = document.createElement('p')
        img.setAttribute('src', a.picture.medium)
        ppp.innerText = `Full Name : ${a.name.first} ${a.name.last}`
        p.innerText = `Gender: ${a.gender}`
        pp.innerText = `Email : ${a.email}`


        profiles.appendChild(img)
        profiles.appendChild(p)
        profiles.appendChild(ppp)
        profiles.appendChild(pp)

    })

}


