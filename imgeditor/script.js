const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const paramValue = params.get('meme');
const data = {
    meme: paramValue
};


const texts = {
    text0: document.getElementById('text0'),
    text1: document.getElementById('text1')
}
const btn = document.getElementById('generate')
const img = document.getElementById('meme')
let username = ""
let password = ""

    



btn.addEventListener('click', () => {
    generateMeme(data.meme, texts.text0.value, texts.text1.value)
})


const generateMeme = (template_id, text0, text1) => {
    img.src = "https://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"
    if (data.meme) {
    fetch(`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&text2=text3&username=${username}&password=${password}`)
    .then(response => response.json())
    .then(responseData => {
        // Process the data here
        console.log(responseData)
        img.src = responseData.data.url

    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    
    })
}
else {
    alert('An error occured')
}
}







const fetchUserData = async () => {
    await fetch('../imgFLipCred.json')
    .then(response => response.json())
    .then(jsonData => {
        // Process the JSON data here
        console.log(jsonData);
        username = jsonData.username
        password = jsonData.password
        generateMeme(data.meme, "Text1", "Text2")
        
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    })
}


fetchUserData()