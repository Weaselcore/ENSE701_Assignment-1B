import React from 'react';
import axios from 'axios';

function SubmitForm() {
  <h1>Articles</h1>

  const result = axios.get('http://localhost:8082/api/articles/');

  <div>{ result }</div>
};

export default SubmitForm;