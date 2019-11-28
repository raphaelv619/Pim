export const getVeiculos = (params=0, val=null) => {
    return dispatch => {
        if(params==0){
            global.show()
        }
        global.veiculos.getAll(params, val).then(res=>{
            if(params==0){
                global.hide()
            }   
            dispatch({ type: 'GET_VEICULOS', payload: res });
        }).catch(error=>{
            global.alert.alert('Erro ao retornar dados do servidor')
            if(params==0){
                global.hide()
            }
        })
    }
}

export const insertVeiculo = (obj) => {
    return dispatch => {
        global.show()
        global.veiculos.insert(obj).then(res=>{
            global.hide()
        }).catch(error=>{
            global.alert.alert('Erro ao retornar dados do servidor')
            global.hide()
        })
    }
}

export const deleteVeiculo = (id) => {
    return dispatch => {
        global.show()
        global.veiculos.delete(id).then(res=>{
            global.veiculos.getAll(params, val).then(res=>{
                global.hide()
                dispatch({ type: 'GET_VEICULOS', payload: res });
            }).catch(error=>{
                global.alert.alert('Erro ao retornar dados do servidor')
                global.hide()
            })
        }).catch(error=>{
            global.alert.alert('Erro ao retornar dados do servidor')
            global.hide()
        })
    }
}