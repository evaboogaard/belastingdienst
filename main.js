document.addEventListener('DOMContentLoaded', function () {
  const fieldsets = document.querySelectorAll('.hele-vraag');
  let currentIndex = 0;

  // Hide all fieldsets except the first one
  for (var i = 1; i < fieldsets.length; i++) {
    fieldsets[i].style.display = 'none';
  }

  // Function to generate the Previous and Next buttons
  function generateButtons() {
    const buttonsContainer = document.getElementById('buttons');
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Vorige';
    prevButton.style.display = 'none'; // Initially hide Previous button
    prevButton.addEventListener('click', function () {
      goToPrevFieldset();
    });

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Volgende';
    nextButton.addEventListener('click', function () {
      goToNextFieldset();
    });

    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(nextButton);
  }

  // Show/hide Previous and Next buttons based on current index
  function updateButtons() {
    const prevButton = document.querySelector('#buttons button:nth-child(1)');
    const nextButton = document.querySelector('#buttons button:nth-child(2)');
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display =
      currentIndex === fieldsets.length - 1 ? 'none' : 'block';
  }

  // Function to navigate to the next fieldset
  function goToNextFieldset() {
    if (currentIndex < fieldsets.length - 1) {
      fieldsets[currentIndex].style.display = 'none';
      fieldsets[++currentIndex].style.display = 'block';
      updateButtons();
    }
  }

  // Function to navigate to the previous fieldset
  function goToPrevFieldset() {
    if (currentIndex > 0) {
      fieldsets[currentIndex].style.display = 'none';
      fieldsets[--currentIndex].style.display = 'block';
      updateButtons();
    }
  }

  generateButtons();
  updateButtons();
});
