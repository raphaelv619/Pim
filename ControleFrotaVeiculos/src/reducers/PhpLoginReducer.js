const INITIAL_STATE = {
    // foto: '',
    // fotoFacebook: '',
    // foto_mostra: 'assets/images/user.png',
    nome: '',
    // telefone: '',
    login: '',
    // cidade: 0,
    // cidade_nome: '',
    // estado: 0,
    // estado_nome: '',
    password: '',
    password_confirm: '',
    terms: false,
    facebook: 0,
    facebook_id: 0,
    provider: null,
    erro_login: null,
    loading_login: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PHPLOGIN_INICIAL_STATE':
            return { ...state, ...INITIAL_STATE };
        case 'PHPLOGIN_MODIFICA_LOGIN':
            return { ...state, login: action.payload };
        case 'PHPLOGIN_SETUSER':
            let PHPLOGIN_SETUSER = { ...state, loading_login: false };
            PHPLOGIN_SETUSER.foto           = "";
            PHPLOGIN_SETUSER.foto_mostra    = global.phplogin.getFoto();
            PHPLOGIN_SETUSER.nome           = global.phplogin.myprofile.pes_nome;
            PHPLOGIN_SETUSER.sobrenome      = global.phplogin.myprofile.sobrenome;
            PHPLOGIN_SETUSER.telefone       = global.phplogin.myprofile.telefone;
            PHPLOGIN_SETUSER.login          = global.phplogin.myprofile.email;
            PHPLOGIN_SETUSER.cidade         = global.phplogin.myprofile.cidade*1;
            PHPLOGIN_SETUSER.cidade_nome    = global.phplogin.myprofile.cidade_nome;
            PHPLOGIN_SETUSER.estado         = global.phplogin.myprofile.estado*1;
            PHPLOGIN_SETUSER.estado_nome    = global.phplogin.myprofile.estado_nome;
            PHPLOGIN_SETUSER.distancia      = global.phplogin.myprofile.distancia*1;
            return PHPLOGIN_SETUSER;
        case 'PHPLOGIN_LOGIN_USUARIO_FACEBOOK':
            let PHPLOGIN_LOGIN_USUARIO_FACEBOOK = { ...state, ...INITIAL_STATE };
            global.log(action.payload);
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.foto            = "";
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.fotoFacebook    = action.payload.fpicture;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.foto_mostra     = action.payload.fpicture;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.nome            = action.payload.fusername;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.sobrenome       = action.payload.flastusername;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.login           = action.payload.femail;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.provider        = action.payload.provider;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.facebook_id     = action.payload.fbid;
            PHPLOGIN_LOGIN_USUARIO_FACEBOOK.facebook        = 1;
            return PHPLOGIN_LOGIN_USUARIO_FACEBOOK;
        case 'PHPLOGIN_MODIFICA_PASSWORD':
            return { ...state, password: action.payload };
        case 'PHPLOGIN_MODIFICA_CAMPO':
            let stateCustom = { ...state };
            stateCustom[action.payload.campo] = action.payload.valor;
            return stateCustom;
        case 'PHPLOGIN_LOGIN_USUARIO_SUCESSO':
            return { ...state, ...INITIAL_STATE };
        case 'PHPLOGIN_LOGIN_USUARIO_ERRO':
            return { ...state, loading_login: false, erro_login: action.payload };
        case 'PHPLOGIN_LOGIN_EM_ANDAMENTO':
            return { ...state, loading_login: true, erro_login: null };
        default:
            return state;
    }
}
