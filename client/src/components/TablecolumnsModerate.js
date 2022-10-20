import axios from 'axios'

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
        <button onClick={e => handleEdit(row.row.original)}>Accept</button>
      </div>
    )
  }, {
    Header: 'Reject',
    accessor: 'rejected',
    Cell: row => (
      <div>
        <button onClick={e => handleEdit(row.row.original)}>Reject</button>
      </div>
    )
  }
]
function handleEdit(row) {
  const client = axios.create({
    baseURL: "https://speed-stream53-group1.herokuapp.com/moderator"
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      client
        .patch('', {
          accepted: row.accepted,
          rejected: row.rejected,
          doi: row.doi
        })
    } catch (err) {
      if(!err?.message){
        setErrMsg('No Server Response')
      }else if (err.response?.status === 400){
        setErrMsg('Missing accepted or rejected or doi')
      }else{
        setErrMsg('Something went wrong')
      }
    }
  }

  handleSubmit
}

export default TablecolumnsModerate
