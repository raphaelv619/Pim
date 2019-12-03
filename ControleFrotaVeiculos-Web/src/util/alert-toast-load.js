import React from 'react';
import { ActivityIndicator, Alert, Modal, View, Image, Platform } from 'react-native';
import { BarIndicator,} from 'react-native-indicators';

import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class AlertCustom {

    alert(text, func = null, title = "Alerta"){

        confirmAlert({
            title: title,
            message: text,
            buttons: [
            {
                label: 'Ok',
                onClick: () =>{
                    if(func){
                        func()
                    }
                }
            }
            ]
        });
    }

    confirm(text, func = null, title = "Confirmar", func_cancel = null, btOk='Confirma',btCancel='Cancelar') {


        confirmAlert({
            title: title,
            message: text,
            buttons: [
            {
                label: btCancel,
                onClick: () =>{
                    if (func_cancel) func_cancel();
                }
            },
            {
                label: btOk,
                onClick: () =>{
                    if (func) func(); 
                }
            }
            ]
        });
    }
}


var alert = new AlertCustom();
global.alert = alert;
export var alert;
