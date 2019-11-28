import React, { Component, } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './Routes';
import reducers from './reducers';

import Loading from './components/loading';

import * as services from './services';
import * as util from './util';

import { AsyncStorage } from 'react-native';
import axios from 'axios';


import { PermissionsAndroid, Platform } from 'react-native';

class App extends Component {

    permissions = [
        // PermissionsAndroid.PERMISSIONS.CAMERA,
        // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ];

    // verifyPermissions(res = null) {
    //     if (res != null) {
    //         let liberado = true;

    //         for(let x in res) {
    //             if (res[x] != "granted") {
    //                 liberado = false;
    //             }
    //         }

    //         if (liberado) return;
    //     }

    //     global.alert.alert("Para que você consiga interagir no app, será necessário aceitar todas as permissões solicitadas.", "Alerta", () => {
    //         this.updatePermissions();
    //     });
    // }

    // updatePermissions() {
    //     try {
    //         if (this.permissions.length <= 0) return;

    //         PermissionsAndroid.requestMultiple(this.permissions).then((res) => {
    //             this.verifyPermissions(res);
    //             global.log("PermissionsAndroid.requestMultiple", res);
    //         }, (err) => {
    //             this.verifyPermissions();
    //             global.log("PermissionsAndroid.requestMultiple err", err);
    //         });
    //     } catch (err) {
    //         global.log("PermissionsAndroid.requestMultiple catch", err)
    //     }
    // }

    // componentDidMount() {
    //     console.disableYellowBox = true;
    //     global.bootstrap.init().then((res) => {
    //         if (global.phplogin.statusLogin()) {
    //             // global.firebase.register();
    //             Actions.reset("home");
    //         }
    //     }).catch((err) => {
    //         console.log("bootstrap error", err);
    //     });

    //     if (Platform.OS !== 'ios') this.updatePermissions();
    // }

    // componentDidMount = async () => {

    //     const token = await AsyncStorage.getItem('token').then((value) => {
    //         console.log('aaaaa',value);
    //     });
    
    //     const headers = {
    //         'Authorization': 'Bearer' + token
    //     }
    //     //const headers ={ 'Content-Type': 'application/json' }
    
    //     await axios.get("http://192.168.0.102/api", {
            
    //     }).then(function (response) {
    //         console.log('zzzzz',response.data);

    //     }).catch(error => {
    //         console.log('bbbbb',error)
    //     })
    
    // }

    componentDidMount(){
        Actions.veiculos();
    }

    render() {
        
        console.disableYellowBox=true
        global.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={global.store}>
                <Loading/>
                <Routes />
            </Provider>
        );
    }
}

export default App;
