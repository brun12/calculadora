// script por Cel.Lep Tech

function calcular(){
  var operacao = document.getElementById('operacao').value
  
  var num1 = document.getElementById('num1').value 
  var num2 = document.getElementById('num2').value 

  // console.log(num1)
  // console.log(num2)
  // console.log(operacao)

  if(num1 == null || num1 == ''){
    alert('Favor digitar um número válido para a operação')
    document.getElementById('num1').focus()
    return false
  }
  if(num2 == null || num2 == ''){
    alert('Favor digitar um número válido para a operação')
    document.getElementById('num2').focus()
    return false
  }

  var resultado = null 

  // conversão de string para number
  num1 = Number(num1)
  num2 = Number(num2)

  if(operacao == '1'){ // soma
    resultado = num1 + num2
  } else if(operacao == '2'){ // subtração
    resultado = num1 - num2
  } else if(operacao == '3'){ // multiplicação
    resultado = num1 * num2
  } else if(operacao == '4'){ // divisão
    resultado = num1 / num2
  } else {
    alert('Selecione uma operação')
    return false
  }

  document.getElementById('resultado').value = resultado



}