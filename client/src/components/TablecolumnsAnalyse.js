const TablecolumnsAnalyse = [
    {
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'Author',
      accessor: 'author'
    }, {
      Header: 'Journal',
      accessor: 'journalName'
    }, {
      Header: 'Pub Year',
      accessor: 'yearOfPublication'
    }, {
      Header: 'Vol #',
      accessor: 'volumeNumber'
    }, {
      Header: 'Pages',
      accessor: 'pages'
    }, {
      Header: 'DOI',
      accessor: 'doi'
    }, {
      Header: 'Add to Database',
      accessor: 'addtodatabase',
      Cell: row => (
        <div>
          
           <button onClick={e=> handleEdit(row.row.original)}>Save</button>
        </div>
        )
    }
    
  ]
  function handleEdit(row) {
    console.log(row);
  }
  export default TablecolumnsAnalyse
