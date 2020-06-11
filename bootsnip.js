$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    $("#Enviar").on('click',function () {
    	var choice = $("label.btn.active").find('input:radio').val();
    	$('#loadbar').show();
        $('#quiz').fadeOut();
        $('#Enviar').fadeOut();
    	setTimeout(function(){
           $( "#answer" ).html(  $(this).checking(choice) );      
            $('#quiz').show();
            $('#loadbar').fadeOut();
            $('#Enviar').show();
    	}, 1500);
    });

    $ans = 3; //Posição da resposta correta 

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRET';
        else 
            return 'CORRECT';
    }; 
});	
