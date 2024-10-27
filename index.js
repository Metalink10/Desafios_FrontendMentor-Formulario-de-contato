const form = document.getElementById('all');

const inputNome = document.getElementById('nome');
const labelNome = document.getElementById('labelNome');
const error = document.getElementById('mensagemError');

const secundName = document.getElementById('ultimo');
const msgError = document.getElementById('errorSecund');

const inputEmail = document.getElementById('emailAddress');
const msgEmail = document.getElementById('errorEmail');

const selecionarConsulta = document.getElementById('escolha');
const msgConsulta = document.getElementById('errorSelecione');

const msgquery = document.getElementById('suporte');

const textMsg = document.getElementById('textArea')
const textError = document.getElementById('riqueridText');

const checkAutorizacao = document.getElementById('checkAutorizacao');
const autorizacao = document.getElementById('autorizacao');

const enviar = document.getElementById('assent');

form.addEventListener('submit', (event) => {
   event.preventDefault();
})


function inputValid() {

   if(inputNome && secundName && selecionarConsulta && checkAutorizacao &&textMsg && emailAddress.value === ''){
      error.setAttribute('style',  'color: red');
      error.innerText = 'This field is required';
      inputNome.style.border = '2px solid red';

      msgError.setAttribute('style', 'color: red');
      msgError.innerText = 'This field is required';
      secundName.style.border = '2px solid red';

      errorEmail.setAttribute('style',  'color: red');
      errorEmail.innerText = 'Please enter a email address valid';
      emailAddress.style.border = '2px solid red';

      msgConsulta.setAttribute('style',  'color: red');
      msgConsulta.innerHTML =  'Please enter a email address valid';

      textError.setAttribute('style',  'color: red');
      textError.innerHTML = 'This is riquerid';
      textMsg.style.border = '2px solid red';

      autorizacao.setAttribute('style', 'color: red');
      autorizacao.innerHTML = 'To submit this form, please consent to bing contact';

   }else {
         form.addEventListener('click', () => {
            enviar.style.display = 'block';
         })
      
   }

  
}


