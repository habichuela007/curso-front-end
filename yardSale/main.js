const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    //mobileMenu.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCartshoppingCartContainer(){
    //pregunto si tiene la clase inactive aplicada (antes o despu[es del toggle])
    //const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    //const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    //pregunto si tiene la clase inactive aplicada (antes o despu[es del toggle])
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');    
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

// Listado quemado en código
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Screen',
    price: 550,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computador',
    price: 1820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Fin de listado quemado en código

/*for...shoppingCartContainer.in devuelve el INDICE del array
for(product in productList){
    console.log(product.name)
}*/

/* ejemplo de lo que estamos maquetando en el for
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>    
</div>
</div>
*/

//Meto el for en una funcion para reutilizarlo

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image}
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // clase para identificar la acción del producto creado por código
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('img','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts (productList);
// renderProducts (productList);
// renderProducts (productList);