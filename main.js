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
  event.preventDefault();

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
