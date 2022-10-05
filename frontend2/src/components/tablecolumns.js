const tablecolumns = [
  {
    Header: 'Submitter',
    accessor: 'submitterID'
  },{
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'Authors',
      accessor: 'authors'
    }, {
      Header: 'Journal Name',
      accessor: 'journalName'
    },{
      Header: 'Volume#',
      accessor: 'volumeNumber'
    },{
      Header: 'Pages',
      accessor: 'pages'
    },{
      Header: 'Pub. Year',
      accessor: 'yearOfPublication'
    },{
      Header: 'DOI',
      accessor: 'doi'
    },{
      Header: 'Accepted',
      accessor: 'accepted'
    },{
      Header: 'Rejected',
      accessor: 'rejected'
    }
  ]

  module.exports = tablecolumns
