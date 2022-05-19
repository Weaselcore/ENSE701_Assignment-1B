import React from 'react';
import axios from 'axios';

function SubmitForm() {

  return (
    <>
      <h1>Articles</h1>

      <ul>
        {axios.get('http://localhost:8082/api/articles/').then(result => result.map(e => (<li>{e}</li>)))}
      </ul>
    </>
  );
};

export default SubmitForm;