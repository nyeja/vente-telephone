// Fonction pour rediriger vers la page Téléphones avec la marque sélectionnée
function goToPhones(brand) {
    window.location.href = "telephone.html#" + brand.toLowerCase();
}

// Données des téléphones par marque
const telephones = {
    "samsung": [
        { nom: "Samsung Galaxy S23", image: "img/galaxyS23.png", description: "Écran AMOLED, 120Hz, Snapdragon 8 Gen 2" },
        { nom: "Samsung Galaxy A54", image: "img/Samsung_Galaxy_A34.png", description: "Batterie 5000mAh, caméra 50MP" }
    ],
    "iphone": [
        { nom: "iPhone 14 Pro", image: "img/Apple_iPhone_14_.png", description: "Écran ProMotion, A16 Bionic, Dynamic Island" },
        { nom: "iPhone SE 2022", image: "img/Apple_iPhone_SE_.png", description: "Compact, Touch ID, A15 Bionic" }
    ],
    "xiaomi": [
        { nom: "Xiaomi 13 Pro", image: "img/Xiaomi_Redmi_Note_13.png", description: "Capteur Leica, Snapdragon 8 Gen 2" },
        { nom: "Xiaomi Redmi Note 12", image: "img/Xiaomi_Redmi_Note_12S.png", description: "Écran 120Hz, charge rapide 67W" }
    ],
    "infinix": [
        { nom: "Infinix Zero Ultra", image: "img/Infinix_Zero_Ultra.png", description: "Charge rapide 180W, écran incurvé" },
        { nom: "Infinix Hot 20", image: "img/Infinix Hot 20 128GB.jpg", description: "Batterie 5000mAh, écran 6.8 pouces" }
    ]
};

// Fonction pour afficher les téléphones de chaque marque
function displayPhones() {
    Object.keys(telephones).forEach(marque => {
        const productGrid = document.getElementById(`product-grid-${marque}`);
        if (!productGrid) return; // Vérifier si la section existe

        productGrid.innerHTML = ""; // Vider l'ancien contenu avant d'ajouter les nouveaux téléphones

        telephones[marque].forEach(telephone => {
            const card = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${telephone.image}" class="card-img-top" alt="${telephone.nom}" width="600" height="800">
                        <div class="card-body text-center">
                            <h5 class="card-title">${telephone.nom}</h5>
                            <p class="card-text">${telephone.description}</p>
                            <button class="btn btn-primary" onclick="showDetails('${telephone.nom}', '${telephone.image}', '${telephone.description}')">Détails</button>
                        </div>
                    </div>
                </div>
            `;
            productGrid.innerHTML += card;
        });
    });
}

// Fonction pour défiler vers la section correcte si une marque est spécifiée dans l'URL
function scrollToSection() {
    if (window.location.hash) {
        let section = document.querySelector(window.location.hash);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
}

// Fonction pour afficher les détails dans la modal
function showDetails(nom, image, description) {
    document.getElementById("modalTitle").innerText = nom;
    document.getElementById("modalImage").src = image;
    document.getElementById("modalDescription").innerText = description;
    var modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
}

// Exécuter les fonctions au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    displayPhones();
    scrollToSection();
});
