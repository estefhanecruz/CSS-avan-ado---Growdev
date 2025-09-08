    const form = document.getElementById('meu-form');
    form.addEventListener('submit', event => {
        event.preventDefault()
        form.classList.add('was-validated')

      if (!form.checkValidity()) {
        alert('Campos inválidos. Por favor verifique')
      }else{
        const inputEmail = document.getElementById('email');
        const inputSenha = document.getElementById('senha');

        const usuario = {
            email: inputEmail.value,
            senha: inputSenha.value
        };
        console.log(usuario);

      }

      
    });
