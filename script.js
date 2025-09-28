document.getElementById("button").addEventListener(`click`,()=>{let inputValue = document.getElementById('inputName').value 
    fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`)
    .then(Response => Response.json())
    .then(data => {
        const items = document.getElementById("items")
        items.innerHTML = "" 
     if(data.meals == null){
        document.getElementById("msg").style.display ="block"
     }else{
         document.getElementById("msg").style.display ="none"
         data.meals.forEach(meal => {
             console.log(meal)
             itemDiv = document.createElement("div")
             itemDiv.className ="m-2 singleitem"
             
             let itemInfo = `<div class="card" style="width: 12rem;">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h6 class="card-text">${meal.strMeal}</h6>
  </div>
</div>`
        itemDiv.innerHTML = itemInfo
        items.appendChild(itemDiv)
         })
     }
    })
})
