import Styles from "../../components/tablestyle.js";
import Table from "../../components/SpeedTable.js";
import tablecolumns from "../../components/tablecolumns.js";
import Dropdown from "../../components/Dropdown.js";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const SearchPage = () =>{

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://speed-stream53-group1.herokuapp.com/dash/articles");
      setData(result.data);
    })();
  }, []);
  return (
    <div className="SearchPage">
      <h2>SPEED Database</h2>
      <Dropdown/>
               <Styles>
      <Table columns={tablecolumns} data={data} />
      </Styles>
    </div>
  );
}
export default SearchPage
