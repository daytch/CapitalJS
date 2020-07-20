import React from 'react';
import { put } from 'redux-saga/effects';
import {globalAction} from '../redux/actions';

export function success(message) {
  return put(globalAction.toastSuccess(message));
}

export function info(message) {
  return put(globalAction.toastInfo(message));
}

export function warning(message) {
  return put(globalAction.toastWarning(message));
}

export function error(message) {
  return put(globalAction.toastError(message));
}