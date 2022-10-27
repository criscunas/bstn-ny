/*
    Create a function that takes in an object
    and uses the DOM to display it on the screen.
*/
const createUser = (user) => {
    // Create variables to store our object values.
    let name = user.name
    let gender = user.gender
    let hair_color = user.hair_color

    /*
        1) Create an element
        2) Attach a classname
        3) Give it value
    */

    // User div
    let userDiv = document.createElement('div')
    userDiv.classList.add('users__box')

    // User name, p tag.
    let userName = document.createElement('p')
    userName.classList.add('users__name')
    userName.innerText = name

    // User gender, p tag.
    let userGender = document.createElement('p')
    userGender.classList.add('users__gender')
    userGender.innerText = gender

    // User gender, p tag.
    let userHair = document.createElement('p')
    userHair.classList.add('users__hair')
    userHair.innerText = hair_color

    // Appending our created p tags to our user div.
    userDiv.appendChild(userName)
    userDiv.appendChild(userGender)
    userDiv.appendChild(userHair)

    // Appending our user div to our user section ('users__list') on the HTML.
    userSection.appendChild(userDiv)
}

// Section in HTML where all our users will go.
const userSection = document.querySelector('.users__list')

// Set up our axios get request
axios.get('https://ghibliapi.herokuapp.com/people').then((response) => {

    // Create a variable to store the array of objects.
    // Console.log(response) to see the response from the API.
    let users = response.data

    // For loop the data
    for (let i = 0; i < users.length; i++) {

        // Call our function that create elements.
        createUser(users[i])
    }

}).catch((error) => {
    console.log(error)
})



