const radioGroup = document.querySelectorAll('.radio-btn')
const form = document.querySelector('.form')

radioGroup.forEach((btn) => btn.addEventListener('click', setRating))
form.addEventListener('submit', formHandler)

function setRating(e) {
  e.target.firstElementChild.checked = true
  radioGroup.forEach((btn) => btn.classList.contains('selected') &&
    btn.classList.remove('selected', 'hover-off')
  )
  e.target.classList.add('selected', 'hover-off')
}

function formHandler(e) {
  rating = form.elements.rating.value
  if (rating !== '') {
    document.querySelector('body').innerHTML = `
      <div class="container center">
        <div class="card center">
          <img class="no-select" src="images/illustration-thank-you.svg" aria-hidden="true" alt="Thank you Image">
          <p class="rate-output light-bg no-select">You selected ${rating} out of 5</p>
          <h1 class="card-heading text-center">Thank You!</h1>
          <p class="card-body text-center">We appreciate you taking the time to give a rating. If you ever need more
            support,
            don't
            hesitate to get in touch!</p>
        </div>
      </div>
    `
  } else {
    const container = document.querySelector('.container')
    const card = document.querySelector('.card')
    const div = document.createElement('div')
    div.className = 'warning'
    div.appendChild(document.createTextNode('⚠ Please Select a Rating'))
    container.insertBefore(div, card)
    setTimeout(() => {
      document.querySelector('.warning').remove()
    }, 3000);
  }

  e.preventDefault()
}
