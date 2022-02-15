document.getElementById('login-submit').addEventListener('click', function(){
  
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
 
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  if (userEmail == 'arifulislam@gmail.com' && userPassword == 'arif4332'){
   window.location.href = 'js/banking.html';
  }
  
});