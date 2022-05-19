import React from 'react';
import axios from 'axios';

function SubmitForm() {
  <h1>Articles</h1>

  axios
  .get('http://localhost:8082/api/articles/')
  .then((data) => {
    <div>data</div>
  })
  .catch(err => {
    console.log(`Error in CreateBook!: ${err}`);
  })
};

module.exports = SubmitForm