const INITIAL_STATE = {
    total_msg: 0,
    msgs: []
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'MSGS_INICIAL_STATE':
            global.log("MSGS_INICIAL_STATE", action);
            return { ...state, ...INITIAL_STATE };
        case 'MSGS_MODIFICA_CAMPO':
            global.log("MSGS_MODIFICA_CAMPO", action);
            let MSGS_MODIFICA_CAMPO = { ...state };
            MSGS_MODIFICA_CAMPO[action.payload.campo] = action.payload.valor;
            return MSGS_MODIFICA_CAMPO;
        default:
            return state;
    }
}
