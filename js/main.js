$(document).ready(function() {
  // Aplicar máscara ao campo de CPF
  $('#cpf').mask('000.000.000-00');

  // Aplicar máscara ao campo de telefone
  $('#telefone').mask('(00) 0000-0000');

  // Aplicar máscara ao campo de CEP
  $('#cep').mask('00000-000');
});