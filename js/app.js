new Vue({
  el: '#app',
  data: {
    name: 'Victor I. Afolabi',
    age: 22,
  },
  methods: {
    add: function() {
      this.age ++;
    },
    sub: function() {
      this.age --;
    }
  }
});
