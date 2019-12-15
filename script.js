$(document).ready(function () {
  // Declare initial data for todos
  var todos = ["Swimming", "Play football", "Listen a music"]; //SEARCH :: array in js
  var todosEle = $(".list-todo"); //get dom by class with jquery

  function renderTodos() {
    todos.map(todo => { //SEARCH:: map in js
      todosEle.append(
        "<li class='d-flex justify-content-between list-group-item'>" +
          todo + 
        "<span></span><i class='fa fa-trash' aria-hidden='true'></i></span>" +
        "</li>")
    });
  }

  renderTodos();

  $("#form-todos").submit(function (event) {
    event.preventDefault();
    let inputTodo = $('#myInput');
    var text = inputTodo.val(); //get value of input
    if (text !== '') {
      todos.push(text); //SEARCH :: push in js
      todosEle.empty(); //SEARCH :: empty in js
      renderTodos(); //call function renderTodos()
    }
    inputTodo.val(''); //Clear text in input after submit
  })

});
