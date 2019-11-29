import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Picker, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Form } from 'native-base';
import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
import { modificaCampo, insertVeiculo } from '../../../actions';

import { colors, styles } from '../../../styles';
import { Button, } from '../../../components';
import Header from '../../../components/header';


class CadastroVeiculos extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log("PROPS", this.props);
        if(this.props.edit){
            this.props.modificaCampo(this.props.item, 'EDITA_OBJETO_VEICULO', '');
        }
    }

    _takeImage() {
        const options = {
            title: 'Foto',
            storageOptions: {
                skipBackup: true,
                cameraRoll: true,
                path: 'images'
            },
            cancelButtonTitle: 'Cancelar',
            takePhotoButtonTitle: 'Tire uma Foto',
            chooseFromLibraryButtonTitle: 'Escolha uma Foto',
            mediaType: 'photo',
        };

        /**
         * The first arg is the options object for customization (it can also be null or omitted for default options),
         * The second arg is the callback which sends object: response (more info in the API Reference)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri, data: response.data };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log("SORRRRC", source.uri)
                this.props.modificaCampo(source.uri, 'MODIFICA_OBJETO_VEICULO', 'imagem')
                this.props.modificaCampo(source.data, 'MODIFICA_OBJETO_VEICULO', 'imagem_64')
                //   this.setState({
                //     avatarSource: source,
                //   });
            }
        });
    }

    // b64toBlob(dataURI) {

    //     var byteString = atob(dataURI.split(',')[1]);
    //     var ab = new ArrayBuffer(byteString.length);
    //     var ia = new Uint8Array(ab);

    //     for (var i = 0; i < byteString.length; i++) {
    //         ia[i] = byteString.charCodeAt(i);
    //     }
    //     return new Blob([ab], { type: 'image/jpeg' });
    // }

    getObj() {

        return {
            placa: this.props.placa,
            ano_modelo: this.props.ano_modelo,
            ano_fabr: this.props.ano_fabr,
            chassi: this.props.chassi,
            renavam: this.props.renavam,
            marca: this.props.marca,
            modelo: this.props.modelo,
            cor: this.props.cor,
            km_atual: this.props.km_atual,
            combustivel: this.props.combustivel,
            motorizacao: this.props.motorizacao,
            tipo: this.props.tipo,
            situacao: this.props.situacao,
        };

    }

    getFormData() {
        let bodyFormData = new FormData();
        bodyFormData.append('placa', this.props.placa)
        bodyFormData.append('ano_modelo', this.props.ano_modelo);
        bodyFormData.append('ano_fabr', this.props.ano_fabr);
        bodyFormData.append('chassi', this.props.chassi);
        bodyFormData.append('renavam', this.props.renavam);
        bodyFormData.append('modelo', this.props.modelo);
        bodyFormData.append('marca', this.props.marca);
        bodyFormData.append('cor', this.props.cor);
        bodyFormData.append('km_atual', this.props.km_atual);
        bodyFormData.append('combustivel', this.props.combustivel.val);
        bodyFormData.append('motorizacao', this.props.motorizacao.val);
        bodyFormData.append('tipo', this.props.tipo.val);
        bodyFormData.append('situacao', this.props.situacao.val);
        bodyFormData.append("imagem", this.props.imagem_64);
        if(this.props.edit){
            bodyFormData.append("id", this.props.item.id);
        }
        
        return bodyFormData;
    }

    _salvar() {

        let obj = this.getObj();

        let erro = "";


        if (obj.placa == "") erro += "Placa é obrigatório!\n";
        if (obj.ano_modelo == "") erro += "Ano do modelo é obrigatório!\n";
        if (obj.ano_fabr == "") erro += "Ano de fabricação é obrigatório!\n";
        if (obj.chassi == "") erro += "Chassi é obrigatório!\n";
        if (obj.renavam == "") erro += "Renavam é obrigatório!\n";
        if (obj.marca == "") erro += "Marca é obrigatório!\n";
        if (obj.modelo == "") erro += "Modelo é obrigatório!\n";
        if (obj.cor == "") erro += "Cor é obrigatório!\n";
        if (obj.km_atual == "") erro += "Kilometragem é obrigatório!\n";
        if (obj.combustivel.val == -1) erro += "Combustivel é obrigatório!\n";
        if (obj.motorizacao.val == -1) erro += "Motorização é obrigatório!\n";
        if (obj.tipo.val == -1) erro += "Tipo é obrigatório!\n";
        if (obj.situacao.val == -1) erro += "Situação é obrigatório!\n";

        if (erro != "") {
            global.alert.alert(erro);
            return;
        }
        let formObj = this.getFormData();
        console.log("FORMMMOBJS", formObj)
        let edit = this.props.edit ? 1 : 0
        this.props.insertVeiculo(formObj, edit)

    }

    render() {
        console.log("PROPSSSS", this.props, this.props.imagem_64)
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar backgroundColor={'#333'} backgroundColor='#333' barStyle="light-content" />
               

                <Header home />
             

                <ScrollView>

                    <View style={styles.content}>

                        <View style={[styles.contentForm]}>

                            <Form style={{ paddingLeft: 10, }}>

                                    <View style={styles.contentAddUserImage}>

                                    <TouchableWithoutFeedback onPress={() => this._takeImage()}>

                                        <View style={[styles.cardProductImage, {
                                            width: 164,
                                            height: 171,
                                        }]}>
                                            {   this.props.imagem != null ?
                                           
                                                <Image
                                                    style={{ width: '100%', height: '100%' }}
                                                    source={{ uri: this.props.imagem }}
                                                    />
                                                :
                                                this.props.imagem_64 != 'null' || this.props.imagem_64 != null   ?
                                                <Image
                                                    style={{ width: '100%', height: '100%' }}
                                                    source={{uri:`data:image/png;base64,${this.props.imagem_64}`}} 
                                                />  
                                                :
                                                 <Image
                                                    style={{ width: '100%', height: '100%' }}
                                                    source={require('../../../assets/images/default-car.png')}
                                                />
                                                   
                                            }


                                        </View>
                                </TouchableWithoutFeedback>

                                        <Text style={{ color: colors.greyText, fontSize: 16, marginTop: 10 }}>Foto</Text>

                                    </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Placa"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'placa')}
                                        value={this.props.placa}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Ano do modelo"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'ano_modelo')}
                                        value={this.props.ano_modelo}
                                        keyboardType={'numeric'}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Ano de fabricação"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'ano_fabr')}
                                        value={this.props.ano_fabr}
                                        keyboardType={'numeric'}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Chassi"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'chassi')}
                                        value={this.props.chassi}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Renavam"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'renavam')}
                                        value={this.props.renavam}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Marca"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'marca')}
                                        value={this.props.marca}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Modelo"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'modelo')}
                                        value={this.props.modelo}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Cor"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'cor')}
                                        value={this.props.cor}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10, borderWidth: 1, borderColor: colors.greyLine, borderRadius: 6, paddingLeft: 5 }]}>
                                    <Picker
                                        selectedValue={this.props.combustivel.val}
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, color: colors.greyText }]}
                                        onValueChange={value => this.props.modificaCampo(value, 'MODIFICA_OBJETO_VEICULO', 'combustivel', 'val')
                                        }>
                                        <Picker.Item label="Combustível" value={-1} />
                                        <Picker.Item label="Flex" value={0} />
                                        <Picker.Item label="Gasolina" value={1} />
                                        <Picker.Item label="Alcool" value={2} />
                                    </Picker>
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10, borderWidth: 1, borderColor: colors.greyLine, borderRadius: 6, paddingLeft: 5 }]}>
                                    <Picker
                                        selectedValue={this.props.motorizacao.val}
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, color: colors.greyText }]}
                                        onValueChange={value => this.props.modificaCampo(value, 'MODIFICA_OBJETO_VEICULO', 'motorizacao', 'val')
                                        }>
                                        <Picker.Item label="Motorização" value={-1} />
                                        <Picker.Item label="1.0" value={0} />
                                        <Picker.Item label="1.4" value={1} />
                                        <Picker.Item label="1.6" value={2} />
                                        <Picker.Item label="1.8" value={3} />
                                        <Picker.Item label="2.0" value={4} />
                                    </Picker>
                                </View>


                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10 }]}>
                                    <TextInput
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, }]}
                                        placeholderTextColor={styles.inputSearchProductPlace}
                                        placeholder={"Km atual"}
                                        onChangeText={texto => this.props.modificaCampo(texto, 'MODIFICA_OBJETO_VEICULO', 'km_atual')}
                                        value={this.props.km_atual}
                                        keyboardType={'numeric'}
                                    />
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10, borderWidth: 1, borderColor: colors.greyLine, borderRadius: 6, paddingLeft: 5 }]}>
                                    <Picker
                                        selectedValue={this.props.tipo.val}
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, color: colors.greyText }]}
                                        onValueChange={value => this.props.modificaCampo(value, 'MODIFICA_OBJETO_VEICULO', 'tipo', 'val')
                                        }>
                                        <Picker.Item label="Tipo" value={-1} />
                                        <Picker.Item label="Carro" value={0} />
                                    </Picker>
                                </View>

                                <View style={[styles.contentSearchProduct, { marginVertical: 5, marginLeft: 0, marginRight: 10, borderWidth: 1, borderColor: colors.greyLine, borderRadius: 6, paddingLeft: 5 }]}>
                                    <Picker
                                        selectedValue={this.props.situacao.val}
                                        style={[styles.inputSearchProduct, { paddingLeft: 16, color: colors.greyText }]}
                                        onValueChange={value => this.props.modificaCampo(value, 'MODIFICA_OBJETO_VEICULO', 'situacao', 'val')
                                        }>
                                        <Picker.Item label="Situação" value={-1} />
                                        <Picker.Item label="Ativo" value={0} />
                                        <Picker.Item label="Desativo" value={1} />
                                    </Picker>
                                </View>

                            </Form>

                            <View style={{ marginTop: 16, marginHorizontal: 10 }}>

                                <Button onPress={() => this._salvar()} text={this.props.edit ? "Salvar" : "Cadastrar"} />

                            </View>

                        </View>

                    </View>

                </ScrollView>

            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        placa: state.VeiculosReducer.addVeiculo.placa,
        ano_modelo: state.VeiculosReducer.addVeiculo.ano_modelo,
        ano_fabr: state.VeiculosReducer.addVeiculo.ano_fabr,
        chassi: state.VeiculosReducer.addVeiculo.chassi,
        renavam: state.VeiculosReducer.addVeiculo.renavam,
        marca: state.VeiculosReducer.addVeiculo.marca,
        modelo: state.VeiculosReducer.addVeiculo.modelo,
        cor: state.VeiculosReducer.addVeiculo.cor,
        km_atual: state.VeiculosReducer.addVeiculo.km_atual,
        combustivel: state.VeiculosReducer.addVeiculo.combustivel,
        motorizacao: state.VeiculosReducer.addVeiculo.motorizacao,
        tipo: state.VeiculosReducer.addVeiculo.tipo,
        situacao: state.VeiculosReducer.addVeiculo.situacao,
        imagem: state.VeiculosReducer.addVeiculo.imagem,
        imagem_64: state.VeiculosReducer.addVeiculo.imagem_64,
        change: state.VeiculosReducer.change,
    }
)

export default connect(mapStateToProps, { modificaCampo, insertVeiculo })(CadastroVeiculos);
