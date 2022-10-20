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
        <button onClick={e => handleEdit(row.row.original, row.row.accepted = true, row.row.rejected = false)}>Accept</button>
      </div>
    )
  }, {
    Header: 'Reject',
    accessor: 'rejected',
    Cell: row => (
      <div>
        <button onClick={e => handleEdit(row.row.original, row.row.accepted = false, row.row.rejected = true)}>Reject</button>
      </div>
    )
  }
]

function handleEdit(row, accepted, rejected) {
  const client = axios.create({
    baseURL: "https://speed-stream53-group1.herokuapp.com/moderator"
  })

  try {
    client
      .patch('', {
        accepted: accepted,
        rejected: rejected,
        doi: row.doi
      })
  } catch (err) {
    console.log(err.message)
  }
}

export default TablecolumnsModerate
