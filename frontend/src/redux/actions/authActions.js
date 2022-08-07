import axios from "axios";
import { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { LOGIN_URL } from "../services/authServices";
import { LOGIN, LOGOUT, DELETE_USER, REMOVE_ALL_GOALS } from "../types";

export const login = (formData,history,setAlert) => async dispatch => {
    await axios({
        method: "post",
        url: LOGIN_URL,
        data: formData,
        headers: { "Content-Type": "application/json"},
    }).then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        dispatch( {
            type: LOGIN,
            payload: res.data
        });
    }).then(() => {
        setAlert('Başarıyla Giriş Yapıldı','success');
        history.push('/');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}

export const logout = (history) => dispatch => {
    localStorage.removeItem('user');
    dispatch( {
        type: LOGOUT
    });
    dispatch( {
        type: DELETE_USER
    });
    dispatch( {
        type: REMOVE_ALL_GOALS
    });
    history.push("/login");
}

