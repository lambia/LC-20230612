const { createApp } = Vue;

createApp({
    
    data() {
        return {
            apiUrl: "array2json.php"
        }
    },
    methods: {
        chiamata() {
            console.log("Faccio cose, vedo gente");
        }
    },
    mounted() {
        console.log("App caricata");

        //Faccio una chiamata ad un API specificata nel data
        //Possiamo spostare questa chiamata in una sezione più consona di questo file?
        axios.get(this.apiUrl).then((response) => {
            console.log("Dati ricevuti: ", response.data);
        });
    }

}).mount("#app");