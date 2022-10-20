import Styles from "../../components/tablestyle.js";
import Table from "../../components/SpeedTable.js";
import TablecolumnsSearch from "../../components/TablecolumnsSearch.js";
import Dropdown from "../../components/Dropdown.js";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const SearchPage = () =>{

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://speed-stream53-group1.herokuapp.com/articles/");
      setData(result.data);
    })();
  }, []);
  /*axios
  .get("https://speed-stream53-group1.herokuapp.com/articles?isAnalised=true")
  .then((response) => {
    setData(response.data);
  })
  .catch((error) => {
    console.error(error);
  });*/
  return (
    <div className="SearchPage">
      <h2>SPEED Database</h2>
      <Dropdown/>
      <Styles>
      <Table columns={TablecolumnsSearch} data={data} />
      </Styles>
    </div>
  );
}
export default SearchPage
