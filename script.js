const raffleForm = document.getElementById('raffle-form');
const drawButton = document.getElementById('draw-btn');
const resetButton = document.getElementById('reset-btn'); 
const winnerDisplay = document.getElementById('winner');
const participantList = document.getElementById('participant-list');

let participants = [];

raffleForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();
  if (name !== '') {
    participants.push(name);
    nameInput.value = '';
    updateParticipantList();
  } else {
    alert('Please enter a valid name.');
  }
});


resetButton.addEventListener('click', function() {
  participants = [];
  participantList.innerHTML = '';
  winnerDisplay.innerHTML = '';
  winnerDisplay.style.backgroundColor = ''; 
});

function updateParticipantList() {
  participantList.innerHTML = '';
  participants.forEach(function(participant) {
    const listItem = document.createElement('li');
    listItem.textContent = participant;
    participantList.appendChild(listItem);
  });
}

drawButton.addEventListener('click', function() {
  if (participants.length > 0) {
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];
    
    winnerDisplay.innerHTML = `Winner: ${winner} 🎂🎉`;
    
    winnerDisplay.style.backgroundColor = '#ffeb3b'; 
  } else {
    alert('There are no participants yet.');
  }
});