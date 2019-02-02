jQuery(document).ready(function($) {
  $('.enviar').click(function(e){
    e.preventDefault();
    var txtnombres =$("#name-id").val();
    var txtmail = $("#email-id").val();
    var txtasunto = $("#subject-id").val();
    var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var txtmensaje=$("#message-id").val();
    if (txtnombres == "") {
          $("#name-id").focus();
          $(".mensaje").slideDown(300);
          $(".mensaje").text("Ingrese sus nombres");
          return false;
      }else if (txtasunto == "") {
            $("#subject-id").focus();
            $(".mensaje").slideDown(300);
            $(".mensaje").text("Ingrese el asunto");
            return false;
        }else if(txtmail == "" || !validacion_email.test(txtmail)){
          $("#email-id").focus();
          $(".mensaje").slideDown(300);
          $(".mensaje").text("Ingrese su correo correctamente");
          return false;
      }else if(txtmensaje == ""){
          $("#message-id").focus();
          $(".mensaje").slideDown(300);
          $(".mensaje").text("Ingrese su mensaje");
          return false;
      }else{

    var datos= 'txtnombres='+txtnombres+'&txtmail='+txtmail+'&txtasunto='+txtasunto+'&txtmensaje='+txtmensaje;
    $(".mensaje").slideDown(300);
    $.ajax({
      type: "POST",
      url: "form.php",
      data:datos,
      success: function(){
        $(".mensaje").text("Mensaje Enviado");
        $("input").val(" ");
      },
      error: function(){
        $(".mensaje").text("No se pudo enviar el mensaje");
      }
    });
    return false;}
  });
return false;});
