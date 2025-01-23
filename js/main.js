$(document).ready(function(){
    $('#tel').mask('(00) 0 0000 - 0000');

    function validaNome (nomeCompleto) {
        const nomeArray = nomeCompleto.trim().split(' ');
        return nomeArray.length>=2 && nomeArray.every(nome => nome.length > 1)
    }

    $('#nome').on('keyup',function(){
        const nome = $(this).val();
        const nomeFeedback = $('#nome-feedback');

        if(validaNome(nome)) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            nomeFeedback.hide();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            nomeFeedback.show();
        }
    });

    function validaNumero (numeroCompleto) {
        const numSemMask = numeroCompleto.replace(/\D/g, '');
        return numSemMask.length === 11;
    }

    $('#tel').on('keyup', function(){
        const tel = $(this).val();
        const telFeedback = $('#telFeedback');

        if(validaNumero(tel)) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            telFeedback.hide();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            telFeedback.show();
        }
    })

    function validaEmail (email) {
        return email.includes('@');
    }

    $('#email').on('keyup', function(){
        const email = $(this).val(); 
        const emailFeedback = $('#emailFeedback'); 

        if (validaEmail(email)) {
            $(this).removeClass('is-invalid').addClass('is-valid');
            emailFeedback.hide();
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
            emailFeedback.show();
        }
    })

    $('form').on('submit',function(e){
        const nome = $('#nome').val();
        if(!validaNome(nome)) {
            e.preventDefault();
            $('#nome').addClass('is-invalid');
            $('nome-feedback').show();
        }
    })
    
});