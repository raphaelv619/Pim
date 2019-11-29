import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, TextInput, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';

import TouchableScale from 'react-native-touchable-scale';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { colors, styles } from '../../styles';
import {  MyIcon, } from '../../components';
import Header from '../../components/header';

import { getVeiculos, deleteVeiculo, modificaCampo } from '../../actions';



class Veiculos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            filtro:1,
            modalVisible: false,
            icones: [
                {
                    nome: 'car',
                    texto: 'Veículos'
                },
                {
                    nome: 'wrench',
                    texto: 'Manutenção'
                },
                {
                    nome: 'gas-pump',
                    texto: 'Abastecimento'
                },
                {
                    nome: 'ticket-alt',
                    texto: 'Multas'
                },
                {
                    nome:'pneu',
                    texto:'Pneus'
                }
            ]
        }
    }

    componentDidMount() {
        this.props.getVeiculos();
    }

    _delete(id) {
        global.alert.confirm('Deseja realmente excluir?', () => this.props.deleteVeiculo(id), 'Excluir')
    }

    searchTxt(txt, filtro) {
        setTimeout(() => {
            if (txt == '') {
                this.props.getVeiculos(-1);
            }
            else {
                this.props.getVeiculos(filtro, txt);
            }
        }, 300)
    }

    filtrar() {
        this.setState({ modalVisible: true })
    }

    _add(){
        this.props.modificaCampo('', 'INSERT_VEICULO', '');
        Actions.cadastrarVeiculo();
    }

    _modalFilter() {
        if (this.state.modalVisible) {
            return (

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    presentationStyle='overFullScreen'
                >
                    <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })}>

                   
                    <View style={{ flex: 1, alignItems: "center", padding: 70, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                        <TouchableWithoutFeedback onPress={()=>{}}>

                        
                        <View style={{ backgroundColor: 'white', elevation: 1, marginTop: 70, padding: 10, paddingRight: 60, borderRadius: 10,  alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 16, marginTop: 10, fontWeight:'bold' }}>Selecione um filtro</Text>
                            <View style={{ marginTop: 10, marginBottom: 20 }}>
                                <TouchableOpacity onPress={()=>this.setState({filtro:1})}>

                                <View style={{ flexDirection: 'row', marginBottom:10, marginTop:15  }}>
                                    <Text style={{ fontSize: 16 }}>Placa</Text>
                                    <View style={{ marginLeft: 10, width: 20, height: 20, borderColor: '#a67c00', borderWidth: 0.5, borderRadius: 100, backgroundColor: this.state.filtro == 1 ? '#a67c00' : "white" }}></View>

                                </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>this.setState({filtro:2})}>

                                <View style={{ flexDirection: 'row', marginTop:10, marginBottom:10  }}>
                                    <Text style={{ fontSize: 16 }}>Marca ou modelo</Text>
                                    <View style={{ marginLeft: 10, width: 20, height: 20, borderColor: '#a67c00', borderWidth: 0.5, borderRadius: 100, backgroundColor: this.state.filtro == 2 ? '#a67c00' : "white"  }}></View>

                                </View>
                                </TouchableOpacity>

                                
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>
                    </TouchableWithoutFeedback>
                </Modal>

            )
        }
        return (<View />)

    }

    _renderItemFilter = ({ item, index }) => {

        return (

            <TouchableScale style={[styles.itemListFilter]} onPress={()=> index == 0 ? {} : global.alert.alert('Em desenvolvimento.')}>
                <View style={{ alignItems: 'center' }}>
                    {item.nome == 'pneu' ? 
                    <Image source={require('../../assets/icons/tire.png')} style={{width:24, height:24}} />
                    :
                    <MyIcon name={item.nome} size={22} style={{ color: index == 0 ? '#a67c00' : 'white' }} />
                    }
                    <Text style={{ color: index == 0 ? '#a67c00' : 'white', marginTop: 3, fontSize: 16 }}>{item.texto}</Text>
                </View>

            </TouchableScale>

        )

    }


    _renderHeaderList = ({ }) => {

        return (

            <View>





                <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15, }]}>
                    <TouchableWithoutFeedback onPress={() => this._add()}>

                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 0, borderWidth: 1, borderColor: colors.greyLine, borderRadius: 6, height: 46, width: 150 }}>
                            <MyIcon name='plus' size={22} style={{ color: '#a67c00' }} />
                            <Text style={[styles.cardProductTitle, { fontSize: 16, color: 'black', marginLeft: 5 }]} numberOfLines={1}>Adicionar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.filtrar()}>

                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 0, borderWidth: 1, borderColor: colors.greyLine, borderRadius: 6, height: 46, width: 150 }}>
                            <MyIcon name='filter' size={22} style={{ color: '#a67c00', marginRight: 5 }} />
                            <Text style={[styles.cardProductTitle, { fontSize: 16, color: 'black', }]} numberOfLines={1}>Filtrar</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>


                <View style={styles.contentSearchProduct}>



                    <TextInput
                        style={styles.inputSearchProduct}
                        placeholderTextColor={styles.inputSearchProductPlace}
                        placeholder={"Pequisar veículo..."}
                        KeyboardAvoidingView
                        onChangeText={(text) => this.setState({ searchText: text }, () => this.searchTxt(this.state.searchText, this.state.filtro))}
                        value={this.state.searchText}
                    />

                    <View style={styles.iconSeachProduct}>

                        <MyIcon name='search' size={18} style={{ color: '#333' }} />

                    </View>

                </View>

            </View>
        )

    }

    _renderItem = ({ item, index }) => {
        return (

            <TouchableWithoutFeedback onLongPress={() => this._delete(item.id)} onPress={() => Actions.detalhesVeiculo({ item: item })}>

                <View style={styles.cardProduct}>

                    <View style={styles.cardProductImage}>

                        {item.imagem != 'null' ?
                            <Image
                                style={{ width: '100%', height: '100%' }}
                                source={{ uri: `data:image/png;base64,${item.imagem}` }}
                            />

                            :

                            <Image
                                style={{ width: '100%', height: '100%' }}
                                source={require('../../assets/images/default-car.png')}
                            />

                        }


                    </View>

                    <View style={styles.cardProductText} >

                        <Text style={styles.cardProductTitle} numberOfLines={1}>{`${item.marca} ${item.modelo}`}</Text>

                        <Text style={styles.cardProductSubTitle} numberOfLines={2}>{item.placa}</Text>

                        <View style={styles.cardProductContentPrice}>

                            <View style={styles.cardProductMainPrice}>

                                <Text style={[styles.cardProductPrice]}>Detalhes</Text>

                            </View>

                        </View>

                    </View>

                </View>

            </TouchableWithoutFeedback>

        )

    }

    render() {

        return (

            <View style={[styles.contentRelative, { backgroundColor: '#333', }]}>


                {this._modalFilter()}
                <View style={{ zIndex: 1, flex:1 }}>

                    <View style={{ elevation: 4, }}>

                        <Header menu bell home />

                    </View>

                    <ScrollView style={{flex:1, }}>



                        <View>


                            <View style={[styles.flatFilterHome]}>

                                <FlatList
                                    data={this.state.icones}
                                    renderItem={this._renderItemFilter}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    ListHeaderComponent={<View style={{ marginLeft: 18, }} />}
                                    ListFooterComponent={<View style={{ marginRight: 18, }} />}
                                    style={{}} />

                            </View>


                            <FlatList
                                data={this.props.veiculos}
                                renderItem={this._renderItem}
                                vertical
                                refreshing={true}
                                showsHorizontalScrollIndicator={false}
                                ListHeaderComponent={this._renderHeaderList}
                                ListFooterComponent={<View style={{ marginBottom: this.props.veiculos.length == 1 ? 200 : 80 }} />}
                                style={styles.contentDefaultHome}
                                ListEmptyComponent={()=><View style={{flex:1, padding:10}}><Text style={{fontSize:18, marginLeft:12, height:400}}>Nenhum veículo cadastrado</Text></View>} />


                        </View>


                    </ScrollView>

                </View>


            </View >

        );
    }
}

const mapStateToProps = state => (
    {
        veiculos: state.VeiculosReducer.veiculos,
        change: state.VeiculosReducer.change
    }
)

export default connect(mapStateToProps, { getVeiculos, deleteVeiculo, modificaCampo })(Veiculos);
