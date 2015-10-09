angular
    .module('repository')
    .factory('TodoRepository', TodoRepository);
    
TodoRepository.$inject = ['$http'];

function TodoRepository($http) {
    return {
        list: list,
        save: save,
        remove: remove
    };
    
    function list(){
        return $http.get('/api/todos').then(function(resp){
            debugger;
            return resp.data;
        });
    }
    
    function save(todo){
        return $http.post('/api/todos', todo).then(function(resp){
            debugger;
            return resp.data;
        });
    }
    
    function remove(id){
        return $http.delete('/api/todo' + id).then(function(resp){
            return resp.data;
        });
    }
}