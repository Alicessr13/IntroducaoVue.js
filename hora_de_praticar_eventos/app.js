new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Executando alerta!");
        },
        armazenarValor(event){
            this.valor = event.target.value;
        }
    },
})