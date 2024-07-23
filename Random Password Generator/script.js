const passwordbox = document.querySelector("#pass");  // input box
const length = 15;  //customize your password length

//store all the possible chars which will be used in a password
const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol ="!~@#$%^&*()_+-={}[]|\<>";

//store it in a single variable
const allchars = uppercase +lowercase +number + symbol;


//function to generate a particular length of random password
function generate_password(){
  let password ="";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
   
  while(password.length < length)
  {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  passwordbox.value = password;
}


//function to copy the password which is generated in input box
 function copypassword(){
  passwordbox.select();
  document.execCommand("copy");
 }
