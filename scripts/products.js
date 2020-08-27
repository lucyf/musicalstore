
function Products() {

    this.data = [];
    this.results = [];

    this.init = function(data) {
        this.data = data;
    }

    this.getById = function(id) {
        return this.data.filter((product)=> product.id === id)
    }

    this.buildHtmlProduct = function(product) {
        return `
            <div id="products-list" class="card col-4 p-1 m-1"  style="width: 30rem;">
                <img src="${product.img}" class="card-img-top" alt="">
                <div class="card-body p-1">
                    <h5 class="card-title">${product.title}</h5>
                    <h6 class="price">$${product.price}</h6>
                    <p class="card-text">${product.description}</p>
                    <div class="row align-items-center justify-content-center m-2">
                    <a href="#" id="comprar-ya" class="btn btn-warning p-1 m-1 col" value="" onclick="addToCart('${product.id}')">COMPRAR YA</a>
                    </div>
                </div>
            </div>
        `
    }
    

    this.buildList = function(containerId, sourceData) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = '';

        this[sourceData].forEach(product => {
            html = html + this.buildHtmlProduct(product); 
        });
        
        container.innerHTML = html;
    }

    this.search = function(key) {
        this.results = [];
        this.data.forEach((product) => {
            if(product.title.toLowerCase().includes(key.toLowerCase())){
                this.results.push(product);
            }
        });
        return this.results;
    }

}

