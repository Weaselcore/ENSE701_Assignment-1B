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

  const getArticles = async () => {
    try {
      await axios.get('api/articles').then(response => {
        setArticles(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.log("error", error)
    };
  };

  // This fetches the data on load.
  useEffect(() => {
    getArticles()
  }, [])

    // This fetches data on dropdown change.
    useEffect(() => {
      if (dropdownSelect !== "") {
        var list = [];
        getArticles().then(articles.forEach((article) => {
          if (article.article_data.se_method?.toLowerCase().includes(dropdownSelect.toLowerCase())) {
            list.push(article);
          }
        }));
        setArticles(list);
      }
      else if (dropdownSelect === "None") {
        getArticles();
      }
    }, [dropdownSelect])

  return (
    <>
      <h1>Articles</h1>
      <TestTypeDropDown onChange={handleDropdownChange}/>
      {articles && <TableSetUp
        data={articles}
        columns={TableHeaderConfig}
      />}
    </>
  );
};

export default SubmitForm;