let textArea = document.getElementById('choice_input');
let choicesDiv = document.querySelector('#choices');

textArea.addEventListener('keyup', addChoices);

function addChoices(e) {
    if (e.key == 'Enter') {
        textArea.value = '';
        if (choicesDiv.children.length > 0) {
            let multiplier = 0;
            let highlight;
            let int = setInterval(() => pickChoice(), 100);
            function pickChoice() {
                if (highlight != null) {
                    highlight.className = 'choice';
                }
                multiplier++;

                if (multiplier > Math.max(50, choicesDiv.children.length * 5)) {
                    clearInterval(int);
                }
                highlight = choicesDiv.children[getRandomInt(choicesDiv.children.length)];
                highlight.className = 'choice highlight';
            }
        }
    } else {
        let choices = e.target.value.split(',');
        choices = choices.map((choice) => choice.trim()).filter((choice) => choice !== '');
        choicesDiv.innerHTML = '';
        choices.forEach((choice) => {
            if (choice != '') {
                let choiceBox = document.createElement('span');
                choiceBox.innerHTML = `<p>${choice}</p>`;
                choiceBox.className = 'choice';
                choicesDiv.appendChild(choiceBox);
            }
        });
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
