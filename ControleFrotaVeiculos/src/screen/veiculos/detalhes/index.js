import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, StatusBar, ImageBackground, Image, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Form } from 'native-base';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
// import { modificaCampo, phpLogin_Login } from '../../../actions';

import { colors, styles, fonts } from '../../../styles';
import { Button, Content, Input, ButtonText, MyIcon } from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

class DetalhesVeiculo extends Component {

    render() {
        console.log("ITEMMM", this.props.item)

        const item = this.props.item;

        console.log("ITEM", item)

        return (
            <View style={{ backgroundColor: 'white' }}>
                <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content" />
                {/* image login header */}
                <ScrollView>
                    <ImageBackground
                        source={ item.imagem != null ? {uri:`data:image/png;base64,${item.imagem}`} : require('../../../assets/images/stilo.jpg')}
                        resizeMode={'cover'} style={styles.imageLogin}>
                        <LinearGradient start={{ x: 0.8, y: -0.1 }}
                            end={{ x: 0.8, y: 1.0 }}
                            locations={[0, 0.3, 0.88]}
                            style={styles.gradLinearLogin}
                            colors={colors.vetColorsGradienteLogin}>
                        </LinearGradient>
                    </ImageBackground>
                    {/* content login */}
                    <View style={[styles.contentLogin, { marginBottom: 54 }]}>
                        {/* title login */}
                        <View style={{ marginBottom: 20 }}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={[styles.blockInfoHomeTitle, { fontSize: fonts.extraForce, color: 'black', marginVertical: 5 }]}>
                                {`${item.marca} ${item.modelo}`}
                            </Text>

                            {/* <Text style={[styles.blockInfoHomeTitle, { fontSize: fonts.extraForce, color: 'black', marginVertical: 5 }]}>
                                Editar
                            </Text> */}
                            {/* <TouchableWithoutFeedback onPress={() => { Actions.pop() }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#333',
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                        }}>
                            <MyIcon name='edit' size={18} style={{ color: colors.white }} />
                        </View>
                    </TouchableWithoutFeedback> */}

                            </View>
                            <Text style={[styles.titleHeadInfoHome, { fontSize: fonts.bigger }]}>
                                {item.placa}
                            </Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2, marginTop:-10}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                    Kilometragem:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.km_atual} km`}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Ano:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.ano_fabr}/${item.ano_modelo}`}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Chassi:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.chassi}`}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Renavam:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.renavam}`}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Cor:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.cor}`}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Combustível:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.combustivel.nome}`}
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Motorização:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.motorizacao.nome}`}
                                </Text>
                            </View>
                        
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical:2}}>
                                <Text style={{ fontSize: 20, color: colors.greyText }}>
                                Situação:
                                </Text>
                                <Text style={[styles.titleHeadInfoHome, { fontSize: 20, color: 'black', marginBottom:0, }]}>
                                    {` ${item.situacao.nome}`}
                                </Text>
                            </View>

                        {/* <View style={{height:42, flex:1, backgroundColor:'#333', alignItems:'center', justifyContent:'center', marginTop:10, elevation:4}}>
                            <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>EDITAR</Text>
                        </View> */}
                        <Button style={{marginTop:10}} onPress={() =>  Actions.cadastrarVeiculo({edit:true, item}) } text="Editar" />
                        </View>


                    </View>
                </ScrollView>
                <View style={{ paddingLeft: 20, paddingTop: 40, position: 'absolute', left: 0, top: 0, flex: 1 }}>
                    <TouchableWithoutFeedback onPress={() => { Actions.pop() }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#333',
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                        }}>
                            <MyIcon name='arrow-left' size={18} style={{ color: colors.white }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        login: state.PhpLoginReducer.login,
        password: state.PhpLoginReducer.password,
        erro_login: state.PhpLoginReducer.erro_login,
        loading_login: state.PhpLoginReducer.loading_login
    }
)

export default connect(mapStateToProps, {})(DetalhesVeiculo);
