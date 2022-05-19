import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function SubmitForm() {

  const [articles ,setArticles] = useState()
  useEffect(() => {
    getArticles();
  }, [])

  const getArticles = async() => {
    const data = await axios.get('http://localhost:8082/api/articles/');
    setArticles(data);
  };

  return (
    <>
      <h1>Articles</h1>

      <ul>
        {articles.map(e => (<li>{e}</li>))}
      </ul>
    </>
  );
};

export default SubmitForm;