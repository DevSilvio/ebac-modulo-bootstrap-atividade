$(document).ready(function(){
    $('#tel').mask('(00) 0 0000 - 0000');

    function validaNome (nomeCompleto) {
        const nomeArray = nomeCompleto.trim().split(' ');
        return nomeArray.length>=2 && nomeArray.every(nome => nome.length > 1)
    }

    $('#nome').on('keyup', function(){
        const nomeAtual = $(this).val();
        const filtrandoNome = nomeAtual.replace(/[^a-zA-Z\s]/g, "");
        $(this).val(filtrandoNome);
    })
    
    function validaNumero (numeroCompleto) {
        const numSemMask = numeroCompleto.replace(/\D/g, '');
        return numSemMask.length === 11;
    }

    function validaEmail (email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function validaCampo (campo, validacao, feedback) {
        const valor = $(campo).val();
        if(validacao(valor)){
            $(campo).removeClass('is-invalid').addClass('is-valid');
            $(feedback).hide();
            return true;
        } else {
            $(campo).removeClass('is-valid').addClass('is-invalid');
            $(feedback).show();
            return false;
        }
    }

    $('input').on('keyup', function(){
        const id = $(this).attr('id');
        if(id === 'nome') validaCampo ('#nome', validaNome, '#nomeFeedback');
        if(id === 'tel') validaCampo ('#tel', validaNumero, '#telFeedback');
        if(id === 'email') validaCampo ('#email', validaEmail, '#emailFeedback');
    })

    $('form').on('submit',function(e){
        let formEValido = true;

        formEValido = validaCampo('#nome', validaNome, '#nomeFeedback');
        formEValido = validaCampo('#tel', validaNumero, '#telFeedback');
        formEValido = validaCampo ('#email', validaEmail, '#emailFeedback');

        if(!formEValido) {
            e.preventDefault();
        }
    })
});
