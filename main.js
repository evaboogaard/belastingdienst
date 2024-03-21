// document.addEventListener('DOMContentLoaded', function () {
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
//   const inputFields = document.querySelectorAll('input');
//   inputFields.forEach((input) => {
//     input.removeAttribute('required');
//   });
// });

// const saveFormData = () => {
//   const formData = {};

//   // Select all input elements within the form
//   const allInputs = document.querySelectorAll('input');

//   // Iterate over each input element and store its value in formData
//   allInputs.forEach((input) => {
//     // Check if the input type is not a file
//     if (input.type !== 'file') {
//       formData[input.id] = input.value; // Store input value in the formData object with input ID as key
//     }
//   });

//   // Convert formData to JSON string
//   const jsonString = JSON.stringify(formData);

//   // Store the JSON string in local storage
//   localStorage.setItem('formData', jsonString);

//   // Provide feedback when saving
//   const saveFeedback = document.createElement('p');
//   saveFeedback.textContent = 'Gegevens opgeslagen';

//   document.querySelector('form').appendChild(saveFeedback);

//   // Remove feedback after 3 seconds
//   setTimeout(function () {
//     saveFeedback.remove();
//   }, 3000);
// };

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
  input.addEventListener('change', () => {
    const value = input.value;
    const key = 'dataSaved' + input.id;

    localStorage.setItem(key, value);

    const saveFeedback = document.createElement('p');
    saveFeedback.textContent = 'Gegevens opgeslagen';

    document.querySelector('form').appendChild(saveFeedback);
  });
});

window.addEventListener('load', () => {
  allInputs.forEach((input) => {
    const key = 'dataSaved' + input.id;
    const dataSaved = localStorage.getItem(key);
    if (dataSaved !== null) {
      input.value = dataSaved;
      if (input.type === 'checkbox') {
        input.checked = true;
      }
    }
  });
});

// dankjewel chatgpt!!!! echt een legend <3
function setActiveLink() {
  const sections = document.querySelectorAll('section[id], fieldset[id]');
  const navLinks = document.querySelectorAll('nav ol li a');

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (
      pageYOffset >= sectionTop - 40 &&
      pageYOffset < sectionTop + sectionHeight - 40
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();
