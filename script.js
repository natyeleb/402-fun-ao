let compras = ["danone","goiaba","kiwi"]
    console.log(compras);

compras.push("batata")
console.log(compras)









// function subtrair(num1, num2){
//     console.log(num1 - num2);
// }
// subtrair(99,1);
// subtrair(56,41);
// subtrair(62,2);


// function somar (num1 ,num2){
//     console.log(num1 + num2);
// }
// somar(25,30);
// somar(64,97);
// somar(28,67);



// let inputEmail = document.querySelector("#inputEmail");
// let inputSenha = document.querySelector("#inputSenha");
// let resposta = document.querySelector("p");
// let botao = document.querySelector("button");

// function validarLogin(){
//     if(inputEmail.value == "lmelo" && inputSenha.value == "123"){
//         resposta.innerHTML = "Login Aprovado";
//         resposta.style.color = "blue";
//         resposta.style.border = "2px blue solid";
//     }
//     else{
//         resposta.innerHTML = "Login Inválido";
//         resposta.style.color = "red";
//         resposta.style.border = "2px red dotted";
//     }
// }

// botao.onclick = validarLogin;

let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");
let listaNomes =[
    {email:"natyelebertolani","1234"},
    {email:"douglasklemes",senha:"1236"},
]

function validarLogin(){
for (let login of listaNomes){
    if(login.email == imputemail.value && login.senha == imputsenha.value)
     resposta.innerHTML = "Login Aprovado";
     resposta.style.color = "blue";
     resposta.style.border = "2px blue solid";
 }
        else{
            resposta.innerHTML = "Login Inválido";
            resposta.style.color = "red";
            resposta.style.border = "2px red dotted";
         }
        }