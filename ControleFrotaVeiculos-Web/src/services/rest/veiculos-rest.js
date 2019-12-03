import axios from 'axios';

class VeiculosRest {

    getAll(params=0, val=null) {
        return new Promise((resolve, reject) => {
            axios.get(`${global.config.api2}/`, {params:{params, val}
            }).then(function (response) {
                resolve (response.data);
            }).catch(error => {
            })
        })
    }

    insert(obj) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: `${global.config.api2}/`,
                data: obj,
              }).then(function (response) {
                resolve (response);
            }).catch(error => {
            });
        })
    }

    delete(id){
        console.log(id)
        return new Promise((resolve, reject) => {
            axios.delete(`${global.config.api2}/`, {params: {id: id}}).then(function (response) {
                resolve (response);
            }).catch(error => {
               
            });
        })
    }

}

var veiculos = new VeiculosRest();
global.veiculos = veiculos;
export var veiculos;