//Vue.component('star-rating', VueStarRating.default);
let app = new Vue({
  el: '#app',
  data: {
	  current: {},
    	  number: '1', 
	  max_people: '88',
	  max_planets: '61',
	  max_starships: '43',
          name: '',
	  toLookUp: 'people',
	  addedComment: '',
	  comments: {},
	  ratings: {},
  },

  created() {
    this.starwars();
  },

  methods: {
	async starwars() {
     		try {
       		const response = await axios.get('https://swapi.co/api/' + this.toLookUp + '/' + this.number);
       		this.current = response.data;
	} catch (error) {
	this.toLookUp = "people";
        this.number = 1;
     	} 
   	},
   newLookUp() {

   },
   newNumber() {
    }
   },
	  
/*   addComment() {
	   if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);		  
		  this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment,
			  dateTime: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
      this.addedName = '';
      this.addedComment = '';
	   },

    setRating(rating){
		if (!(this.number in this.ratings))
        Vue.set(this.ratings, this.number, {
          sum: 0,
          total: 0,
		average: 0
        });
	this.ratings[this.number].sum += rating;
	this.ratings[this.number].total += 1;
  },
  },*/
computed: {
	isPerson() {		    
		
   		if (this.toLookUp === "people")
	   		return true;
		else return false;
	}
},
	
watch: {
	number(value, oldvalue) {
			this.starwars();
	},

},
});
