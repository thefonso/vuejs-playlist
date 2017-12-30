new Vue({
  el:'#vue-app',
  data: {
    name:'Fonso',
    job: 'Samurai'
  },
  methods:{
    greet:function(time_of_day){
      return 'Good' + time_of_day + ' ' + this.name;
    }
  }
});
