export const getVeiculos = () => {
    return dispatch => {
        global.alert.loading(true)
        global.veiculos.getAll().then(res=>{
            global.alert.loading(false)
            console.log("RESSSS", res)
            dispatch({ type: 'GET_VEICULOS', payload: res });
        }).catch(error=>{
            global.alert.loading(false)
            console.log("err", error)
        })
    }
}

export const insertVeiculo = (obj) => {
    return dispatch => {
        global.alert.loading(true)
        global.veiculos.insert(obj).then(res=>{
            global.alert.loading(false)
           
            //dispatch({ type: 'GET_VEICULOS', payload: res });
        }).catch(error=>{
            global.alert.loading(false)
            console.log("err", error)
        })
    }
}