interface Dev {
    nome: string,
    idade: number,
    empresa: string,
    famoso: boolean
}

function programador(objeto: Dev, array: string[]) {
    console.log(objeto, array)
}

const dev = {
    nome: 'Bill Gattes',
    idade: 60,
    empresa: 'Microsoft',
    famoso: true
}

const produtos = ['Azure', 'VS code', 'Office']

programador(dev, produtos)