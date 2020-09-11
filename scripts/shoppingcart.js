var totalPrice = 0;

function ShoppingCart() {
    
    this.cart = [];

    this.populate = function() {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    this.add = function(item) {
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        totalPrice = totalPrice + item.price;
        this.buildCart('cart-box');
        this.buildModalCart('modal-cart');
        
    }
    
    this.get = function() {
        return this.cart;
    }

    this.cancel = function(item){
        this.cart.splice(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        totalPrice = 0;
        this.buildCart('cart-box');
        
    }

    this.remove = function(id) {
        var index = this.cart.findIndex( x => x.id === id);
        this.cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        if(totalPrice <= 0){
            totalPrice = 0;
        }
        this.buildCart('cart-box');
      
    }

    this.buildList = function() {
        var html = '';
        this.cart.forEach(product => {
            html = html + ` <div class="row align-items-center">
                            <li class="col p-0 "><strong>${ product.title }</strong></li>
                            <li class="col p-0 ">$${ product.price }</li>
                            <li><button type="button" class="close" aria-label="Close" onclick="lessProduct('${product.id}')">
                            <span aria-hidden="true">&times;</span>
                          </button>
                            </div>
            `;
        });
        return html;
    }

    this.buildCart = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
            <div class="cart justify-content-center">
                <h3 id="cartHeading" class="ppalheadings text-center p-1 m-1">Carrito de Compras (${this.cart.length})</h3>
                <div id="shop-selection" class="row justify-content-center">
                <ul class= "list p-0">
                     ${ this.buildList()}
                </ul>
                <div id="msg-empty-cart">
                <p class="text-center msg-empty-cart ">Aún no tienes nada cargado en el carrito. Selecciona algún producto.</p>
                </div>
                <div id="price" class="row m-3 p-0 align-items-center justify-content-center">
                <li class="list p-1 m-1"><h6 class="cart-total-price"><strong>Total: </strong></h3></li>
                <li class=" list p-1"><h6 id="total-price" class="cart-total-price">$${totalPrice}</h6></li>
                </div>
                <div id="cartButtons" class="cartButtons align-items-center justify-content-center">
                <button id="cancel-btn" type="button" class="btn btn-link cancel p-1 m-1" value="" onclick="emptyCart()">Cancelar</button>
                <button id="comprar" type="button" class="btn btn-warning p-1 m-1" data-toggle="modal" data-target="#staticBackdrop">COMPRAR</button>
                </div>
            </div>   
        `

        container.innerHTML = html;
    }

    this.buildListModal = function() {
        var html = '';
        this.cart.forEach(product => {
            html = html + ` 
            <ul class="row align-items-top list">
            <li class="col modal-item-list p-1 m-1"><strong>${ product.title }</strong></li>
            <li class="col modal-item-list p-1 m-1">$${ product.price }</li>
            </ul>
                        `;
        });
        return html;
    }

    this.buildModalCart = function(containerId){
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
        <h5><strong>Tu Compra</strong></h5>
        <div class="justify-content-center">
        <div id="shop-selection" class="align-items-left">
            ${ this.buildListModal()}
        </div>    
        <div id="modal-price" class="row m-3 p-0 align-items-center justify-content-center">
             <li class=" list p-1 m-1"><h6><strong>Total: </strong></h3></li>
             <li class=" list p-1"><h6 id="total-price-modal">$${totalPrice}</h6></li>
        </div>
        </div>
        `
        container.innerHTML = html;
    }
    
}

