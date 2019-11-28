import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, TextInput, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';

// import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';

import { colors, styles } from '../../styles';
import { Button, Content, Input, MyIcon, StripedBackground, Tabs } from '../../components';
import Header from '../../components/header';
import TouchableScale from 'react-native-touchable-scale';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getVeiculos, deleteVeiculo } from '../../actions';



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
                // {
                //     nome:'tire',
                //     texto:'Pneus'
                // }
            ]
        }
    }


    componentWillMount() {
        if (this.props.param) {
            this.setState({ carrinhoVisible: true })
        }
    }

    componentDidMount() {
        console.log("CAI NODID")
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

                        
                        <View style={{ backgroundColor: 'white', elevation: 1, marginTop: 70, padding: 10, paddingRight: 120, borderRadius: 10,  alignItems: 'flex-start' }}>
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

            <TouchableScale style={[styles.itemListFilter]} >
                <View style={{ alignItems: 'center' }}>

                    <MyIcon name={item.nome} size={22} style={{ color: index == 0 ? '#a67c00' : 'white' }} />
                    <Text style={{ color: index == 0 ? '#a67c00' : 'white', marginTop: 3, fontSize: 16 }}>{item.texto}</Text>
                </View>

            </TouchableScale>

        )

    }

    //  product

    _renderProductSearch = ({ }) => {

        return (

            <View>





                <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15, }]}>
                    <TouchableWithoutFeedback onPress={() => Actions.cadastrarVeiculo()}>

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

    _renderItemProduct = ({ item, index }) => {
        console.log("ITEMMM", item)

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

                                {/* <Text style={styles.cardProductSubPrice}>R$58,90</Text> */}

                                <Text style={[styles.cardProductPrice]}>Detalhes</Text>

                            </View>

                            {/* <View style={styles.cardProductMorePay}>

                                <Text style={styles.cardProductMorePayText}>Mais Vendido</Text>

                            </View> */}

                        </View>

                    </View>

                </View>

            </TouchableWithoutFeedback>

        )

    }
    async teste() {
        this.props.getVeiculos();
    }

    render() {

        return (

            <View style={[styles.contentRelative, { backgroundColor: '#333' }]}>

                {/* <StripedBackground /> */}

                {this._modalFilter()}
                <View style={{ zIndex: 1 }}>

                    <View style={{ elevation: 4 }}>

                        <Header menu bell home />

                    </View>

                    <ScrollView>



                        <View>

                            {/* <View style={styles.headInfoHome}>

<View style={{ borderColor:'white', borderWidth:1, height:32, width:32, borderRadius:100, alignItems:'center', justifyContent:'center', }}>
<Text style={{fontSize:28, color:'white', marginBottom:2}}>+</Text>
</View>
<Text style={{marginTop:3, fontSize:14, color:'white'}}>Adicionar</Text>


</View> */}


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
                                renderItem={this._renderItemProduct}
                                vertical
                                showsHorizontalScrollIndicator={false}
                                ListHeaderComponent={this._renderProductSearch}
                                ListFooterComponent={<View style={{ marginBottom: this.state.carrinhoVisible == true ? 105 : 50 }} />}
                                style={styles.contentDefaultHome}
                                ListEmptyComponent={()=><View style={{flex:1, padding:10}}><Text style={{fontSize:18, marginLeft:12, height:300}}>Nenhum veículo cadastrado</Text></View>} />


                        </View>


                    </ScrollView>

                    {this.state.carrinhoVisible == true &&
                        <TouchableWithoutFeedback
                            onPress={() => { Actions.pedido() }}
                        >

                            <View
                                style={[styles.buttonFull,
                                {
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    left: 0,
                                    zIndex: 1,
                                    marginBottom: 75,
                                }]}>

                                <View style={styles.itemCar}>

                                    <Text style={styles.numberItemCar}>1</Text>

                                    <Text style={styles.textItemCar}>Itens no carrinho</Text>

                                </View>

                                <MyIcon name='shopping-cart3' size={22} style={{ color: '#fff' }} />

                            </View>

                        </TouchableWithoutFeedback>
                    }

                    {/* <View style={{ zIndex: 10 }}> */}


                    {/* </View> */}

                </View>


            </View >

        );
    }
}

const mapStateToProps = state => (
    {
        login: state.PhpLoginReducer.login,
        password: state.PhpLoginReducer.password,
        erro_login: state.PhpLoginReducer.erro_login,
        loading_login: state.PhpLoginReducer.loading_login,
        veiculos: state.VeiculosReducer.veiculos
    }
)

export default connect(mapStateToProps, { getVeiculos, deleteVeiculo })(Veiculos);
