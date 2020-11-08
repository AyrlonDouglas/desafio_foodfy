const modalOverlay = document.querySelector('.modal-overlay')
const recipes = document.querySelectorAll('.recipes')



for(let recipe of recipes) {
    recipe.addEventListener('click', function(){
        const imgId = recipe.getAttribute('id')      
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src =`images/${imgId}.png`;

        const nameRecipe = recipe.getElementsByTagName("P").item(0).innerHTML
        const authorRecipe = recipe.getElementsByTagName("P").item(1).innerHTML

        modalOverlay.querySelector('.name-recipe').innerHTML = nameRecipe
        modalOverlay.querySelector('.author-recipe').innerHTML = authorRecipe
        
    })
}



document.querySelector('.close-modal').addEventListener('click',function(){
    modalOverlay.classList.remove('active')
})