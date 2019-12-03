const INITIAL_STATE = {
    veiculos: [],
    addVeiculo: {
        placa: '',
        ano_modelo: '',
        ano_fabr: '',
        chassi: '',
        renavam: '',
        marca: '',
        modelo: '',
        cor: '',
        km_atual: '',
        imagem: null,
        imagem_64: null,
        combustivel: { nome: '', val: -1 },
        motorizacao: { nome: '', val: -1 },
        tipo: { nome: '', val: -1 },
        situacao: { nome: '', val: -1 },
    },
    change: 0
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'GET_VEICULOS':
            let GET_VEICULOS = { ...state };
            GET_VEICULOS.veiculos = [];
            for (let o of action.payload) {
                if (o.combustivel == 0) {
                    o.combustivel = { nome: 'Flex', val: parseInt(o.combustivel) }
                } else if (o.combustivel == 1) {
                    o.combustivel = { nome: 'Gasolina', val: parseInt(o.combustivel) }
                } else if (o.combustivel == 2) {
                    o.combustivel = { nome: 'Alcool', val: parseInt(o.combustivel) }
                }
                if (o.motorizacao == 0) {
                    o.motorizacao = { nome: '1.0', val: parseInt(o.motorizacao) }
                } else if (o.motorizacao == 1) {
                    o.motorizacao = { nome: '1.4', val: parseInt(o.motorizacao) }
                } else if (o.motorizacao == 2) {
                    o.motorizacao = { nome: '1.6', val: parseInt(o.motorizacao) }
                } else if (o.motorizacao == 3) {
                    o.motorizacao = { nome: '1.8', val: parseInt(o.motorizacao) }
                } else if (o.motorizacao == 4) {
                    o.motorizacao = { nome: '2.0', val: parseInt(o.motorizacao) }

                }
                if (o.tipo == 0) {
                    o.tipo = { nome: 'Carro', val: parseInt(o.tipo) }
                }
                if (o.situacao == 0) {
                    o.situacao = { nome: 'Ativo', val: parseInt(o.situacao) }
                } else if (o.situacao == 1) {
                    o.situacao = { nome: 'Inativo', val: parseInt(o.situacao) }
                }
                GET_VEICULOS.veiculos.push(o);
            }
            GET_VEICULOS.change++;
            return GET_VEICULOS;

        case 'INSERT_VEICULO':
            let INSERT_VEICULO = { ...state };
            INSERT_VEICULO.addVeiculo.placa= '',
            INSERT_VEICULO.addVeiculo.ano_modelo= '',
            INSERT_VEICULO.addVeiculo.ano_fabr= '',
            INSERT_VEICULO.addVeiculo.chassi= '',
            INSERT_VEICULO.addVeiculo.renavam= '',
            INSERT_VEICULO.addVeiculo.marca= '',
            INSERT_VEICULO.addVeiculo.modelo= '',
            INSERT_VEICULO.addVeiculo.cor= '',
            INSERT_VEICULO.addVeiculo.km_atual= '',
            INSERT_VEICULO.addVeiculo.imagem= null,
            INSERT_VEICULO.addVeiculo.imagem_64= null,
            INSERT_VEICULO.addVeiculo.combustivel= { nome: '', val: -1 },
            INSERT_VEICULO.addVeiculo.motorizacao= { nome: '', val: -1 },
            INSERT_VEICULO.addVeiculo.tipo= { nome: '', val: -1 },
            INSERT_VEICULO.addVeiculo.situacao= { nome: '', val: -1 }

            return INSERT_VEICULO;

        case 'MODIFICA_OBJETO_VEICULO':
            let MODIFICA_OBJETO_VEICULO = { ...state };
            if (action.payload.prop != null) {
                MODIFICA_OBJETO_VEICULO.addVeiculo[action.payload.campo].val = action.payload.valor;
            } else {
                MODIFICA_OBJETO_VEICULO.addVeiculo[action.payload.campo] = action.payload.valor;
            }
            MODIFICA_OBJETO_VEICULO.change++;
            return MODIFICA_OBJETO_VEICULO;

        case 'EDITA_OBJETO_VEICULO':
            let EDITA_OBJETO_VEICULO = { ...state };
            EDITA_OBJETO_VEICULO.addVeiculo['placa'] = action.payload.valor.placa;
            EDITA_OBJETO_VEICULO.addVeiculo['ano_modelo'] = action.payload.valor.ano_modelo;
            EDITA_OBJETO_VEICULO.addVeiculo['ano_fabr'] = action.payload.valor.ano_fabr;
            EDITA_OBJETO_VEICULO.addVeiculo['chassi'] = action.payload.valor.chassi;
            EDITA_OBJETO_VEICULO.addVeiculo['renavam'] = action.payload.valor.renavam;
            EDITA_OBJETO_VEICULO.addVeiculo['marca'] = action.payload.valor.marca;
            EDITA_OBJETO_VEICULO.addVeiculo['modelo'] = action.payload.valor.modelo;
            EDITA_OBJETO_VEICULO.addVeiculo['cor'] = action.payload.valor.cor;
            EDITA_OBJETO_VEICULO.addVeiculo['km_atual'] = action.payload.valor.km_atual;
            EDITA_OBJETO_VEICULO.addVeiculo['imagem_64'] = action.payload.valor.imagem;
            EDITA_OBJETO_VEICULO.addVeiculo['combustivel'] = action.payload.valor.combustivel;
            EDITA_OBJETO_VEICULO.addVeiculo['motorizacao'] = action.payload.valor.motorizacao;
            EDITA_OBJETO_VEICULO.addVeiculo['tipo'] = action.payload.valor.tipo;
            EDITA_OBJETO_VEICULO.addVeiculo['situacao'] = action.payload.valor.situacao;
            EDITA_OBJETO_VEICULO.change++;
            return EDITA_OBJETO_VEICULO;

        default:
            return state;
    }
}
