import AnalystForm from "./AnalystForm"
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
      Cell: row => (AnalystForm(row.row.original))
    }
  ]
  export default TablecolumnsAnalyse
