angular
    .module('todo')
    .controller('TodoController', TodoController);
    
TodoController.$inject = ['TodoRepository'];

function TodoController(todoRepository){
    var vm = this;
    
    vm.todos = [];
    vm.text = "";
    
    vm.list = list;
    vm.save = save;
    vm.remove = deleteTodo;
    
    list();
    
    
    function list() {
        todoRepository.list().then(function(data){
            vm.todos = data;
        });
    }
    
    function save(){
        todoRepository.save({text: vm.text}).then(function(data){
            vm.todos = data;
            vm.text = "";
        });
    }
    
    function deleteTodo(idTodo){
        todoRepository.remove(idTodo).then(function(data){
            vm.todos = data;
        });
    }
}