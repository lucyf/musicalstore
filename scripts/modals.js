var checkedMailing = $('#send');

function buildModals(){
    $('#modal-box').html(buildHtmlModal1());
}
    
  function buildHtmlModal1(){
        return  `
        <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Check Out</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="reset()">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                    <div id="modal-cart" class="col-4">          
                    </div>
                    <div id="form"class="col">
                    ${buildForm()}
                    </div>
                    <div id="form2"class="col">
                    ${buildForm2()}
                    </div>
               </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="reset()">Cancelar</button>
              <button type="button" id="next" class="btn btn-primary" onclick="secondFormBuild()">Siguiente</button>
              <button type="button" id="finish" class="btn btn-primary" data-toggle="modal" data-dismiss="modal" aria-label="Close" data-target="#final" onclick="finalModal()">Finalizar</button>
            </div>
          </div>
        </div>
      </div>
    `
    }    

function buildModalCart(){
    $('#modal-cart').html(buildModalCartList());
}
function secondFormBuild(){
    $('#form').hide();
    secondForm.show('slow');
}

function reset(){
    $('#form').show();
    secondForm.hide();
    $('input').val('');
    shipping.hide();
    $('#next').show();
    finishBtn.hide();
}

function buildForm(){
    return `
    <form>
        <h5>Completa tus datos para la compra</h5>
        <div class="row">
        <div class="col">
            <input type="text" class=" reset form-control" placeholder="Nombre">
        </div>
        <div class="col">
            <input type="text" class=" reset form-control" placeholder="Apellido">
        </div>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input type="email" class="reset form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div> 
            <div class="form-group">
            <label for="formaDeRetiro">¿Cómo queres recibir o retirar tu compra?
            </label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                 <label class="form-check-label" for="gridRadios1">
                 Retiro por local
                 </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" id="send">
              <label class="form-check-label" for="gridRadios2">
                Envio a domicilio
              </label>
            </div>
            </div>
            <div id="shipping" class="">
                <div class="form-group">
                    <label for="inputAddress">Dirección</label>
                    <input type="text" class="reset form-control" id="inputAddress" placeholder="Calle, Altura, Piso y Departamento">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="inputCity">Ciudad</label>
                      <input type="text" class="reset form-control" id="inputCity">
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">Localidad</label>
                      <select id="inputState" class="form-control">
                        <option selected> </option>
                        <option>Cidudad Autonoma de Buenos Aires</option>
                        <option>GBA</option>
                      </select>
                    </div>
                    <div class="form-group col-md-"4>
                      <label for="inputZip">Código Postal</label>
                      <input type="text" class=" reset form-control" id="inputZip">
                    </div>
                  </div>
            </div>
            
        </div>
    </form>
    `
}

function buildForm2(){
    return `
    <div class="form-group">
    <label for="formaDeRetiro">Elige tu forma de pago...
    </label>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="cash" value="cash">
         <label class="form-check-label" for="cash">
         Efectivo al retirar
         </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="gridRadios" id="credit" value="credit">
      <label class="form-check-label" for="credit">
        Tarjeta de credito/debito
      </label>
    </div>
    <div  id="payment" class="form-group">
    <label for="inputAddress">Número Tarjeta crédito/débito</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Calle, Altura, Piso y Departamento">
    <label for="inputAddress">Fecha vencimiento</label>
    <div class="form-row">
    <div class="form-group col-3">
      <select class="form-control" id="month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
    </div>
    <div class="form-group col-3">
      <select class="form-control" id="year">
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
        <option>2027</option>
        <option>2028</option>
        <option>2029</option>
        <option>2030</option>
      </select>
    </div>
  </div>
  <div class="row">
  <div class="form-group col-4">
    <label for="inputCode">Cód.Seguridad</label>
    <input type="text" class="form-control" id="inputCode">
  </div>
  <div class="form-group col-4">
    <label for="inputDni">DNI</label>
    <input type="text" class="form-control" id="inputDni">
  </div>
    </div>
    </div>
    `
}

function buildFinalModal(){
  return `
  <div id="final" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Compra terminada</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body d-block justify-content-center">
        <h1>¡Felicitaciones por tu Compra!</h1>
        <p>En breve te llegará un mail con los detalles de tu compra</p>
      </div>
    </div>
  </div>
</div>
  `
}

function finalModal(){
  $('#final-sale').html(buildFinalModal());
}




