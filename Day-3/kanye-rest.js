 
    let getQuote = document.getElementById('get-quotes')
    let blockQuote = document.getElementById('quote')

    getQuote.addEventListener('click', () => {
        fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => {
            blockQuote.innerText = `${data.quote}`
        })
    })

