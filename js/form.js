// Here are the form submission rules that you must code in JavaScript:

const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    //handles
    const firstNameInput = document.querySelector('#firstName')
    const firstNameError = document.querySelector('#firstNameError')

    const lastNameInput = document.querySelector('#lastName')
    const lastNameError = document.querySelector('#lastNameError')

    const addressInput = document.querySelector('#address')
    const addressError = document.querySelector('#addressError')

    const cityInput = document.querySelector('#city')
    const cityError = document.querySelector('#cityError')

    const stateInput = document.querySelector('#state')
    const stateError = document.querySelector('#stateError')

    const productInput = document.querySelector('#product')
    const productError = document.querySelector('#productError')

    const quantityInput = document.querySelector('#quantity')
    const quantityError = document.querySelector('#quantityError')

    const acceptInput = document.querySelectorAll('input[name="accept[]"]:checked')
    const acceptError = document.querySelector('#acceptError')

    //shows errors
    const errorShow = document.querySelector('#errorShow')
    const errors = document.querySelectorAll('.error')
    //disbles submit butto
    document.querySelector('#submit').disabled = true

    //clears bucket
    errorShow.innerHTML = ''

    //adds or removes the errors under individual inputs
    errors.forEach(function (element) {
        element.classList.add('hide')
        element.classList.remove('error')
    })

    // ba ba BA BUMMMM - the error bucket
    const doomBucket = []

    // all of the indivigual errors & them being put into the bucket if conditions are (or aren't) met
    if (firstNameInput.value.trim() == '') {
        doomBucket.push([firstNameInput, firstNameError, 'Error: First Name Required'])
    }

    if (lastNameInput.value.trim() == '') {
        doomBucket.push([lastNameInput, lastNameError, 'Error: Last Name Required'])
    }

    if (addressInput.value.trim() == '') {
        doomBucket.push([addressInput, addressError, 'Error: Address Required'])
    }

    if (cityInput.value.trim() == '') {
        doomBucket.push([cityInput, cityError, 'Error: City Required'])
    }

    if (stateInput.value == '') {
        doomBucket.push([stateInput, stateError, 'Error: State Required'])
    }

    if (productInput.value == '') {
        doomBucket.push([productInput, productError, 'Error: Product Required'])
    }

    if (quantityInput.value == '') {
        doomBucket.push([quantityInput, quantityError, 'Error: Quantity Required'])
    }

    // FIX: terms & conditions
    if (acceptInput.length == '') {
        doomBucket.push([acceptInput, acceptError, 'Error: Must Accept to Submit'])
    }

    // The doom bucket in action if there is at least one error
    if (doomBucket.length > 0) {
        // stops the form from submitting
        e.preventDefault()
        // creates a new ul
        const ul = document.createElement('ul')
        // begins to append to formerly new ul
        errorShow.append(ul)
        doomBucket.forEach(function (element) {
            const li = document.createElement('li')
            li.innerText = element[2]
            ul.appendChild(li)
            element[1].classList.remove('hide')
            element[1].classList.add('error')
        })
        doomBucket[0][0].focus()
    }
    // re enables the submit butto
    document.querySelector('#submit').disabled = false
})