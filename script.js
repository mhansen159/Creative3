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
