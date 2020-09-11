function buildContactPage(){
    return `
    <div class="row m-md-2 m-xl-2 justify-content-center">
      <div class="col-6 col-md-5 col-xl-5 justify-content-center">
        <div id="paragraph" class="align-items-center">
          <img id="contact-logo" class="m-3" src="images/logo2.png" alt="brand logo" width="80%">
          <p id="contact-text" class="text-center m-3">Teorema Musical es una tienda de instrumentos musicales. Asesoramos a nuestros clientes para comprar el instrumento adecuado segun la etapa de aprendizaje y nivel musical en la que se encuentre. 
          <br>Escribinos y contanos en que te podemos ayudar.</p>
        </div>
      </div>
      <div class="col-6 col-md-5 col-xl-5">
        <form action="">
          <div class="form-group">
            <label for="name">Nombre y Apellido</label>
            <input type="text" class="form-control form-control-sm mb-2" placeholder="" id="name">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control form-control-sm mb-2" id="inputEmail">
            <label for="textarea">Escribinos tu consulta</label>
            <textarea class="form-control mb-2" id="textarea" rows="3"></textarea>
          </div>
          <div class="">
            <button type="submit" class="btn btn-info" onclick="alertSubmitMsg()">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    `
}

function alertSubmitMsg(){
    alert('Tu mensaje ya fue enviado. Dentro de 48hs estaremos respondiendo tus consultas.');
}