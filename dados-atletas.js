class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }

    calculaCategoria() {
        if(this.idade >= 9 && this.idade <= 11) {
            return 'Infantil'
        } else if (this.idade >= 12 && this.idade <= 13) {
            return 'Juvenil'
        } else if (this.idade >= 14 && this.idade <= 15) {
            return 'Intermediário'
        } else if (this.idade >= 16 && this.idade <= 30) {
            return 'Adulto'
        } else {
            return 'Sem categoria'
        }
    }

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura)
        return imc
    }

    calculaMediaValida() {
            let notasOrdenadas = this.notas.sort(function(a,b) {
                return a - b
            })
            let notasValidas = notasOrdenadas.slice(1,4)
            let soma = notasValidas.reduce(function(total, atual) {
                return total + atual
            }, 0)
            return soma / notasValidas.length
        }

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    }

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`
    }

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`
    }

    obtemNotasAtleta() {
        return `Notas: ${this.notas}`
    }

    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`
    }

    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`
    }

    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`
    }
}