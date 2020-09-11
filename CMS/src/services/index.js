import axios from 'axios';
import { getHeaderToken, getTokenOnly, getToken} from './common';
import {globalAction} from '../redux/actions';
import store from '../redux/store';
import {URL, API_BASE_URL} from '../constants';
import history from '../utils/history';

export function POST(url, body, header=getHeaderToken()) {
  return axios
    .post(url, body, {headers: header})
    .then(res => {
      if (res.status === 201 || res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        history.push("/login");
      }
      else{
        store.dispatch(globalAction.toastError("Something went wrong"));
      }
      return err.response.data || err;
    });
}

export function GET(url, header=getHeaderToken()) {
  return axios
    .get(url, {headers:header})
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        history.push("/login");
      }
      return err.response.data || err;
    });
}

export function PUT(url, body, header=getHeaderToken()) {
  return axios
    .put(url, body, {headers:header})
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        history.push("/login");
      }
      return err.response.data || err;
    });
}

export function DELETE(url, header=getHeaderToken()) {
  return axios
    .delete(url, {headers:header})
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        return res.data;
      }
      // else {
      //     res.data
      // }
    })
    .catch(err => {
      if (err.response.status === 401) {
        store.dispatch(globalAction.toastWarning("Unauthorized", {autoHide: 0}))
        history.push("/login");
      }
      return err.response.data || err;
    });
}

export function UploadImage(file, onSuccess){
  var fileReader = new FileReader();

  fileReader.addEventListener("load", function () {
    const data = "file=" + encodeURIComponent(fileReader.result)
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-access-token": getTokenOnly(),
      "Authorization": getToken()
    }
    POST(URL.UPLOAD_IMAGE, data, headers).then(res => {
      if(onSuccess){
        onSuccess(API_BASE_URL + res.fileDirectory.substring(1));
      }
    })
  }, false);
  fileReader.readAsDataURL(file)
}