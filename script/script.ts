document.addEventListener('DOMContentLoaded', () => {
  let currentYear = document.querySelector('#currentyear');
  let getYear: number = new Date().getFullYear();
  let yearString: string = getYear.toString();
  const p = document.createElement('span');
  p.textContent = yearString;
  currentYear?.appendChild(p);
});

document.addEventListener('DOMContentLoaded', () => {
  const addOptionButton = document.getElementById('add-option');
  const optionInput = document.getElementById('option') as HTMLInputElement;
  const optionList = document.getElementById('option-list');
  const makeDecisionButton = document.getElementById('make-decision');

  addOptionButton?.addEventListener('click', () => {
    const optionText = optionInput.value.trim();

    if (optionText) {
      const newOption = document.createElement('li');
      newOption.textContent = optionText;
      newOption.classList.add(
        'bg-purple-500',
        'text-white',
        'p-2',
        'text-lg',
        'text-center'
      );
      optionList?.appendChild(newOption);
      optionInput.value = '';
    }
  });

  makeDecisionButton?.addEventListener('click', () => {
    const selectedOption = getRandomListItem();
    
    if (selectedOption) {
      selectedOption.style.backgroundColor = '#F7007C';
    }
    
  });
  function getRandomListItem() {
    const listItems = document.querySelectorAll('#option-list li');
    
    if (listItems.length === 0) {
      return null;
    } else {
      const getRandomIndex = Math.floor(Math.random() * listItems.length);
      return listItems[getRandomIndex];
    }    
  }

});
