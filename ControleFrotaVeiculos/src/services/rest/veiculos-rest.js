import axios from 'axios';
class VeiculosRest {

    getAll() {
        return new Promise((resolve, reject) => {
            axios.get(`${global.config.api}/?classe=ClassVeiculos&metodo=getAll`, {
            }).then(function (response) {
                console.log('res', response.data);
                resolve (response.data);
            }).catch(error => {
                console.log('error_', error)
            })
        })
    }

    insert(obj) {
        console.log("OBJJ", obj)
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: `${global.config.api}`,
                data: obj,
              }).then(function (response) {
                console.log("RESSSS", response)
                resolve (response);
            }).catch(error => {
                reject(error)
            });
        })
    }

    delete(id){
        console.log(id)
        return new Promise((resolve, reject) => {
            axios.delete(`${global.config.api}`, {params: {id: id}}).then(function (response) {
                console.log("RESSSS", response)
                resolve (response);
            }).catch(error => {
                reject(error)
            });
        })
    }

}

var veiculos = new VeiculosRest();
global.veiculos = veiculos;
export var veiculos;