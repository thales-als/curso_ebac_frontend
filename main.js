function Veiculo(modelo, cor, placa) {
    this.modelo = modelo,
        this.cor = cor

    let _placa = placa

    this.getPlaca = function () {
        return _placa
    }

    this.setPlaca = function (numeracaoPlaca) {
        if (typeof numeracaoPlaca === 'string') {
            return _placa = numeracaoPlaca
        }
    }

    this.tempoAte100km = function () {
        return
    }
}

function Carro(modelo, cor, placa) {
    Veiculo.call(this, modelo, cor, placa)

    this.tempoEmSegundosAte100km = function () {
        return 15
    }
}

function Moto(modelo, cor) {
    Veiculo.call(this, modelo, cor)

    this.tempoEmSegundosAte100km = function () {
        return 10
    }
}

function Barco(modelo, cor, marcacao) {
    Veiculo.call(this, modelo, cor)

    let _marcacaoIdentificador = marcacao

    this.getMarcacao = function () {
        return _marcacaoIdentificador
    }

    this.setMarcacao = function (valorMarcacao) {
        return _marcacaoIdentificador = valorMarcacao
    }

    this.tempoEmSegundosAte100km = function () {
        return 45
    }
}


const carroThales = new Carro('R34 GT-R', 'Preto', 'KME-8780')
console.log(carroThales.getPlaca());

const motoMichele = new Moto('Yamaha', 'Azul')
motoMichele.setPlaca('MMT-6770')
console.log(motoMichele.getPlaca());

const barcoRodrigo = new Barco('Trawler', 'Branco', 'SE-487')
console.log(barcoRodrigo.getMarcacao());