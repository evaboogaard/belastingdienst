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

// een change event toevoegen aan alle inputs
allInputs.forEach((input) => {
  input.addEventListener('change', () => {
    // waarde van input el in variabele stoppen
    const value = input.value;
    // key voor de localStorage op basis van input id
    const key = 'dataSaved' + input.id;

    // als de input een radiobutton is
    if (input.type === 'radio') {
      const relatedRadios = document.querySelectorAll(
        `input[type="radio"][name="${input.name}"]`
      );
      // eerst alle gerelateerde items verwijderen uit localStorage
      relatedRadios.forEach((radio) => {
        const keyToRemove = 'dataSaved' + radio.id;
        localStorage.removeItem(keyToRemove);
      });
      // daarna alleen de geselecteerde waarde opslaan in localStorage
      localStorage.setItem(key, value);
    } else {
      // voor andere inputtypes, direct opslaan in localStorage
      localStorage.setItem(key, value);
    }
  });
});

// on load de local storage lezen en terug zetten in de input velden
window.addEventListener('load', () => {
  allInputs.forEach((input) => {
    const key = 'dataSaved' + input.id;
    const dataSaved = localStorage.getItem(key);

    // controleren of er een opgeslagen waarde is of niet
    if (dataSaved !== null) {
      input.value = dataSaved;
      if (input.type === 'radio') {
        // controleer of de waarde overeenkomt met de opgeslagen waarde in localStorage
        input.checked = input.value === dataSaved;
      }
    }
  });
});

// // Function to save selected radio button to localStorage
// function saveToLocalStorage() {
//   // Find all radio buttons
//   const radioButtons = document.querySelectorAll('input[type="radio"]');
//   // Loop through each radio button
//   radioButtons.forEach(function (radioButton) {
//     // Add event listener for change event
//     radioButton.addEventListener('change', function () {
//       // Check if the radio button is checked
//       if (this.checked) {
//         // Generate localStorage key using 'name' of the radio button
//         const localStorageKey = `${this.name}-selectedID`;
//         // Save the ID of the checked radio button to localStorage
//         localStorage.setItem(localStorageKey, this.id);
//       }
//     });
//     // Check if this radio button was previously checked and restore its state
//     const localStorageKey = `${radioButton.name}-selectedID`;
//     if (localStorage.getItem(localStorageKey) === radioButton.id) {
//       radioButton.checked = true;
//     }
//   });
// }

// // Call the function to save and restore radio button states
// saveToLocalStorage();

// chatgpt heeft me hiermee geholpen, prompts staan in readme
function setActiveLink() {
  const sections = document.querySelectorAll('section[id], fieldset[id]');
  const navLinks = document.querySelectorAll('nav ol li a');

  sections.forEach((section) => {
    // haalt de bovenste positie en de hoogte op van de sections/fieldsets
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // controleert of de huidige scrollpositie binnen het bereik van de sectie valt
    if (
      pageYOffset >= sectionTop - 40 &&
      pageYOffset < sectionTop + sectionHeight - 40
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        // als de href van de link overeenkomt met de id van de sectie, markeer deze dan als actief
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function (event) {
  const requiredElements = document.querySelectorAll('[data-required="true"]');

  let formIsValid = true;

  requiredElements.forEach((element) => {
    element.removeAttribute('required');
    // als input leeg is, voeg class toe
    if (element.value.trim() === '') {
      // voeg class toe
      element.classList.add('error-message');
      formIsValid = false;
    } else {
      // verwijder class als veld niet meer leeg is
      element.classList.remove('error-message');
    }

    element.addEventListener('blur', function () {
      // check onblur of het valid is
      if (element.value.trim() !== '') {
        // if so, verwijder class
        element.classList.remove('error-message');
      }
    });
  });

  // als het formulier geldig is, verwijder de preventDefault()
  if (formIsValid) {
    return true; // Dit zorgt ervoor dat het formulier normaal verzonden wordt
  }
});
