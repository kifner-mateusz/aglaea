import { useEffect, useReducer } from 'react';
import Axios from 'axios';

const requestReducer = (state, action) => {
  // console.log('REDUCED', action);
  let newStateQue = { ...state.que };
  switch (action.type) {
    case 'REQUEST_INIT':
      let method;
      if (typeof action.mathod === 'undefined') {
        method = typeof action.reqData === 'undefined' ? 'GET' : 'POST';
      } else {
        method = action.method;
      }
      let newRequest = {
        id: state.idCount,
        status: 'REQUEST_INIT',
        relativeUrl: action.relativeUrl,
        reqData: action.reqData,
        resData: {},
        isError: false,
        isLoading: false,
        method: method,
        callback: data => action.callback(data),
        cleanAfter:
          typeof action.cleanAfter === 'undefined' ? true : action.cleanAfter
      };
      newStateQue[state.idCount] = newRequest;
      return {
        idCount: state.idCount + 1,
        que: newStateQue
      };
    case 'REQUEST_SEND':
      newStateQue[action.id] = {
        ...newStateQue[action.id],
        status: 'REQUEST_SEND',
        isLoading: true
      };
      return {
        idCount: state.idCount,
        que: newStateQue
      };
    case 'REQUEST_SUCCESS':
      newStateQue[action.id] = {
        ...newStateQue[action.id],
        status: 'REQUEST_SUCCESS',
        isLoading: false,
        resData: action.data
      };
      return {
        idCount: state.idCount,
        que: newStateQue
      };
    case 'REQUEST_ERROR':
      newStateQue[action.id] = {
        ...newStateQue[action.id],
        status: 'REQUEST_ERROR',
        isLoading: false,
        resData: action.error,
        isError: true
      };
      return {
        idCount: state.idCount,
        que: newStateQue
      };
    case 'REQUEST_CLEAN':
      if (typeof newStateQue[action.id] !== 'undefined') {
        if (newStateQue[action.id].cleanAfter) {
          delete newStateQue[action.id];
        } else {
          newStateQue[action.id].status = 'REQUEST_END';
        }
      }
      return {
        idCount: state.idCount,
        que: newStateQue
      };
    default:
      return state;
  }
};

const useHttpQue = (host, axiosConfig) => {
  const [requests, dispatchRequest] = useReducer(requestReducer, {
    que: {},
    idCount: 0
  });

  const sendRequest = (relativeUrl, callback, reqData, method, cleanAfter) => {
    dispatchRequest({
      type: 'REQUEST_INIT',
      relativeUrl: relativeUrl,
      callback: data => {
        callback(data);
      },
      reqData: reqData,
      cleanAfter: cleanAfter,
      method: method
    });
  };

  //send request using axios
  useEffect(() => {
    // console.log('que', requests.que);
    for (let index of Object.keys(requests.que)) {
      let id = requests.que[index].id;
      if (requests.que[index].status === 'REQUEST_INIT') {
        console.log('Axios req: ' + requests.que[index].relativeUrl);
        dispatchRequest({ type: 'REQUEST_SEND', id });

        const successHandler = data => {
          // console.log('success');
          dispatchRequest({ type: 'REQUEST_SUCCESS', data: data.data, id });
        };

        const errorHandler = error => {
          // console.log('error');
          dispatchRequest({ type: 'REQUEST_ERROR', error, id });
        };

        let url = host + requests.que[index].relativeUrl;
        let aconfig = {
          ...axiosConfig,
          url,
          method: requests.que[index].method,
          data: requests.que[index].reqData
        };
        Axios(aconfig)
          .then(successHandler)
          .catch(errorHandler);
      } else if (requests.que[index].status === 'REQUEST_SUCCESS') {
        // console.log(
        //   'CALLBACK',
        //   requests.que[index].callback,
        //   requests.que[index].resData
        // );
        requests.que[index].callback(requests.que[index].resData);
        dispatchRequest({ type: 'REQUEST_CLEAN', id });
      } else if (requests.que[index].status === 'REQUEST_ERROR') {
        // console.log(
        //   'CALLBACK ERROR',
        //   requests.que[index].callback,
        //   requests.que[index].resData
        // );
        requests.que[index].callback({});
        dispatchRequest({ type: 'REQUEST_CLEAN', id });
      }
    }
    // eslint-disable-next-line
  }, [requests]);

  return [sendRequest, requests.que];
};

export default useHttpQue;
