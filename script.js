document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    // Ajout de la transition pour le changement de couleur
    navbar.style.transition = "background-color 0.5s ease-in-out";

    // Fonction pour changer la couleur de fond en fonction de l'onglet actif
    function updateNavbarColor() {
        const activeLink = document.querySelector(".navbar-nav .nav-link.active");

        if (activeLink) {
            if (activeLink.textContent.includes("ACCUEIL")) {
                navbar.style.backgroundColor = "#007bff"; // Bleu pour l'accueil
            } else if (activeLink.textContent.includes("TÉLÉPHONES")) {
                navbar.style.backgroundColor = "#28a745"; // Vert pour téléphones
            } else if (activeLink.textContent.includes("PROMOTIONS")) {
                navbar.style.backgroundColor = "#ffc107"; // Jaune pour promotions
            } else if (activeLink.textContent.includes("ACCESSOIRES")) {
                navbar.style.backgroundColor = "#dc3545"; // Rouge pour accessoires
            }
        }
    }

    // Appliquer la couleur au chargement de la page
    updateNavbarColor();

    // Ajouter un écouteur d'événements pour détecter les clics sur les liens de la navbar
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelectorAll(".navbar-nav .nav-link").forEach(el => el.classList.remove("active"));
            this.classList.add("active");
            updateNavbarColor();
        });
    });

    // Liste des produits
    const products = [
        { name: "iPhone", image: "phone.jpg", description: "Écran OLED, puce A15 Bionic, 5G.", brand: "iPhone" },
        { name: "Samsung", image: "phone.jpg", description: "Écran AMOLED, Snapdragon 888, 5G.", brand: "Samsung" },
        { name: "Google Pixel", image: "phone.jpg", description: "Écran OLED, processeur Tensor, 5G.", brand: "Google" },
        { name: "OnePlus", image: "phone.jpg", description: "Écran 120 Hz, Snapdragon 888, charge rapide.", brand: "OnePlus" },
        { name: "Xiaomi Mi", image: "phone.jpg", description: "Écran AMOLED, Snapdragon 888, 108 MP.", brand: "Xiaomi" },
        { name: "Sony Xperia", image: "phone.jpg", description: "Écran OLED, Snapdragon 888, optique Zeiss.", brand: "Sony" }
    ];

    

    const productGrid = document.getElementById("product-grid");
    let cartCount = 0;

    // Fonction pour afficher les produits
    function displayProducts(products) {
        productGrid.innerHTML = ""; // Vider la grille avant de l'afficher

        products.forEach((product, index) => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-4");
            productCard.innerHTML = `
                <div class="card p-3">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-info text-white btn-details" data-index="${index}">Plus</button>
                        </div>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Attacher les événements après avoir inséré les produits dans le DOM
        attachEventListeners();
    }

    // Liste des produits samsung
    const productssamsungs = [
        { name: "Samsung", image: "phone.jpg", description: "Écran OLED, puce A15 Bionic, 5G.", brand: "iPhone" },
        { name: "Samsung", image: "phone.jpg", description: "Écran AMOLED, Snapdragon 888, 5G.", brand: "Samsung" },
        { name: "Samsung Samsung", image: "phone.jpg", description: "Écran OLED, processeur Tensor, 5G.", brand: "Google" },
        { name: "Samsung", image: "phone.jpg", description: "Écran 120 Hz, Snapdragon 888, charge rapide.", brand: "OnePlus" },
        { name: "Samsung Samsung", image: "phone.jpg", description: "Écran AMOLED, Snapdragon 888, 108 MP.", brand: "Xiaomi" },
        { name: "Samsung Samsung", image: "phone.jpg", description: "Écran OLED, Snapdragon 888, optique Zeiss.", brand: "Sony" }
    ];
    const productGridsamsung = document.getElementById("product-grid-samsung");
    console.log("Élément productGridsamsung :", productGridsamsung);
    
    console.log("manoa");
    // Fonction pour afficher les produits samsung
        console.log("Affichage des produits Samsung...");
        function displaySamsungProducts(productssamsungs) {
            productGridsamsung.innerHTML = ""; // Vider la grille avant de l'afficher
            console.log("Ajout du produit ");
            productssamsungs.forEach((productssamsung, index) => {
                console.log("Ajout du produit :", productssamsung);
                const productCardS = document.createElement("div");
                productCardS.classList.add("col-md-4");
                productCardS.innerHTML = `
                    <div class="card p-3">
                        <img src="${productssamsung.image}" class="card-img-top" alt="${productssamsung.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${productssamsung.name}</h5>
                            <p class="card-text">${productssamsung.description}</p>
                            <div class="d-grid gap-2">
                                <button class="btn btn-info text-white btn-details" data-index="${index}">Plus</button>
                            </div>
                        </div>
                    </div>
                `;
                productGridsamsung.appendChild(productCardS);
            });
        
            attachEventListeners();
        }
        
    console.log("bonjour");



    // Fonction pour attacher les événements aux boutons
    // function attachEventListeners() {
    //     document.querySelectorAll(".btn-details").forEach(button => {
    //         button.addEventListener("click", function() {
    //             const index = this.getAttribute("data-index");
    //             document.getElementById("modalTitle").textContent = products[index].name;
    //             document.getElementById("modalImage").src = products[index].image;
    //             document.getElementById("modalDescription").textContent = products[index].description;
    //             new bootstrap.Modal(document.getElementById("productModal")).show();
    //         });
    //     });

    //     document.querySelectorAll(".btn-add").forEach(button => {
    //         button.addEventListener("click", function() {
    //             cartCount++;
    //             document.getElementById("cart-count").textContent = cartCount;
    //             showToast("Produit ajouté au panier !");
    //         });
    //     });
    // }

    // Fonction pour afficher une notification temporaire
    function showToast(message) {
        const toastContainer = document.getElementById("toast-container");
        if (!toastContainer) return; // Vérifier si le conteneur existe
        const toast = document.createElement("div");
        toast.classList.add("alert", "alert-success", "fade", "show");
        toast.innerHTML = message;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }

    
    
    // Charger les produits au démarrage
    displayProducts(products);
    displaySamsungProducts(productssamsungs);
});
