Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    },
    beforeCreated:function(){
        console.log('before created');
    },
    created:function(){
        console.log('created');
    },
    beforeMount:function(){
        console.log('beforeMount');
    },
    mounted:function(){
        console.log('mounted');
    },
    beforeUpdate:function(){
        console.log('beforeUpdate');
    },
    updated:function(){
        console.log('updated');
    },
    beforeDestroy:function(){
        console.log('beforeDestroy');
    },
    destroyed:function(){
        console.log('destroyed');
    }
  })