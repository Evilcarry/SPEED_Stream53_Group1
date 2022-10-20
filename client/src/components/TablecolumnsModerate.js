const TablecolumnsModerate = [
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
      Header: 'Accept',
      accessor: 'accepted',
      Cell: row => (
        <div>
           <button onClick={e=> handleEdit(row.row.original)}>Accept</button>
        </div>
        )
    }, {
      Header: 'Reject',
      accessor: 'rejected',
      Cell: row => (
        <div>
           <button onClick={e=> handleEdit(row.row.original)}>Reject</button>
        </div>
        )
    }
  ]
  function handleEdit(row) {
    console.log(row);
  }

  export default TablecolumnsModerate
