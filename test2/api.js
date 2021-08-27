let section = document.getElementById('section')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => updatePost(posts))


function updatePost(posts) {

    posts.map(post => {
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let div = document.createElement('div')
        h1.innerText = `${post.title}`
        p.innerText = `${post.body}`
        div.appendChild(h1)
        div.appendChild(p)
        section.appendChild(div)


    })

}

const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.cars;
console.log(brand);