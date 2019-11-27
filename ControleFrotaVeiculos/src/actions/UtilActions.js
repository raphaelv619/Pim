export const modificaCampo = (payload, type, campo = null, prop = null) => {
    if (campo !== null) {
        payload = { valor: payload, campo, prop };
    }
    return { payload, type, campo, prop };
}