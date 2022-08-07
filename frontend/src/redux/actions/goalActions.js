import {GET_GOALS,CREATE_GOAL,CREATE_ENTRY,DELETE_ENTRY,DELETE_GOAL,UPDATE_GOAL, DELETE_AWARD, CREATE_AWARD} from '../types'
import {GET_GOAL_URL,CREATE_GOAL_URL, CREATE_ENTRY_URL, DELETE_ENTRY_URL, DELETE_GOAL_URL, EDIT_GOAL_URL,GET_GOAL_BY_GOAL_ID_URL, DELETE_AWARD_URL, CREATE_AWARD_URL} from '../services/goalServices'
import axios from 'axios'

export const getGoalById = (tokenStr,id) => dispatch => {
    axios({
        method: "get",
        url: GET_GOAL_URL+'/'+id,
        headers: {"Authorization" : `Bearer ${tokenStr}`}
    }).then((res) => {
        dispatch( {
            type: GET_GOALS,
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

export const getGoalByGoalId = (tokenStr,id,callback) => dispatch => {
    var response;
    axios({
        method: "get",
        url: GET_GOAL_BY_GOAL_ID_URL+'/'+id,
        headers: {"Authorization" : `Bearer ${tokenStr}`}
    }).then((res) => {
       callback(res.data);
    }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data.message,'error');
        } 
        else {
            console.log(error.message,'error');
        }
    });
    return response;
}

export const deleteGoalById = (formData,setAlert,tokenStr,dictionary) => (dispatch) => {
    axios({
        method: "delete",
        url: DELETE_GOAL_URL,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: DELETE_GOAL,
            payload: res.data
        });
    }).then(() => {
       setAlert(dictionary.goal_removed_succesfully,'success');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}

export const postGoal = (formData,history,setAlert,tokenStr,dictionary) => dispatch => {
    axios({
        method: "post",
        url: CREATE_GOAL_URL,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: CREATE_GOAL,
            payload: res.data
        });
    }).then(() => {
        setAlert(dictionary.add_goal_added_succesfully,'success');
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

export const editGoal = (id,formData,history,setAlert,tokenStr,dictionary) => dispatch => {
    axios({
        method: "put",
        url: EDIT_GOAL_URL+"/"+id,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: UPDATE_GOAL,
            payload: res.data
        });
    }).then(() => {
        setAlert(dictionary.edit_goal_edited_succesfully,'success');
        history.push('/goals');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}

export const createEntry = (formData,setAlert,tokenStr,dictionary,callback) => (dispatch) => {
    axios({
        method: "post",
        url: CREATE_ENTRY_URL,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: CREATE_ENTRY,
            payload: res.data
        });
    }).then(() => {
       setAlert(dictionary.add_entry_added_succesfully,'success');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}


export const deleteEntry = (formData,setAlert,tokenStr,dictionary,callback) => (dispatch) => {
    axios({
        method: "delete",
        url: DELETE_ENTRY_URL,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: DELETE_ENTRY,
            payload: res.data
        });
    }).then(() => {
       setAlert(dictionary.add_entry_removed_succesfully,'success');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}

export const deleteAwardById = (formData,setAlert,tokenStr,dictionary) => (dispatch) => {
    axios({
        method: "delete",
        url: DELETE_AWARD_URL,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: DELETE_AWARD,
            payload: res.data
        });
    }).then(() => {
       setAlert(dictionary.award_removed_succesfully,'success');
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}



export const createAward = (formData,setAlert,tokenStr,dictionary,callback) => (dispatch) => {
    axios({
        method: "post",
        url: CREATE_AWARD_URL,
        data: formData,
        headers: { "Content-Type": "application/json","Authorization" : `Bearer ${tokenStr}`},
    }).then((res) => {
        dispatch( {
            type: CREATE_AWARD,
            payload: res.data
        });
    }).then(() => {
       setAlert(dictionary.award_added_succesfully,'success');
       callback(false);
    }).catch(function (error) {
        if (error.response) {
          setAlert(error.response.data.message,'error');
        } 
        else {
          setAlert(error.message,'error');
        }
    });
}
