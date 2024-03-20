document.addEventListener('DOMContentLoaded', function () {
  //
  // functie om de volgende vragen te laten zien enzo
  //
  // const fieldsets = document.querySelectorAll('.hele-vraag');
  // let currentIndex = 0;
  // // alle  hele vragen op none zetten behalve de eerste
  // for (var i = 1; i < fieldsets.length; i++) {
  //   fieldsets[i].style.display = 'none';
  // }
  // //   volgende en vorige buttons generaten
  // function generateButtons() {
  //   const buttonsContainer = document.getElementById('buttons');
  //   const prevButton = document.createElement('button');
  //   prevButton.textContent = 'Vorige';
  //   prevButton.style.display = 'none';
  //   prevButton.addEventListener('click', function () {
  //     goToPrevFieldset();
  //     window.scrollTo(0, 0);
  //   });
  //   const nextButton = document.createElement('button');
  //   nextButton.textContent = 'Volgende';
  //   nextButton.addEventListener('click', function () {
  //     goToNextFieldset();
  //     window.scrollTo(0, 0);
  //   });
  //   buttonsContainer.appendChild(prevButton);
  //   buttonsContainer.appendChild(nextButton);
  // }
  // // kijken naar huidige index, buttons updaten op basis daarvan
  // function updateButtons() {
  //   const prevButton = document.querySelector('#buttons button:nth-child(1)');
  //   const nextButton = document.querySelector('#buttons button:nth-child(2)');
  //   prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
  //   nextButton.style.display =
  //     currentIndex === fieldsets.length - 1 ? 'none' : 'block';
  // }
  // //   functies voor de volgende en vorige fieldset displayen
  // function goToNextFieldset() {
  //   if (currentIndex < fieldsets.length - 1) {
  //     fieldsets[currentIndex].style.display = 'none';
  //     fieldsets[++currentIndex].style.display = 'block';
  //     updateButtons();
  //   }
  // }
  // function goToPrevFieldset() {
  //   if (currentIndex > 0) {
  //     fieldsets[currentIndex].style.display = 'none';
  //     fieldsets[--currentIndex].style.display = 'block';
  //     updateButtons();
  //   }
  // }
  // generateButtons();
  // updateButtons();
  //
  // required fields weghalen, p weghalen
  //
  const inputFields = document.querySelectorAll('input');
  inputFields.forEach((input) => {
    input.removeAttribute('required');
  });
});
