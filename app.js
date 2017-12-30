new Vue({
  el:'#vue-app',
  data: {
    name:'Fonso',
    job: 'Samurai',
    website: 'http://unclefonso.com',
    websiteTag:'<a href="http://unclefonso.com">unclefonso</a>'
  },
  methods:{
    greet:function(time_of_day){
      return 'Good' + time_of_day + ' ' + this.name;
    }
  }
});
