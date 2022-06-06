import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableHeaderConfig from "../components/TableHeaderConfig.js";
import TableSetUp from "../components/TableSetUp.js";
import TestTypeDropDown from '../components/TestTypeDropdown.js';

function SubmitForm() {

  const [dropdownSelect, setDropdownSelect] = useState("");

  const handleDropdownChange = event => {
    setDropdownSelect(event.target.value);
    console.log(`Selected ${event.target.value}`)
  }

  const [articles, setArticles] = useState();

  async function getData() {
    return axios({ //you need to return in your saveFormData scope also
      method: 'get',
      url: '/api/articles/',
    })
      .catch((error) => {
        console.log(error);
        return error
      })
      .then((response) => {
        console.log(response);
        return response.data;
      });
  };

  async function getArticles() {
    return getData().then(response => {
      console.log(response);
      setArticles(response);
      return response
    });
  }

  const filterArticles = async (articlesRes) => {
    var list = [];
    articlesRes?.forEach((article) => {
      if (article.article_data.se_method?.toLowerCase().includes(dropdownSelect.toLowerCase())) {
        list.push(article);
      }
      console.log({ list })
      setArticles(list);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  // This fetches data on dropdown change.
  useEffect(() => {
    console.log("Changing data")
    getArticles().then((data) => {
    if (dropdownSelect !== "" && dropdownSelect !== "None") {
      filterArticles(data);
    }
  });
  }, [dropdownSelect]);

  return (
    <>
      <h1>Articles</h1>
      <TestTypeDropDown onChange={handleDropdownChange} />
      {articles && <TableSetUp
        data={articles}
        columns={TableHeaderConfig}
      />}
    </>
  );
};

export default SubmitForm;