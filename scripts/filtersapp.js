var filtersCheckbox;
checkedFilters = [];
    


function buildFilters() {
    $('#filters-col').html(buildHtmlFilter()); 
}

buildHtmlFilter = function(filter) {
        return `
        <h1 class="ppalheadings">Filtros</h1>
        <section id="filters">
        <div id="brand">
            <h4 class="sndheadings">Marca</h4>
        <ul class="list">${buildBrand()}</ul>
        </div>
        <div id="keys">
            <h4 class="sndheadings">Teclas</h4>
        <ul class="list">${buildKeys()}</ul>
        </div>
        <div id="tunes">
            <h4 class="sndheadings">Tonos</h4>
        <ul class="list">${buildTunes()}</ul>
        </div>
        </section> 
        `
    }

     function buildBrand() {
        var html = '';
        filterBrand.forEach(filters => {
            html = html + `<li><input id="title" class="p-1 mr-2" type="checkbox" value="first_checkbox"><label class="filter-label" for="">${filters.name}</label> </li>`;
        });

        return html;
    }

    function buildKeys() {
        var html = '';
        filterKeys.forEach(filters => {
            html = html + `<li><input id="description"class="p-1 mr-2" type="checkbox" value="first_checkbox"><label class="filter-label" for="">${filters.number}</label> </li>`;
        });

        return html;
    }

    function buildTunes() {
        var html = '';
        filterTunes.forEach(filters => {
            html = html + `
            <li>
            <input id="description" class="p-1 mr-2" type="checkbox" value="first_checkbox">
            <label class="filter-label" for="">
            ${filters.tunes}
            </label> 
            </li>`;
        });

        return html;
    }
           
    function getFiltersList(){
        var urlLocal = 'http://127.0.0.1:8080/data/filters.json'
    
        $.ajax({
            method: "GET",
            url: urlLocal
        }).done(function(filters){
            filtersCheckbox = filters;
            filterBrand = filtersCheckbox[0].brand;
            filterKeys = filtersCheckbox[1].keys;
            filterTunes = filtersCheckbox[2].tunes;
            buildFilters();
            $( "input[type=checkbox]" ).on( "click", function(){
                checkedStatus();
                filterData();
                });
        }).fail(function(error){
            console.log(error);
        })
    }
   
    var checkedStatus = function() {
        checkedFilters = []; 
        var checkedBoxes = $("input[type=checkbox]:checked");
        for( var i = 0; i < checkedBoxes.length; i++){
        var filter = {}
        filter.key = checkedBoxes[i].id
        filter.value = checkedBoxes[i].nextElementSibling.textContent
        checkedFilters.push(filter);
        }
      }

    function filterData(){
        this.results = [];
        checkedFilters.forEach( selectedFilter => {
            var filtered = this.data.filter(product => product[selectedFilter.key].toLowerCase().includes(selectedFilter.value.toLowerCase()));
            filtered.forEach(filteredResult => {
                if ($.inArray(filteredResult, this.results) == -1) {
                    this.results.push(filteredResult);
                }
            })
        });
        if($("input[type=checkbox]:checked").length == 0){
            getProductList();
        }
        
        var container = $('#productcards');
        container.html("");
        var html = '';

        this.results.forEach(product => {
            html = html + products.buildHtmlProduct(product); 
        });
        
        container.append(html);
    }

    function lowerPriceFilter(){
         var cheaperPrice = data.sort(function (a,b){
              return a.price - b.price
          })
        var container = $('#productcards');
        container.html("");
        var html = '';
        
        cheaperPrice.forEach(product => {
            html = html + products.buildHtmlProduct(product); 
        });
        
        container.append(html);
    }
    
    function higherPriceFilter(){
        var higherPrice = data.sort(function (a,b){
             return b.price - a.price
         })
       var container = $('#productcards');
       container.html("");
       var html = '';
       
       higherPrice.forEach(product => {
           html = html + products.buildHtmlProduct(product); 
       });
       
       container.append(html);
   }

