// ===== Formulaire d'inscription (Fonctionnalité C) : validation et soumission simulée =====

const inscriptionForm = document.getElementById('inscription-form');
const inscriptionConfirmation = document.getElementById('inscription-confirmation');

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

// Efface les erreurs affichées (utilisé après une inscription réussie).
function clearErrors() {
    fieldNames.forEach((fieldName) => {
        document.getElementById(`${fieldName}-error`).textContent = '';
        inscriptionForm.elements[fieldName].removeAttribute('aria-invalid');
    });
}

inscriptionForm.addEventListener('submit', (event) => {
    // Pas de rechargement de la page : il n'y a ni backend ni stockage.
    event.preventDefault();

    // La soumission d'un formulaire invalide est bloquée.
    if (!validateForm()) {
        return;
    }

    // Les valeurs ne servent qu'à construire la confirmation : elles ne sont
    // ni envoyées (pas de fetch/XHR) ni conservées (pas de localStorage/cookie).
    const { prenom, nom, email } = Object.fromEntries(new FormData(inscriptionForm));
    const eventLabel = inscriptionForm.elements.evenement.selectedOptions[0].textContent;

    inscriptionForm.reset();
    clearErrors();

    // textContent (et non innerHTML) : les valeurs saisies ne sont jamais interprétées comme du HTML.
    inscriptionConfirmation.textContent =
        `Merci ${prenom.trim()} ${nom.trim()} ! Votre inscription à « ${eventLabel} » est confirmée ` +
        `(simulation, confirmation attendue à ${email.trim()}). ` +
        'Aucune donnée n\'a été transmise ni enregistrée.';
    inscriptionConfirmation.hidden = false;
    inscriptionConfirmation.focus();
});

// Dès que l'on modifie à nouveau le formulaire, l'ancienne confirmation disparaît.
inscriptionForm.addEventListener('input', () => {
    inscriptionConfirmation.hidden = true;
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
