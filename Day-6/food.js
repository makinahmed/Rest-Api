const searchFood = () => {
    const searchField = document.getElementById('search-field')
    let searchItem = searchField.value
    searchField.value = ''
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`

    fetch(url)
        .then(res => res.json())
        .then(foods => displayMeal(foods))
       
}
let container = document.getElementById('food-container')
function displayMeal(foods) {
    foods.meals.map(food => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card"  style="width: 20rem;">
            <img src="${food.strMealThumb}" class="card-img-top" width=100;>
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
    `
        container.appendChild(div)
    })
}