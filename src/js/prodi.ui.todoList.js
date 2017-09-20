

/**
 * @return the init function to start the module.
 */
prodi.ui.todoList = (function () {
    var listArr = [''],
        $form = $('#main__form'),
        $removeLink = $('.item__todo__close__icon'),
        $itemList = $('#theList'),
        $editable = $('.editable'),
        $clearAll = $('#clear-all'),
        $newTodo = $('#toDoItem'),
        newList = true;
    
    function addList(){
        $('#search').on('click', function(e){
            e.preventDefault();
            if (newList == true){
                var theValue = $newTodo.val(); 
                newListItem = '<li class="list__main__doto__item" id="draggable"><a class="item__todo__items main-link"> <span class="item__todo__unchecked icon-checkbox-unchecked"></span></a><span class="item__todo__task editable">'+theValue+'</span><a class="item__todo__close"><span class="item__todo__close__icon icon-cancel-circle"></span></a></li>';  
            }else{
                var theValue = $newTodo.val();
                newListItem.find('input').attr('value', theValue);
            }
            $itemList.append(newListItem);
            $newTodo.val('');
		    $newTodo.focus(); 
            $("#draggable").draggable();
        });
    };
    
    function clearAll(){
      $clearAll.on('click', function(e){
        e.preventDefault();
          $itemList.clear();
      }); 
    };
    
    
    function init() {
        addList();
        clearAll();
    };

    return {
        init: init
    };

})();
