// register modal component
Vue.component('modal', {
  template: '#modal-template'
})

// start app
new Vue({
  el: '#app7',
  data: {
    showModal: false
  }
})