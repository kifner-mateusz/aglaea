import React, { useState, useEffect } from 'react';
import useHttpQue from '../../hooks/useHttpQue';

const Tests = () => {
  const [sendRequest, requests] = useHttpQue(
    'https://shop-json-test-api.herokuapp.com/',
    {}
  );
  const [code, setCode] = useState([]);

  useEffect(() => {
    console.log('Tests');
    console.log(
      'send',
      sendRequest('products1', setCode, undefined, 'GET', false)
    );
  }, []);

  return (
    <div>
      <code>
        {requests.map((val, index) => {
          return <div key={index}>{'' + val}</div>;
        })}
        {console.log('requests: ', requests)}
      </code>
      <div>test: {code.length > 0 && code[0].id}</div>
    </div>
  );
};

export default Tests;
