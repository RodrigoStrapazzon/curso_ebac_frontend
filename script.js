$(document).ready(function(){
    $("#form-tarefa").submit(function(e){
      e.preventDefault();
      var nomeTarefa = $("#nome-tarefa").val();
      $("#lista-tarefas").append("<li>" + nomeTarefa + "</li>");
      $("#nome-tarefa").val('');
    });
  
    $("#lista-tarefas").on("click", "li", function(){
      $(this).css("text-decoration", "line-through");
    });
  });
  