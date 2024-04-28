const cartItemsDiv = document.getElementById('cart-items');

const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

productInCart() ;
totalCartPriceElement () ;

function decreaseQuantity(index) {
            if (cartItems[index].quantite > 1) {
    
                cartItems[index].quantite--;
    
                productInCart();
                totalCartPriceElement (); 
                
            }
        }
    
       
        function increaseQuantity(index) {
          
            cartItems[index].quantite++;
    
            productInCart();
            totalCartPriceElement ();
           
        }

        function totalCartPriceElement () {

            let totalPriceElement = document.getElementById('total-cart-price'); 
            let totalCartPrice = 0;
    
    
        for (let i = 0; i < cartItems.length; i++) {
        
            const totalPrice = cartItems[i];
           
            totalCartPrice += totalPrice .price * totalPrice .quantite;
        
            totalPriceElement.innerHTML = totalCartPrice ;
        }
        
        console.log( totalPriceElement.innerHTML);
    }
   


        function productInCart() {
            let productHtmlCart = "";
        
            for (let i = 0; i < cartItems.length; i++) {
                const Description = cartItems[i];
        
                productHtmlCart += `
                    <hr color="black" size="3" width="100%" />
                <div class="Description">
                     <div>
                        <div class="g-col-6 img-detail">
                            <div>
                                <img src="${Description.image}" class="img-fluid" alt="...">
                            </div>
                           
                        </div>
                        <div class="g-col-6 info-product">
                            <h2>${Description.name}</h2>
                            <div class="product-price">
                                ${Description.price} Fcfa
                            </div>
                          <div>
                              <div class="quantity-choice">
                              <span onclick="decreaseQuantity(${i})" class="btn-plusmoins">-</span>
                              <span class="input">${cartItems[i].quantite}</span>
                              <span onclick="increaseQuantity(${i})" class="btn-plusmoins">+</span>
                              </div>
                              <span class="inf-color"> Plusieurs couleurs disponibles en stock</span>
                          </div>
                        </div>
                    </div>
                        <div class="like">
                        <i class="fa-solid fa-heart fa-xl"></i>
                        </div>
                </div>
                    <hr color="black" size="3" width="100%" />
                `;
            }
        
           
            // const cartItemsDiv = document.getElementById("cart-items");
            cartItemsDiv.innerHTML = productHtmlCart;
           
        }
       
        
       
        
        
        const validateButton = document.getElementById('validate-button'); // Supposons que vous ayez un bouton avec cet ID
        validateButton.addEventListener('click', validateCart);        

function validateCart() {
   

    // Réinitialisez les données du panier dans sessionStorage
    sessionStorage.removeItem('cartItems');


    // Redirigez l'utilisateur vers une page de confirmation ou ailleurs
    alert("votre panier a été validé avec succès")
    window.location.href = 'Mercerie.html'; 

}


    




// for (let i = 0; i < cartItems.length; i++) {
    //     const itemDiv = document.createElement('div');
    //     itemDiv.classList.add('Description');
    
    //     const detaildiv = document.createElement('div');
    //     detaildiv.classList.add('img-detail')
        
    //     const divimg = document.createElement('div');
        
    //     const image = document.createElement('img');
    //     image.src = cartItems[i].image;
    //     image.classList.add('img-fluid')
    
    //     const  like =document.createElement('div');
    //     like.classList.add('like')
    
    //     const  likeIcon =document.createElement('i');
    //     likeIcon.classList.add('fa-solid','fa-heart', 'fa-xl')
    
    
    //     const  infoProduct =document.createElement('div');
    //     infoProduct.classList.add('info-product');
    
    //     const  nameElement=document.createElement('h2');
    //     nameElement.textContent = cartItems[i].name;
    
        
    //     const priceElement = document.createElement('div');
    //     priceElement.classList.add('product-price');
    //     priceElement.textContent = `Prix : ${cartItems[i].price} Fcfa`;
    //     const quantiteDiv = document.createElement('div');
    //     quantiteDiv.classList.add('product-price');
        
    //     updateQuantityDisplay();
    //     function decreaseQuantity(index) {
    //         if (cartItems[index].quantite > 1) {
    //             cartItems[index].quantite--;
    //             updateQuantityDisplay();
    //             totalCartPriceElement (); 
    //         }
    //     }
    //     function increaseQuantity(index) {
    //         cartItems[index].quantite++;
    //         updateQuantityDisplay();
    //         totalCartPriceElement ();
           
    //     }
    
    //     function updateQuantityDisplay() {
    //         quantiteDiv.innerHTML = `
    //             <div>
    //                 <label class="label">Quantité :</label>
    //                 <div class="quantity-choice">
    //                     <span onclick="decreaseQuantity(${i})" class="btn-plusmoins">-</span>
    //                     <span class="input">${cartItems[i].quantite}</span>
    //                     <span onclick="increaseQuantity(${i})" class="btn-plusmoins">+</span>
    //                 </div>
    //                 <span class="inf-color"> Plusieurs couleurs disponibles en stock</span>
    //             </div>
    //         `;
    //     }
 

    //      divimg.appendChild(image);

    //      detaildiv.appendChild(divimg);
    //      detaildiv.appendChild(like);
    //      like.appendChild(likeIcon);
        
    //      itemDiv.appendChild(detaildiv);
    //      itemDiv.appendChild(infoProduct);
    
    //      infoProduct.appendChild(nameElement);
    //      infoProduct.appendChild(priceElement);
    //      infoProduct.appendChild(quantiteDiv);
        
    //      cartItemsDiv.appendChild(itemDiv);  
    // }
    
    







    
          
       
  
  
