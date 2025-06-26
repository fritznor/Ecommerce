const translations = {
    ht: {
        home: "Akèy",
        products: "Pwodui",
        cart: "Panier",
        contact: "Kontak",
        welcome: "Byenveni sou sit Ecommerce nou an!",
        slogan: "Pi bon pwodwi yo, pi bon pri yo.",
        our_products: "Pwodui nou yo",
        product1: "Pwodui 1",
        product1_desc: "Deskripsyon kout pou pwodwi 1.",
        add_to_cart: "Ajoute nan panier",
        contact_us: "Kontakte nou",
        name: "Non",
        email: "Imèl",
        message: "Mesaj",
        send: "Voye",
        footer: "© 2024 Ecommerce. Tout dwa rezève."
    },
    fr: {
        home: "Accueil",
        products: "Produits",
        cart: "Panier",
        contact: "Contact",
        welcome: "Bienvenue sur notre site Ecommerce!",
        slogan: "Les meilleurs produits, les meilleurs prix.",
        our_products: "Nos produits",
        product1: "Produit 1",
        product1_desc: "Courte description pour le produit 1.",
        add_to_cart: "Ajouter au panier",
        contact_us: "Contactez-nous",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        footer: "© 2024 Ecommerce. Tous droits réservés."
    },
    en: {
        home: "Home",
        products: "Products",
        cart: "Cart",
        contact: "Contact",
        welcome: "Welcome to our Ecommerce site!",
        slogan: "Best products, best prices.",
        our_products: "Our Products",
        product1: "Product 1",
        product1_desc: "Short description for product 1.",
        add_to_cart: "Add to cart",
        contact_us: "Contact us",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        footer: "© 2024 Ecommerce. All rights reserved."
    }
};

document.getElementById('lang-select').addEventListener('change', function() {
    const lang = this.value;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
});
