$(document).ready(function() {
  $('#tarefas').submit(function(e) {
      e.preventDefault();
      var tarefaNome = $('#tarefa-input').val();
      if (tarefaNome.trim() !== '') {
          var listaItem = $('<li>').text(tarefaNome);
          $('#lista').append(listaItem);
          $('#tarefa-input').val('');
      }
  });

  $('#lista').on('click', 'li', function() {
      $(this).toggleClass('completo');
  });
});
