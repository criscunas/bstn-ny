// Target the form by its #id
let form = document.getElementById('user_form')

// Adding an event listener to the selected form. 
form.addEventListener('submit', (e) => {
    
    // Prevent page refresh 
    e.preventDefault()

    /* 
        Getting the values from our form using e.target & the name we 
        gave the input in out HTML (ex. <input name = "user_name" />)
    */
    let name = e.target.user_name.value
    let email = e.target.user_email.value
    let password = e.target.user_password.value
    let confirm_password = e.target.user_confirm_password.value


    // Check for missing values, will alert with message 
    if (!name || !email || !password || !confirm_password) {
        alert('Missing required field')
        return
    }

    // Check if the password value is equal to confirm password value  
    if (password !== confirm_password) {
        alert('Passwords must match')
        return
    }

    // if all checks out, everything under this will run. 

    // Create user object with values from form.
    let user = {
        name: name, 
        email: email,
        password: password,
        confirm_password: confirm_password
    }

    // Alert with the user name & email.
    alert(`Welcome ${user.name}, your email is ${user.email}`)

    // Reset the values back to empty strings
    e.target.user_name.value = ''
    e.target.user_email.value = ''
    e.target.user_password.value = ''
    e.target.user_confirm_password.value = ''
})