import {GET_USERS,CREATE_USERS,UPDATE_USER,DELETE_USER} from '../types'
import {GET_USERS_URL,POST_USERS_URL,PUT_USERS_URL,DELETE_USERS_URL} from '../services/userServices'
import axios from 'axios'

export const getUserById = (tokenStr,id) => dispatch => {
    axios({
        method: "get",
        url: GET_USERS_URL+'/'+id,
        headers: {"Authorization" : `Bearer ${tokenStr}`}
    }).then((res) => {
        dispatch( {
            type: GET_USERS,
            payload: res.data
        });
    }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data.message,'error');
        } 
        else {
            console.log(error.message,'error');
        }
    });
}

export const postUser = (formData,history,setAlert) => dispatch => {
    axios({
        method: "post",
        url: POST_USERS_URL,
        data: formData,
        headers: { "Content-Type": "application/json"},
    }).then(() => {
        setAlert('Başarıyla Kayıt Oluşturuldu.','success');
        history.push('/login');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}



export const updateUser = (tokenStr,id,formData,history,setAlert,dictionary) => dispatch => {
    axios({
        method: "put",
        url: POST_USERS_URL+'/'+id, 
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then(() => {
        dispatch(getUserById(tokenStr,id));
    }).then(() => {
        setAlert('Başarıyla Güncellendi.','success');
        history.push('/profile');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}