const TablecolumnsSearch = [
    {
      Header: 'Title',
      accessor: 'title',
      show: true
    }, {
      Header: 'Author',
      accessor: 'author',
      show: true
    }, {
      Header: 'Journal',
      accessor: 'journalName',
      show: true
    }, {
      Header: 'Pub Year',
      accessor: 'yearOfPublication',
      show: true
    }, {
      Header: 'Extract',
      accessor: 'articleText',
      Cell: row => (
        <div>
           <button onClick={e=> handleEdit(row.row.original)}>Accept</button>
        </div>
        )
    },{
      Header: 'DOI',
      accessor: 'doi',
      show: true
    }
    
  ]
  function handleEdit(row) {
    console.log(row);
  }

  export default TablecolumnsSearch
