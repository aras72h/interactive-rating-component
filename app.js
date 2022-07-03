const radioGroup = document.querySelectorAll('.radio-btn')
const form = document.querySelector('.form')

radioGroup.forEach((btn) => btn.addEventListener('click', setRating))
form.addEventListener('submit', formHandler)

function setRating(e) {
  e.target.firstElementChild.checked = true
  radioGroup.forEach((btn) => btn.classList.contains('selected') &&
    btn.classList.remove('selected')
  )
  // document.querySelector('.selected').classList.remove('selected')
  e.target.classList.add('selected')
}

function formHandler(e) {
  rating = form.elements.rating.value
  // document.querySelector('rate-output').textContent = `You selected ${rating} out of 5`
  // console.log(document.querySelector('body').innerHTML);
  document.querySelector('body').innerHTML = `
    <div class="container center">
      <div class="card center">
        <img src="images/illustration-thank-you.svg" alt="Thank you Image">
        <p class="rate-output my-1 light-bg">You selected ${rating} out of 5</p>
        <h2 class="card-heading text-center">Thank You!</h2>
        <p class="card-body text-center">We appreciate you taking the time to give a rating. If you ever need more
          support,
          don't
          hesitate to get in touch!</p>
      </div>
    </div>
  `

  e.preventDefault()
}
