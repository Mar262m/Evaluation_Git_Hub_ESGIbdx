// ===== Validation du formulaire d'inscription (Fonctionnalité C) =====

const inscriptionForm = document.getElementById('inscription-form');

// Un seul « @ », pas d'espace, un domaine avec au moins un point.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldNames = ['nom', 'prenom', 'email', 'evenement'];

// Renvoie le message d'erreur d'un champ, ou une chaîne vide s'il est valide.
function getErrorMessage(fieldName, value) {
    const cleanValue = value.trim();

    if (cleanValue === '') {
        return fieldName === 'evenement'
            ? 'Veuillez sélectionner un événement.'
            : 'Ce champ est obligatoire.';
    }

    if (fieldName === 'email' && !emailPattern.test(cleanValue)) {
        return 'Veuillez saisir une adresse email valide (exemple : prenom.nom@domaine.fr).';
    }

    return '';
}

// Affiche (ou efface) l'erreur d'un champ. Renvoie true si le champ est valide.
function validateField(fieldName) {
    const field = inscriptionForm.elements[fieldName];
    const errorZone = document.getElementById(`${fieldName}-error`);
    const message = getErrorMessage(fieldName, field.value);

    errorZone.textContent = message;
    field.setAttribute('aria-invalid', message === '' ? 'false' : 'true');

    return message === '';
}

// Valide tous les champs, sans s'arrêter au premier pour afficher toutes les erreurs.
function validateForm() {
    const invalidFields = fieldNames.filter((fieldName) => !validateField(fieldName));

    if (invalidFields.length > 0) {
        inscriptionForm.elements[invalidFields[0]].focus();
    }

    return invalidFields.length === 0;
}

inscriptionForm.addEventListener('submit', (event) => {
    // La soumission d'un formulaire invalide est bloquée.
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Une fois un champ corrigé, son erreur disparaît sans attendre une nouvelle soumission.
fieldNames.forEach((fieldName) => {
    const field = inscriptionForm.elements[fieldName];
    const eventName = field.tagName === 'SELECT' ? 'change' : 'input';

    field.addEventListener(eventName, () => {
        if (field.getAttribute('aria-invalid') === 'true') {
            validateField(fieldName);
        }
    });
});
