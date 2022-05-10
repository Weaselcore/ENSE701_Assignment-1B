
import React from 'react';
import { useState } from 'react';

  function SubmitForm({ addArcticle }) {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [source, setSource] = useState();
    const [keyword, setKeyword] = useState();
    const [industryCode, setIndustryCode] = useState();
    const [doi, setDoi] = useState();
    const [accessionNumber, setAccessionNumber] = useState();

    const handleSubmit= (e) => {
      addArcticle([title, author, source, keyword, industryCode, doi, accessionNumber])
      e.preventDefault();
    }
  
    return (
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Title:</label>
        <br />
        <input 
          name='title' 
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br/>
        <label>Authors:</label>
        <br />
        <input 
          name='author' 
          type='text' 
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <br />
        <label>Source:</label>
        <br />
        <input
          name='source' 
          type='text'
          value={source}
          onChange={e => setSource(e.target.value)}
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
        <br/>
        <input 
          type='submit' 
          value='Submit Article' 
        />
      </form>
    )
  }

  export default SubmitForm;