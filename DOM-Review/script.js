let comments = [{
        text: 'First Comment', 
        name: 'Bob',
    }, {
        text: 'Second Comment', 
        name: 'Jim'
    }, {
        text: 'Third Comment', 
        name: 'Ryan'
    }
]

let div = document.querySelector('.response__container')

const displayComments = () => {
    for (i = 0; i < comments.length; i++) {

        // Create an empty div to hold my comment
        let comment_div = document.createElement('div')

        // Giving new div a class name.
        comment_div.classList.add('response__box')

        // Create P tag 
        let ele = document.createElement('p')
        let name = document.createElement('p')

        // Giving it a class name
        ele.classList.add("response__text")
        name.classList.add("response__name")

        // attach text to p tag
        ele.innerText = comments[i].text
        name.innerText = comments[i].name

        
        // Putting the p tag inside of the created div.
        comment_div.appendChild(ele)
        comment_div.appendChild(name)


        div.appendChild(comment_div)
    }
}

displayComments()


let form = document.getElementById('comment_form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let comment_name = e.target.comment_name.value
    let comment_text = e.target.comment_text.value

    // Create comment object
    let obj = {
        name: comment_name, 
        text: comment_text
    }
    
    let comment_div = document.createElement('div')
    comment_div.classList.add('response__box')

    let ele = document.createElement('p')
    let name = document.createElement('p')

    // Giving it a class name
    ele.classList.add("response__text")
    name.classList.add("response__name")

    ele.innerText = obj.text
    name.innerText = obj.name

    comment_div.appendChild(ele)
    comment_div.appendChild(name)    

    div.prepend(comment_div)

    e.target.comment_name.value = ''
    e.target.comment_text.value = ''


    // comments.push(obj)
    // console.log(obj)
})


// Function to create comment div and push comments into it 
const createNewComment = (comment) => {

    let comment_div = document.createElement('div')

    // Giving new div a class name.
    comment_div.classList.add('response__box')

    // Create P tag 
    let ele = document.createElement('p')
    let name = document.createElement('p')

    // Giving it a class name
    ele.classList.add("response__text")
    name.classList.add("response__name")

    // attach text to p tag
    ele.innerText = comment.text
    name.innerText = comment.name

    
    // Putting the p tag inside of the created div.
    comment_div.appendChild(ele)
    comment_div.appendChild(name)


    div.appendChild(comment_div)
    // let ele = document.createElement('p')
    // ele.innerText = comment
    // div.prepend(ele)
}