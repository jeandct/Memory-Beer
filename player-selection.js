// Selection du nombre de joueurs et stockage dans sessionStorage
function onePlayer() {
  sessionStorage.setItem('playerNb', '1');
  sessionStorage.setItem('playerIsSet', 'true');
  window.location.href = 'game.html';
}

sessionStorage.player;

function twoPlayers() {
  sessionStorage.setItem('playerNb', '2');
  sessionStorage.setItem('playerIsSet', 'true');
  window.location.href = 'game.html';
}
