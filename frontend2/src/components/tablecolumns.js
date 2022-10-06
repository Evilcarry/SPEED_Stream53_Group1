const tablecolumns = [
    {
      Header: 'ID',
      accessor: '_id'
    }, {
      Header: 'Submitter',
      accessor: 'submitterID'
    }, {
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
      accessor: ''
    }, {
      Header: 'DOI',
      accessor: 'doi'
    }, {
      Header: 'Accepted',
      accessor: 'accepted'
    }, {
      Header: 'Rejected',
      accessor: 'rejected'
    }, {
      Header: 'Priority',
      accessor: 'priority'
    }, {
      Header: '__V',
      accessor: '__v'
    }
  ]

  module.exports = tablecolumns
