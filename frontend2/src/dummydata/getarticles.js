import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '../components/Evidencetable';

class getarticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/API/article')
      .then(res => {
        this.setState({
          article: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  dataTable() {
    return this.state.article.map((data, i) => {
        return <Table obj={data} key={i} />;
    });
}

  render() {
    return (
        <div className="wrapper-users">
        <div className="container">
            <table className="table table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {this.dataTable()}
                </tbody>
            </table>
        </div>
    </div>
    )
  }
}

export default getarticles;