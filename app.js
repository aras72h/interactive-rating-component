const radioGroup = document.querySelectorAll('.radio-btn')
const form = document.querySelector('.form')

radioGroup.forEach((btn) => btn.addEventListener('click', setRating))
form.addEventListener('submit', formHandler)

function setRating(e) {
  e.target.firstElementChild.checked = true
  radioGroup.forEach((btn) => btn.classList.remove('selected'))
  e.target.classList.add('selected')
}

function formHandler(e) {
  console.log(form.elements.rating.value)
  e.preventDefault()
}