let nameList = [];

const addNameButton = document.getElementById('addNameButton');
const nameInput = document.getElementById('nameInput');
const revealListButton = document.getElementById('revealListButton');
const resetButton = document.getElementById('resetButton');
const nameListElement = document.getElementById('nameList');

const confirmModal = document.getElementById('confirmModal');
const resetConfirmModal = document.getElementById('resetConfirmModal');

const confirmReveal = document.getElementById('confirmReveal');
const cancelReveal = document.getElementById('cancelReveal');
const confirmReset = document.getElementById('confirmReset');
const cancelReset = document.getElementById('cancelReset');

// Function to shuffle the list randomly
function shuffleList(list) {
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
}

// Add name to the list
addNameButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        nameList.push(name);
        nameInput.value = '';
    }
});

// Reveal the list after confirmation
revealListButton.addEventListener('click', () => {
    confirmModal.style.display = 'flex';
});

// Reset the list after confirmation
resetButton.addEventListener('click', () => {
    resetConfirmModal.style.display = 'flex';
});

// Confirm revealing the list
confirmReveal.addEventListener('click', () => {
    shuffleList(nameList);
    nameListElement.innerHTML = '';
    nameList.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameListElement.appendChild(li);
    });
    nameListElement.classList.remove('hidden');
    confirmModal.style.display = 'none';
});

// Cancel revealing the list
cancelReveal.addEventListener('click', () => {
    confirmModal.style.display = 'none';
});

// Confirm resetting the list
confirmReset.addEventListener('click', () => {
    nameList = [];
    nameListElement.innerHTML = '';
    nameListElement.classList.add('hidden');
    resetConfirmModal.style.display = 'none';
});

// Cancel resetting the list
cancelReset.addEventListener('click', () => {
    resetConfirmModal.style.display = 'none';
});
