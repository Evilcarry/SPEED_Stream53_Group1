import Styles from "../../components/tablestyle.js";
import Table from "../../components/SpeedTable.js";
import TablecolumnsModerate from "../../components/TablecolumnsModerate";
import Dropdown from "../../components/Dropdown.js";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ModeratePage = () =>{

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://speed-stream53-group1.herokuapp.com/articles");
      setData(result.data);
    })();
  }, []);
  return (
    <div className="ModeratePage">
      <h2>Moderation Database</h2>
      <Dropdown/>
               <Styles>
      <Table columns={TablecolumnsModerate} data={data} />
      </Styles>
    </div>
  );
}
export default ModeratePage
