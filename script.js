const API_URL = "https://script.google.com/macros/s/AKfycbwIvuLhJhz546rHzGEDS7btFFcbGD8jLhGmCo4CXpUFhc-9s6mTaEWxn1Jt9tsbcdI5DQ/exec";


function envoyer() {
const nom = document.getElementById('nom').value;
const jour = document.getElementById('jour').value;


fetch(API_URL, {
method: 'POST',
body: JSON.stringify({ nom, jour })
}).then(() => alert("Demande envoyée"));
}