import React from 'react';
import { Router, Scene, Stack, Modal, Lightbox } from 'react-native-router-flux';

import menuLightbox from './components/menuLightbox';


import Drawer from './components/drawer';



import Veiculos from './screen/veiculos';
import DetalhesVeiculo from './screen/veiculos/detalhes';
import CadastroVeiculos from './screen/veiculos/cadastro';
// import Teste from './screen/teste';
// import Notification from './components/notification';

export default props => (

    <Router>

        <Lightbox key="light">

            <Scene key="root">

                <Scene drawer
                    hideNavBar
                    key="drawerMenu"
                    contentComponent={Drawer}
                    drawerWidth={null}
                    drawerPosition='left'
                >

                    <Stack key="stack1">

                        <Scene key='veiculos' hideDrawerButton component={Veiculos} hideNavBar init />

                        <Scene key='detalhesVeiculo' hideDrawerButton component={DetalhesVeiculo} hideNavBar init />

                        <Scene key='cadastrarVeiculo' hideDrawerButton component={CadastroVeiculos} hideNavBar init />

                        

                    </Stack>

                </Scene>

            </Scene>

            <Scene key='menuLightbox' hideDrawerButton component={menuLightbox} hideNavBar />

        </Lightbox>

    </Router>
); 