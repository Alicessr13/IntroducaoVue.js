new Vue({
    el: '#desafio',
    data:{
        nome: 'Alice',
        idade: '21',
        imagem: 'https://media.tenor.com/qvwcFWrFFMQAAAAj/grimoire-spellbook.gif'
    },
    methods:{
        idadeMulti3: function(){
            return this.idade * 3;
        },
        random: function(){
            return Math.random();
        }
    }
});