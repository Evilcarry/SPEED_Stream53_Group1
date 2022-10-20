import { useState } from 'react';
import axios from 'axios'

function AnalystForm(row) {
  const [extract, setExtract] = useState("");
  const client = axios.create({
    baseURL: "https://speed-stream53-group1.herokuapp.com/analiser"
})


  function handleSubmit(title, doi, articleText) {
    console.log(title, doi, articleText);
    try {
        client
        .patch('', {
            title: title,
            doi: doi,
            articleText: articleText
        })       
    }catch (err){
        console.log(err.message)
    }
  }

  return (
    <form onSubmit={e => handleSubmit(row.title, row.doi, extract)}>
        <textarea 
          value={extract}
          onChange={(e) => setExtract(e.target.value)}
        />
      <input disabled={!extract} type="submit" />
    </form>
  )
}
export default AnalystForm