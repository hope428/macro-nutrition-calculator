const suggestedServing = document.getElementById("servingSizeG");
const servingCal = document.getElementById("servingCal");
const servingProtein = document.getElementById("servingP");
const servingCarb = document.getElementById("servingCarb");
const servingSatFat = document.getElementById("servingSatFat");
const userSizeG = document.getElementById("userSizeG");
const submit = document.getElementById("submit");

const calculateMacros = (e) => {
  e.preventDefault();

  const amount = userSizeG.value / suggestedServing.value;

  const userCalories = servingCal.value * amount;
  const userProtein = servingProtein.value * amount;
  const userCarb = servingCarb.value * amount;
  const userSatFat = servingSatFat.value * amount;

  console.log(
    `Calories: ${userCalories}\nProtein: ${userProtein}\nCarbs: ${userCarb}\nSaturated Fat: ${userSatFat}`
  );
};

submit.addEventListener("click", calculateMacros);
