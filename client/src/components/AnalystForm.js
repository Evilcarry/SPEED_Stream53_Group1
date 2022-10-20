import { useState } from 'react';

function AnalystForm(row) {
  const [extract, setExtract] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(row.doi + row.title + extract);
  }

  return (
    <form onSubmit={handleSubmit}>
        <textarea 
          value={extract}
          onChange={(e) => setExtract(e.target.value)}
        />
      <input type="submit" />
    </form>
  )
}
export default AnalystForm