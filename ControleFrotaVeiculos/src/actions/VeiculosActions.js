import { Toast } from 'native-base';
import { Actions } from "react-native-router-flux";


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

export const insertVeiculo = (obj, edit) => {
    return dispatch => {
        global.show()
        global.veiculos.insert(obj).then(res=>{
            dispatch({ type: 'INSERT_VEICULO', payload: '' });
            global.hide()
            Toast.show({ text: 'Veículo inserido com sucesso.' });
            if(edit == 1){
                Actions.veiculos();
            }
            else{
                Actions.pop();
            }
            global.veiculos.getAll().then(res => {
                dispatch({ type: 'GET_VEICULOS', payload: res });
            }).catch(error => {
                global.alert.alert('Erro ao retornar dados do servidor')
            })
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
            global.hide()
            Toast.show({ text: 'Veículo excluido com sucesso.' });
            global.veiculos.getAll().then(res=>{
                dispatch({ type: 'GET_VEICULOS', payload: res });
            }).catch(error=>{
                global.alert.alert('Erro ao retornar dados do servidor')
            })
        }).catch(error=>{
            global.alert.alert('Erro ao retornar dados do servidor')
            global.hide()
        })
    }
}