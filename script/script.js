document.addEventListener('DOMContentLoaded', function () {
    var currentYear = document.querySelector('#currentyear');
    var getYear = new Date().getFullYear();
    var yearString = getYear.toString();
    var p = document.createElement('span');
    p.textContent = yearString;
    currentYear === null || currentYear === void 0 ? void 0 : currentYear.appendChild(p);
});
document.addEventListener('DOMContentLoaded', function () {
    var addOptionButton = document.getElementById('add-option');
    var optionInput = document.getElementById('option');
    var optionList = document.getElementById('option-list');
    var makeDecisionButton = document.getElementById('make-decision');
    addOptionButton === null || addOptionButton === void 0 ? void 0 : addOptionButton.addEventListener('click', function () {
        var optionText = optionInput.value.trim();
        if (optionText) {
            var newOption = document.createElement('li');
            newOption.textContent = optionText;
            newOption.classList.add('bg-purple-500', 'text-white', 'p-2', 'text-lg', 'text-center');
            optionList === null || optionList === void 0 ? void 0 : optionList.appendChild(newOption);
            optionInput.value = '';
        }
    });
    makeDecisionButton === null || makeDecisionButton === void 0 ? void 0 : makeDecisionButton.addEventListener('click', function () {
        var selectedOption = getRandomListItem();
        if (selectedOption) {
            selectedOption.style.backgroundColor = '#F7007C';
        }
    });
    function getRandomListItem() {
        var listItems = document.querySelectorAll('#option-list li');
        if (listItems.length === 0) {
            return null;
        }
        else {
            var getRandomIndex = Math.floor(Math.random() * listItems.length);
            return listItems[getRandomIndex];
        }
    }
});
