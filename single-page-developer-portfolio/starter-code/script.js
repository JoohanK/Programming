const form = document.querySelector('.contact__form')
const allInputs = document.querySelectorAll('.form-input')
const allErrors = document.querySelectorAll('.error')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

allInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
  })
})

emailInput.addEventListener('change', () => {
  checkIfValid(emailInput)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  allInputs.forEach((input) => input.setAttribute('aria-invalid', false))
  allErrors.forEach((error) => (error.innerText = ''))

  const nameValid = checkIfValid(nameInput)
  const emailValid = checkIfValid(emailInput)
  const messageValid = checkIfValid(messageInput)

  


  if (nameValid && emailValid && messageValid) {
    // Handle submitted form...
    location.reload()
  }
})

function checkIfValid(input) {
  if (input.value === '') {
    input.setAttribute('aria-invalid', true)
    input.nextElementSibling.innerText = 'This field needs to be filled out'
    return false
  } else if (input === emailInput && !input.value.match(EMAIL_REGEX)) {
    input.setAttribute('aria-invalid', true)
    input.nextElementSibling.innerText = 'Sorry, invalid format here'
    return false
  } else return true
}

// Animations

const sliders = document.querySelectorAll('.slide-in')
const faders = document.querySelectorAll('.fade-in')

const appearsOptions = {
  root: null,
  rootMargin: '-100px',
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearsOptions)

sliders.forEach((slider) => {
  appearOnScroll.observe(slider)
})

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

