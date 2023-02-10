// Variables
const homeScreen = document.querySelector(".home-screen")
const luckScreen = document.querySelector(".luck-screen")
const cookieImage = document.querySelector("#fortune-cookie")
const btnAnotherCookie = document.querySelector("#btnAnotherCookie")
const quoteTicket = luckScreen.querySelector(".ticket")
const quotes = [
    {
        "quote": "Always with you, it cannot be done.",
        "author": "Master Yoda"
    },
    {
        "quote": "No! Try not. Do. Or do not. There is no try.",
        "author": "Master Yoda"
    },
    {
        "quote": "Size matters not. Look at me. Judge me by my size, do you?",
        "author": "Master Yoda"
    },
    {
        "quote": "A Jedi uses the Force for knowledge and defense, never for attack.",
        "author": "Master Yoda"
    },
    {
        "quote": "A Jedi’s strength flows from the Force.",
        "author": "Master Yoda"
    },
    {
        "quote": "You must unlearn what you have learned.",
        "author": "Master Yoda"
    },
    {
        "quote": "Wars not make one great.",
        "author": "Master Yoda"
    },
    {
        "quote": "Train yourself to let go of everything you are afraid to lose.",
        "author": "Master Yoda"
    },
    {
        "quote": "Attachment leads to jealousy. The shadow of greed, that is.",
        "author": "Master Yoda"
    },
    {
        "quote": "The greatest teacher failure is.",
        "author": "Master Yoda"
    },
    {
        "quote": "When you look at the dark side, careful you must be. For the dark side looks back.",
        "author": "Master Yoda"
    },
    {
        "quote": "If no mistake you have made, losing you are. A different game you should play.",
        "author": "Master Yoda"
    }]

const quoteElement = getQuoteItem(quotes)
let atHomeScreen = luckScreen.classList.contains('hide')

// Events
cookieImage.addEventListener('click', handleCookieClick)
btnAnotherCookie.addEventListener('click', handleRestartClick)
document.addEventListener('keydown', (event)=>{
    if(event.key == 'Enter' && atHomeScreen){
        console.log(atHomeScreen)
        handleCookieClick(event)
        atHomeScreen = luckScreen.classList.contains('hide')
    } else {
        console.log(atHomeScreen)
        handleRestartClick(event)
    }
})

// Functions
function getQuoteItem(array){
    const randomIndex = Math.floor(Math.random() * array.length)
    const item = array[randomIndex]
    return item
}


function handleCookieClick(event){
    event.preventDefault()    
    homeScreen.classList.add("hide")
    luckScreen.classList.remove("hide")

    quoteTicket
    .innerText = `${quoteElement
        .quote} (${quoteElement
            .author})`
    
}
    

function handleRestartClick(event){
    event.preventDefault()
    location.reload()
}

