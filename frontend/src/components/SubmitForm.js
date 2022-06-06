import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import TestTypeDropDown from './TestTypeDropdown';
const bibtexParse = require('bibtex-parse');

function SubmitForm() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [source, setSource] = useState();
  const [keyword, setKeyword] = useState();
  const [industryCode, setIndustryCode] = useState();
  const [doi, setDoi] = useState();
  const [accessionNumber, setAccessionNumber] = useState();
  const [se_method, setSeMethod] = useState();
  const [year, setYear] = useState();
  const [claim, setClaim] = useState();
  let fileReader;

  const handleFile = (file) => {
    if (file) {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  const handleFileRead = () => {
    const content = fileReader.result;
    const parsedData = bibtexParse.entries(content);

    //Set data from file.
    setTitle(parsedData[0]["TITLE"]);
    setAuthor(parsedData[0]["AUTHOR"]);
    setSource(parsedData[0]["SOURCE"] || parsedData[0]["URL"]);
    setYear(parsedData[0]["YEAR"]);
    setKeyword(parsedData[0]["KEYWORDS"]);
    setDoi(parsedData[0]["DOI"]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title, 
      author: author, 
      source: source, 
      keyword: keyword, 
      industryCode: industryCode, 
      doi: doi, 
      accessionNumber: accessionNumber,
      se_method: se_method,
      claim: claim
    };

    axios
    .post('http://localhost:8082/api/articles', data)
    .then(() => {
      setTitle("");
      setAuthor("");
      setSource("");
      setKeyword("");
      setIndustryCode("");
      setDoi("");
      setAccessionNumber("");
      setClaim("");
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(`Error in CreateBook!: ${err}`);
    })
};

  return (
    <form onSubmit={e => { handleSubmit(e) }}>
      <label>Title:</label>
      <br />
      <input
        name='title'
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <br />
      <label>Authors:</label>
      <br />
      <input
        name='author'
        type='text'
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <br />
      <label>Source:</label>
      <br />
      <input
        name='source'
        type='text'
        value={source}
        onChange={e => setSource(e.target.value)}
        required
      />
      <br />
      <label>Keywords:</label>
      <br />
      <input
        name='keyword'
        type='text'
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <br />
      <label>Industry Codes:</label>
      <br />
      <input
        name='industrycode'
        type='text'
        value={industryCode}
        onChange={e => setIndustryCode(e.target.value)}
      />
      <br />
      <label>DOI:</label>
      <br />
      <input
        name='doi'
        type='text'
        value={doi}
        onChange={e => setDoi(e.target.value)}
      />
      <br />
      <label>Accession Number:</label>
      <br />
      <input
        name='accessionnumber'
        type='text'
        value={accessionNumber}
        onChange={e => setAccessionNumber(e.target.value)}
      />
      <br />
      <label>Year of Publication:</label>
      <br />
      <input
        name='year'
        type='text'
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <br />
      <label>Claim:</label>
      <br />
      <input
        name='claim'
        type='text'
        value={claim}
        onChange={e => setClaim(e.target.value)}
        required
      />
      <TestTypeDropDown onChange={e => setSeMethod(e.target.value)}/>
      <br />
      <input
        type="file"
        accept=".bib"
        onChange={(e) => handleFile(e.target.files[0])}
      />
      <input
        type='submit'
        value='Submit Article'
      />
    </form>
  )
}

export default SubmitForm;