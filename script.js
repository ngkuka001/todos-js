$(document).ready(function () {
  // Declare initial data for todos
  var todos = [
    {
      id: ranDomKey(),
      isChecked: true,
      name: 'Swimming'
    },
    {
      id: ranDomKey(),
      isChecked: true,
      name: 'Go to School'
    },
    {
      id: ranDomKey(),
      isChecked: true,
      name: 'Listen a music'
    },
  ]; //SEARCH :: array in js
  var todosEle = $(".list-todo"); //get dom by class with jquery

  function renderTodos() {
    todosEle.empty();
    todos.map(todo => { //SEARCH:: map in js
      todosEle.append(
        `<li class='d-flex justify-content-between list-group-item' data-key=${todo.id}>
          <span> 
            <input type='checkbox' class='checkbox-todo' ${ (todo.isChecked ? 'checked' : '') } />
            ${todo.name} 
          </span>
          <span>
            <i class='fa fa-trash remove-icon' aria-hidden='true' />
          </span>
        </li>
        `)
    });
  }
  renderTodos();

  // Handle remove a todo item
  $('.list-todo').click(function(e) {
    if ( $(e.target).hasClass('remove-icon') ) { //Check if click icon remove
      var key = $(e.target).closest('.list-group-item').data('key');
      todos = todos.filter(item => item.id !== key);
      renderTodos();
    }
  })

  // Handle click check box
  $('.list-todo').click(function(e) {
    if ( $(e.target).hasClass('checkbox-todo') ) { //Check if click checkbox
      var key = $(e.target).closest('.list-group-item').data('key');
      todos.map((todo, index) => {
        if (todo.id === key) {
          todos[index].isChecked = !todos[index].isChecked; //Store isChecked variable to data
        }
      })
    }
  })

  // generate a key random
  function ranDomKey() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  $("#form-todos").submit(function (event) {
    event.preventDefault();
    let inputTodo = $('#myInput');
    var text = inputTodo.val(); //get value of input
    if (text !== '') {
      var item = {
        id: ranDomKey(),
        isChecked: true,
        name: text
      }
      todos.push(item),
      // todosEle.empty(); //SEARCH :: empty in js
      renderTodos(); //call function renderTodos()
    }
    inputTodo.val(''); //Clear text in input after submit
  })

});
