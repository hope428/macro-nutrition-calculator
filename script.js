const suggestedServing = document.getElementById("servingSizeG");
const servingCal = document.getElementById("servingCal");
const servingProtein = document.getElementById("servingP");
const servingCarb = document.getElementById("servingCarb");
const servingSatFat = document.getElementById("servingSatFat");
const userSizeG = document.getElementById("userSizeG");
const submit = document.getElementById("submit");
let userNutrition = {calories: 0, protein: 0, fat: 0, carbs: 0}

const calculateMacros = (e) => {
  e.preventDefault();

  const amount = userSizeG.value / suggestedServing.value;

  userNutrition.calories = servingCal.value * amount;
  userNutrition.protein = servingProtein.value * amount;
  userNutrition.carbs = servingCarb.value * amount;
  userNutrition.fat = servingSatFat.value * amount;

  displayMacros()
};

const displayMacros = (e) => {
  const display = document.getElementById("output")
  display.innerHTML = ""

  for(const key in userNutrition){
    console.log(`${key}: ${userNutrition[key]}`)

    const btn = document.createElement('button')
    btn.innerHTML = `${key}: ${userNutrition[key]}`
    display.append(btn)
  }
}

submit.addEventListener("click", calculateMacros);
