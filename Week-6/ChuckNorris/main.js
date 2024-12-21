let jokes = document.getElementById('jokes-container')

async function jokesData() { 
try {
    const responseAwait = await fetch("https://api.chucknorris.io/jokes/random")
    const dataAwait = await responseAwait.json()
    jokes.innerHTML = dataAwait.value
} catch (err){
    console.log(err)
}};