import axios from 'axios';
class VeiculosRest {

    getAll() {
        return new Promise((resolve, reject) => {
            axios.get(`${global.config.api2}/?classe=ClassVeiculos&metodo=getAll`, {
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
                url: `${global.config.api2}/`,
                data: obj,
              }).then(function (response) {
                console.log("RESSSS", response)
                resolve (response);
            }).catch(error => {
                
            });
        })
    }

    delete(id){
        console.log(id)
        return new Promise((resolve, reject) => {
            axios.delete(`${global.config.api2}/`, {params: {id: id}}).then(function (response) {
                console.log("RESSSS", response)
                resolve (response);
            }).catch(error => {
               
            });
        })
    }

}

var veiculos = new VeiculosRest();
global.veiculos = veiculos;
export var veiculos;