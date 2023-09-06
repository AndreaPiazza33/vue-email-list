
// VUE
const { createApp } = Vue

createApp({
  data() {
    return {
       //contenitore email randomiche 
       randomEmail:[] 
    };
  },
  methods: {
    //funzione per recuperare tot(max) email
    getMails(max){
        for (let index = 0; index < max; index++) {
        //recupero email con axios(azione che si deve ripetere per tot volte)
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                const getEmail = email.data.response;
                this.randomEmail.push(getEmail) 
            });       
        };
    },
  },
  mounted() {
    //numero di email da recuperare (dopo il caricamento)
    this.getMails(10);
  },
}).mount('#app');


