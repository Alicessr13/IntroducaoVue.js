new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe2: 'rodar',
		aplicarClasse: 'encolher',
		cor: 'blue',
		rodar: true,
		estiloTeste:{
			width: '100px',
			height: '100px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				/*if(this.classe1 == 'destaque'){
					this.classe1 = 'encolher'
				}
				else if (this.classe1 == 'encolher'){
					this.classe1 = 'destaque'
				}*/
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			},2000)
		},
		setValor(event){
			if(event.target.value == 'true'){
				this.rodar = true
			}else if(event.target.value == false){
				this.rodar = false
			}
		},
		iniciarProgresso(){

			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		}
	}
})
