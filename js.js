const veiculo1 = prompt("Enter the name of the first vehicle:")
const velocidade1 = parseFloat(prompt("Enter the velocity of the first vehicle:"))

const veiculo2 = prompt("Enter the name of the second vehicle:")
const velocidade2 = parseFloat(prompt("Enter the velocity of the second vehicle:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " is faster than " + veiculo2)
  } else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " is faster than " + veiculo1)
  } else {
    alert("there was a draw")
  }