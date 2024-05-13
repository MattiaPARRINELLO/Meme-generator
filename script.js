let grid = document.getElementById('grid')
let dataa =""
fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => {
        // Process the data here
        console.log(data);
        dataa = data
        data.data.memes.forEach(meme => {
            let memediv = document.createElement('div')
            memediv.classList.add('meme')
            memediv.innerHTML = `
                <img src="${meme.url}" alt="${meme.name}">
                <h2>${meme.name}</h2>
            `
            memediv.addEventListener('click', () => {
                window.location.href = `imgeditor/index.html?meme=${meme.id}`
            })
            grid.appendChild(memediv)
        })

        
    })
    .catch(error => {
        // Handle any errors here
        console.error(error);
    });