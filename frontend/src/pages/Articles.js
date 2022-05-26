import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableHeaderConfig from "../components/TableHeaderConfig.js";
import TableSetUp from "../components/TableSetUp.js";

function SubmitForm() {

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase());
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

  // This fetches data on search.
  useEffect(() => {
    if (searchTerm !== "" && typeof (articles) !== "undefined") {
      var list = [];
      articles.forEach((article) => {
        if (article.article_data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          list.push(article);
        }
      });
      setArticles(list);
    }
    if (searchTerm === "") {
      getArticles();
    }
  }, [searchTerm])

  return (
    <>
      <h1>Articles</h1>
      <input
        type="text"
        placeholder="Search Method"
        value={searchTerm}
        onChange={handleChange}
      />
      {articles && <TableSetUp
        data={articles}
        columns={TableHeaderConfig}
      />}
    </>
  );
};

export default SubmitForm;