const imgContainer = document.querySelector('#img-container');

const images = {
    umfoto: 'img/1_foto.jpg', 
    umano: 'img/1_ano.jpg',          
    sorrindo: 'img/foto_sorrindo.jpg',   
    naescola: 'img/foto_escola.JPG',    
    anonovo: 'img/foto_ano_novo.jpg',
    dormindo: 'img/foto_dormindo.jpg',
    clube: 'img/foto_clube.jpg'
};

document.querySelector('#umfoto').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.umfoto})`;
});

document.querySelector('#umano').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.umano})`;
});

document.querySelector('#sorrindo').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.sorrindo})`;
});

document.querySelector('#naescola').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.naescola})`;
});

document.querySelector('#anonovo').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.anonovo})`;
});

document.querySelector('#dormindo').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.dormindo})`;
});

document.querySelector('#clube').addEventListener('click', () => {
    console.log('Botão "PRIMEIRA FOTO" clicado');
    imgContainer.style.backgroundImage = `url(${images.clube})`;
});
