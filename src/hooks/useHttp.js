import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Axios from 'axios';

/**
|--------------------------------------------------
| Axios based Http hook
|
| @returns [sendRequest, loading, resData]
| sendRequest function that sends request with @param relativeUrl and @param callback and @param data
| loading var that return false when response is ready
| resData data from resopnse
|--------------------------------------------------
*/

const useHttp = () => {
  const [resData, setResData] = useState({});
  const [loading, setLoading] = useState(false);
  const shop = useContext(ShopContext);
  const [httpAction, setHttpAction] = useState();

  const resultHandler = res => {
    //console.log('Axios res:', res);
    setResData(res);
    setLoading(false);
    // httpAction(resData.data);
  };
  const errorHandler = err => {
    //console.log('Axios err:', err);
    if (
      err.response !== undefined &&
      err.response.data.error !== undefined &&
      err.response.data.error.message === 'shop failed'
    ) {
      shop.singOut();
    } else {
      setResData(undefined);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      typeof httpAction === 'function' &&
      loading === false &&
      resData !== undefined
    ) {
      httpAction(resData.data);
    }
  }, [loading]);

  const sendRequest = async (relativeUrl, callback, data) => {
    if (loading === false) {
      setLoading(true);
      setHttpAction(() => callback);
      //console.log('Axios req: ' + relativeUrl);
      if (data)
        await Axios.post(shop.host + relativeUrl, data, shop.axiosConfig).then(
          resultHandler,
          errorHandler
        );
      else
        await Axios.get(shop.host + relativeUrl, shop.axiosConfig).then(
          resultHandler,
          errorHandler
        );
    }
  };

  return [sendRequest, loading, resData];
};

export default useHttp;
