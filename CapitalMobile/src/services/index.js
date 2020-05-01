import axios from 'axios';
import {getHeader, getHeaderToken} from './/common';

export function POST(url, body, header=getHeaderToken()) {
  return axios
    .post(url, body, header)
    .then(res => {
      if (res.status === 201 || res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {

      }
      return err;
    });
}

export function GET(url, header=getHeaderToken()) {
  return axios
    .get(url, header)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
      }
      return err;
    });
}

export function PUT(url, body, header=getHeaderToken()) {
  return axios
    .put(url, body, header)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
      }
      return err;
    });
}

export function DELETE(url, header=getHeaderToken()) {
  return axios
    .delete(url, header)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      } else if (res.status === 401) {
        return res.data;
      }
    })
    .catch(err => {
      if (err.response.status === 401) {
      }
      return err;
    });
}