import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { button, MyIcon } from '../../components';


import styles from './styles';

export default class MenuContainer extends Component {

    _sair() {
        global.alert.confirm("Gostaria de sair?", () => {
            global.bootstrap.logout().then(() => {
                Actions.login();
            });
        });
    }

    render() {

        return (

            <View style={styles.content}>

                {/* image user */}

                <View style={styles.imageUser}>

                    <Image source={require('../../assets/images/man.png')} style={{ width: 120, height: 120 }} />

                </View>

                {/* user name  */}

                <View style={styles.nameUser}>

                    <Text style={styles.nameUserText}>Raphael Villadouro</Text>

                    <Text style={styles.nameUserSubText}>Bem Vindo!</Text>

                    <View style={styles.lineUserName} />

                </View>

                {/* btns menu */}

                <View style={styles.contentMenu}>

                    <ScrollView>

                        <TouchableOpacity onPress={() => Actions.home()} style={styles.btnMenu}>

                            <View style={{width:27}}>


                            <MyIcon name='home' size={22} style={{ color: 'white' }} />
                            </View>

                            <Text style={styles.btnMenuText}>Home</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Actions.veiculos()}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>


                                <MyIcon name='car' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Veiculos</Text>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Actions.endereco() }}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>

                                    
                                <MyIcon name='id-card' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Motoristas</Text>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Actions.fidelidade() }}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>


                                <MyIcon name='plane' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Viagens</Text>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Actions.userEdit() }}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>



                                <MyIcon name='arrows-h' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Entrada/Saída</Text>

                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { Actions.userEdit() }}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>

                                    
                                <MyIcon name='money' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Financeiro</Text>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Actions.userEdit() }}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>


                                <MyIcon name='industry' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Relatórios</Text>

                            </View>

                        </TouchableOpacity>

                        <View style={{ flex: 1 }} />

                        <TouchableOpacity onPress={() => { this._sair() }}>

                            <View style={styles.btnMenu}>

                                <View style={{width:27}}>


                                <MyIcon name='log-out' size={22} style={{ color: 'white' }} />
                                </View>

                                <Text style={styles.btnMenuText}>Sair</Text>

                            </View>

                        </TouchableOpacity>

                    </ScrollView>

                </View>

                {/* app version  */}

                <View style={{ position: 'absolute', bottom: 14, left: 14, }}>

                    <Text style={{ color: '#777', fontSize: 10, }}>V.: {DeviceInfo.getVersion()} </Text>

                </View>

            </View>
        );
    }
}
