/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';*/
/* Les deux fonctions que vous avez utilisées ci-dessus font partie de l'API Document Object Model (DOM), qui vous permet de manipuler les documents. */
/* Declaration de variable : let myvariable; */
let myImage = document.querySelector('img');
myImage.addEventListener('click', function (){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/imagetest.jpg'){
        myImage.setAttribute('src','images/image2test.jpg');
    } else {
        myImage.setAttribute('src', 'images/imagetest.jpg');
    }
})
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName () {
    let myName = prompt("Veuillez saisir votre nom."); /* prompt() affiche une boite de dialogue */
    localStorage.setItem('nom', myName); /* localstorage : api qui permet de stocker des données dans le navigateur pour pouvoir les reutiliser ulterieurement */
    /* setItem stocke myName dans nom */
    myHeading.textContent = 'Chrome est cool, ' + myName;
}
if (!localStorage.getItem('nom')){
    setUserName();
} else { 
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Chrome est cool, ' + storedName;
}
myButton.addEventListener('click', function() {
    setUserName();
});