var searchBoxInput;
var searchKey;
var searchMsg;
var searchResultNumber;
var searchButton;
var filtersList;
var products;
var shoppingCart;
var cancelButton;
var data;
var modals;
var shipping;
var secondForm;
var thidForm;
var finishBtn;

function clearLocalStorageRefresh(){
    localStorage.clear();
}

function lessProduct(id) {
    var productSelection = products.getById(id)[0];
    totalPrice = totalPrice - productSelection.price;
    shoppingCart.remove(id);
    
  }

function onSearchClick(){
    var searchBoxInputValue = searchBoxInput.val();
    var searchResult = products.search(searchBoxInputValue);
        if(searchBoxInputValue.trim() !== ''){
             setSearchKey(searchBoxInputValue,searchResult.length);
             products.buildList('productcards','results');     
        }else if(searchBoxInputValue.trim() === ''){
            getProductList();
            $(searchMsg.hide());
        }
}


function setSearchKey(key, resultLength) {
    $(searchResultNumber.empty());
    $(searchKey.empty());
    $(searchResultNumber.append(resultLength));
    $(searchKey.append(key));
    $(searchMsg.show());
}

function addToCart(id){
    var productSelection = products.getById(id)[0];
    shoppingCart.add(productSelection);
}


function emptyCart(){
        localStorage.clear();
        shoppingCart.cancel();
}

function getProductList(){
    
    var urlLocal = 'http://127.0.0.1:8080/data/data.json'
    
        $.ajax({
            method: "GET",
            url: urlLocal
        }).done(function(response){
            data = response;
            products.init(response);
            products.buildList('productcards','data');
        }).fail(function(error){
            console.log(error);
        })
    }


$(document).ready(()=> {
    
    clearLocalStorageRefresh();

    products = new Products();
    getProductList();
    
    searchMsg = $("#search-msg").hide();
    
    
    shoppingCart = new ShoppingCart();
    shoppingCart.populate();
    shoppingCart.buildCart('cart-box');
   
    buildModals();
    shipping = $('#shipping').hide();
    secondForm = $('#form2').hide();
    thidForm = $('#payment').hide();
    finishBtn = $('#finish').hide();

   
    shoppingCart.buildModalCart('modal-cart');
    
    getFiltersList();
    

    searchBoxInput = $('#search-box-input');
    searchKey = $("#search-key");
    searchResultNumber = $("#search-number");
    
    searchButton = $("#search-button").click(function(){
        onSearchClick(); 
    });
    $("#form-search").on('submit',function(event){
        event.preventDefault();
    })
    
    $( "input:radio[value=option2]" ).on( "click", function(){
        if($(":checked")){
            $('#shipping').show('slow');
        }
    });
    $( "input:radio[value=option1]" ).on( "click", function(){
        if($(":checked")){
            $('#shipping').hide('slow');
        }
    });

    $( "input:radio[value=credit]" ).on( "click", function(){
        if($(":checked")){
            $('#payment').show('slow');
            $('#next').hide();
            finishBtn.show();
        }
    });

    $( "input:radio[value=cash]" ).on( "click", function(){
        if($(":checked")){
            $('#payment').hide('slow');
            $('#next').hide();
            finishBtn.show();
        }
    });
    
    
})


