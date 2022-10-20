import Styles from "../../components/tablestyle.js";
import Table from "../../components/SpeedTable.js";
import TablecolumnsAnalyse from "../../components/TablecolumnsAnalyse.js";
import Dropdown from "../../components/Dropdown.js";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const AnalysePage = () =>{

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://speed-stream53-group1.herokuapp.com/articles?accepted=true&isAnalised=false");
      setData(result.data);
    })();
  }, []);
  return (
    <div className="AnalysePage">
      <h2>Moderation Database</h2>
      <Dropdown/>
               <Styles>
      <Table columns={TablecolumnsAnalyse} data={data} />
      </Styles>
    </div>
  );
}
export default AnalysePage
