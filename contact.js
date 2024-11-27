// contact.js
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
console.log('okkkkkkkkkkkkkkkkkk');

document.getElementById('contactfirebase').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const pname = document.getElementById('pname').value;
    const adress = document.getElementById('adress').value;
    const telephone = document.getElementById('telephone').value;
    const objet = document.getElementById('object').value;
    const message = document.getElementById('message').value;
    console.log("name:", name, "pname:", pname, "adress:", adress,"telephone:", telephone, "objet:", objet ,"message:", message);
    try {
        // Ajouter un document à la collection "contacts"
        const docRef = await addDoc(collection(window.db, "contact"), {
            name: name,
            pname: pname,
            adress: adress,
            telephone: telephone,
            objet: objet,
            message: message,
            timestamp: new Date() // Ajoute un horodatage
        });
        console.log("Document écrit avec ID: ", docRef.id);
        
        alert("Votre message a été envoyé avec succès !");
    } catch (e) {
        console.error("Erreur lors de l'ajout du document: ", e);
        alert("Une erreur s'est produite lors de l'envoi de votre message : " + e.message);
    }

    // Réinitialiser le formulaire
    document.getElementById('contactfirebase').reset();
});