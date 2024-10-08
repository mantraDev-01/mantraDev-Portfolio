const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response)
})

xhr.open('GET', 'https://itea.dev');
xhr.send();