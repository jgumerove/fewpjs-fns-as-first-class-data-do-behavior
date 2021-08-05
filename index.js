/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) {
  let newString = string.split(':').join('')
  let toInteger = parseInt(newString)
  if (toInteger < 1200) {
    return "Good Morning"
  }
  if (toInteger >= 1200 && toInteger <= 1700) {
    return "Good Afternoon"
  }
  if (toInteger > 1700) {
    return "Good Evening"
  }
}

function displayMessage(greet) {
  document.getElementById('greeting').innerHTML = greet
}
