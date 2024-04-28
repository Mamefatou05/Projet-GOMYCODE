const products = [

    { id: 1, name: 'Aiguille Circulaire', price: 600, quantite:1, image :"mercerie/aiguille/aiguille Circulaire.jpg"}, 
    { id: 2, name: 'Aiguille en Plastique', price: 500 , quantite:1,image:"mercerie/aiguille/Aiguille plastique.webp" },
    { id: 3, name: 'Aiguille Argenté', price: 900 ,image: "mercerie/aiguille/aiguille argenté.webp" },
    { id: 4, name: 'Mérinos', price: 600, image: "" },
    { id: 5, name: 'Alizé Coton', price: 500, image: "" },
    // { id: 6, name: 'Katia MarathonS', price: 900, image: "" },
    // { id: 1, name: 'Aiguille Circulaire', price: 600, quantite:1, image :"mercerie/aiguille/aiguille Circulaire.jpg"}, 
    // { id: 3, name: 'Aiguille Argenté', price: 900 ,image: "mercerie/aiguille/aiguille argenté.webp" },
    // { id: 4, name: 'Mérinos', price: 600, image: "" },
    // { id: 5, name: 'Alizé Coton', price: 500, image: "" },
    // { id: 6, name: 'Katia MarathonS', price: 900, image: "" },
    // { id: 2, name: 'Aiguille en Plastique', price: 500 , quantite:1,image:"mercerie/aiguille/Aiguille plastique.webp" },
    // { id: 1, name: 'Aiguille Circulaire', price: 600, quantite:1, image :"mercerie/aiguille/aiguille Circulaire.jpg"}, 
    // { id: 3, name: 'Aiguille Argenté', price: 900 ,image: "mercerie/aiguille/aiguille argenté.webp" },
    // { id: 4, name: 'Mérinos', price: 600, image: "" },
    // { id: 5, name: 'Alizé Coton', price: 500, image: "" },
    // { id: 6, name: 'Katia MarathonS', price: 900, image: "" }
];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const cartItemsDiv = document.getElementById('cart-items');
// console.log(cartItemsDiv);

for(let i=0 ;i<addToCartButtons.length; i++)

    addToCartButtons[i].addEventListener('click',addToCart)
    function addToCart(event) {
        // recupére la valeur du data-cart que j'ai sou forme d'id sur le fichier html qui contient tous mes produits que je pourais ajouter au panier 
        const productId = parseInt(event.target.getAttribute('data-product'));
        //recupérer les id sur mes products et verifier si on a les mm valeurs d'id
        const selectedProduct = products.find(product => product.id === productId);
    // Ajoutez le produit au tableau des éléments du panier dans sessionStorage
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        
        // Vérifier si le produit est déjà dans le panier en comparant les ids (entre les produits qui sont déja le panier et les produits que je veux ajouter)
        const productInCart = cartItems.find(item => item.id === selectedProduct.id);
    // si le produit n'existe pas dans le panier on l'ajoute 
        if (!productInCart) {
            //ajouter le produit en question dans le tableau que je dois enregistrer dans le local strorage
            cartItems.push(selectedProduct);
            //ett maintenant ajouter le tableau qui contient les produits dans le local storage
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
            // sinon on envoie une alerte en disant que ce produit a été déjà ajouter 
            alert("Ce produit est déjà ajouté à votre panier.");
        }
    
        // Redirigez l'utilisateur vers la page du panier , vous pouvez chager aussi la redirection en changeant juste le nom du fichier
        window.location.href = 'panier.html';


       
   
        
    }
    


   












