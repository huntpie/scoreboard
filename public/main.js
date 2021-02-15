function updateTeam1Name(event) {
  const team1Name = document.querySelector('h2.team1-name')
  team1Name.textContent = event.target.value
  console.log(event.target.value)
  console.log(event)
}
function updateTeam2Name(event) {
  const team2Name = document.querySelector('h2.team2-name')
  team2Name.textContent = event.target.value
  console.log(event.target.value)
  console.log(event)
}
function updateTeam1NameAlt(){
  const newTeam1Name = document.querySelector('input.update-team1-name').value
  console.log(newTeam1Name)
  document.querySelector('h2.team1-name').textContent = newTeam1Name
}
function updateTeam2NameAlt(){
  const newTeam1Name = document.querySelector('input.update-team2-name').value
  console.log(newTeam1Name)
  document.querySelector('h2.team2-name').textContent = newTeam1Name
}



function updateTeam1ScorePlus(event){
  const newTeam1Score = document.querySelector('h3.team1-score')
  const displayWinner1 = document.querySelector('h3.winnerDisplay1')
  if (newTeam1Score.textContent < 20) {
    newTeam1Score.textContent++
    } else if (newTeam1Score.textContent = 21) {
      displayWinner1.style.visibility = 'visible'
  }
}
function updateTeam1ScoreSubtract(event){
  const newTeam1Score = document.querySelector('h3.team1-score')
  const displayWinner1 = document.querySelector('h3.winnerDisplay1')
  console.log(newTeam1Score)
  if (newTeam1Score.textContent > 0 ) {
    newTeam1Score.textContent--
    displayWinner1.style.visibility = 'hidden'
  } 
}
function updateTeam2ScorePlus(event){
  const newTeam2Score = document.querySelector('h3.team2-score')
  const displayWinner2 = document.querySelector('h3.winnerDisplay2')
  console.log(newTeam2Score)
  if (newTeam2Score.textContent < 20) {
  newTeam2Score.textContent++
  } else if (newTeam2Score.textContent = 21) {
    displayWinner2.style.visibility = 'visible'
}
}
function updateTeam2ScoreSubtract(event){
  const newTeam2Score = document.querySelector('h3.team2-score')
  const displayWinner2 = document.querySelector('h3.winnerDisplay2')
  console.log(newTeam2Score)
  if (newTeam2Score.textContent > 0) {
    newTeam2Score.textContent--
    displayWinner2.style.visibility = 'hidden'
}
}

function updateAllScores(){
  const zeroScore2 = document.querySelector('h3.team2-score')
  const zeroScore1 = document.querySelector('h3.team1-score')
  const displayWinner2 = document.querySelector('h3.winnerDisplay2')
  const displayWinner1 = document.querySelector('h3.winnerDisplay1')
  if (zeroScore2.textContent >= 0 && zeroScore1.textContent >= 0) {
    zeroScore2.textContent = 0
    zeroScore1.textContent = 0
    displayWinner2.style.visibility = 'hidden'
    displayWinner1.style.visibility = 'hidden'
} 
}




function main() {
  document.querySelector('input.update-team1-name').addEventListener('input', updateTeam1Name) 
  document.querySelector('input.update-team2-name').addEventListener('input', updateTeam2Name)
  document.querySelector('button.update-team1-name-button').addEventListener('click', updateTeam1NameAlt)
  document.querySelector('button.update-team2-name-button').addEventListener('click', updateTeam2NameAlt)
  document.querySelector('button.team1-score-button-plus').addEventListener('click', updateTeam1ScorePlus)
  document.querySelector('button.team1-score-button-subtract').addEventListener('click', updateTeam1ScoreSubtract)
  document.querySelector('button.team2-score-button-plus').addEventListener('click', updateTeam2ScorePlus)
  document.querySelector('button.team2-score-button-subtract').addEventListener('click', updateTeam2ScoreSubtract)
  document.querySelector('button.reset-scores').addEventListener('click', updateAllScores)
}



document.addEventListener('DOMContentLoaded', main)
