import { ToastAndroid } from 'react-native';
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
            ToastAndroid.show('Veículo cadastrado com sucesso.', ToastAndroid.LONG);
            if(edit == 1){
                Actions.veiculos();
            }
            else{
                Actions.pop();
            }
            global.veiculos.getAll().then(res => {
                global.hide()
                dispatch({ type: 'GET_VEICULOS', payload: res });
            }).catch(error => {
                global.hide()
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
            ToastAndroid.show('Veículo excluido com sucesso.', ToastAndroid.LONG);
            global.veiculos.getAll().then(res=>{
                global.hide()
                dispatch({ type: 'GET_VEICULOS', payload: res });
            }).catch(error=>{
                global.hide()
                global.alert.alert('Erro ao retornar dados do servidor')
            })
        }).catch(error=>{
            global.alert.alert('Erro ao retornar dados do servidor')
            global.hide()
        })
    }
}