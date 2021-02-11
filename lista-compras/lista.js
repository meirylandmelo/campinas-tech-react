class Lista {
  constructor() {
    this.inputItem = document.querySelector("#item")
    this.botaoAdicionar = document.querySelector("#adicionar")
    this.lista = document.querySelector("#lista")
    this.botaoApagar = document.querySelector("#apagar")
  }

  apagarLista() {
    // implementar apagar do html
    this.lista.innerHTML = ''
  }

  adicionarNaLista(minhaLista) {
    let listaHTML = ''

    minhaLista.map(function(item){
      listaHTML += `
      <li>${item}</li>
      `
    })

    this.lista.innerHTML = listaHTML
  }

}