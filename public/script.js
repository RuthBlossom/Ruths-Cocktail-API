document.addEventListener("DOMContentLoaded", () => {
	const generateButton = document.querySelector(".button");

	generateButton.addEventListener("click", async () => {
		try {
			const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
			const data = await response.json();
			const cocktail = data.drinks[0];

			// Update cocktail information on the page
			document.querySelector('.card-image').src = cocktail.strDrinkThumb + '/preview';
			document.querySelector('.txt').textContent = 'Ingredients';
			const ingredientsList = document.querySelector('.ingredients-list');
			ingredientsList.innerHTML = '';
			for (let i = 1; i <= 15; i++) {
				const ingredientKey = `strIngredient${i}`;
				const measureKey = `strMeasure${i}`;
				if (cocktail[ingredientKey]) {
					const li = document.createElement('li');
					li.textContent = `${cocktail[measureKey]} ${cocktail[ingredientKey]}`;
					ingredientsList.appendChild(li);
				}
			}
			document.querySelector('h2').textContent = cocktail.strDrink;
			document.querySelector('p:nth-of-type(1)').textContent = `Category: ${cocktail.strCategory}`;
			document.querySelector('p:nth-of-type(2)').textContent = `Instructions: ${cocktail.strInstructions}`;
		} catch (error) {
			console.error('Error fetching cocktail:', error);
		}
	});
});
