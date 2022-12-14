import Styles from "../../components/tablestyle.js";
import Table from "../../components/SpeedTable.js";
import TablecolumnsAnalyse from "../../components/TablecolumnsAnalyse";
import Dropdown from "../../components/Dropdown.js";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const AnalystPage = () => {  

    const [data, setData] = useState([]);

    useEffect(() => {
      (async () => {
        const result = await axios("https://speed-stream53-group1.herokuapp.com/analiser");
        setData(result.data);
      })();
    }, []);
    return (
      <div className="SearchPage">
        <h2>Analiser Page</h2>
        <Dropdown/>
                 <Styles>
        <Table columns={TablecolumnsAnalyse} data={data} />
        </Styles>
      </div>
    );
}
export default AnalystPage