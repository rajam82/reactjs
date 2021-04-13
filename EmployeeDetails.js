import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import axios from 'axios'

//This Component is a child Component of Employees Component
export default class EmployeeDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getEmployeeDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Employee Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getEmployeeDetails(this.props.val)
    }
  }

  //Function to Load the Employeedetails data from json.
  getEmployeeDetails(id) {
    axios.get('assets/json/employee' + id + '.json').then(response => {
      this.setState({EmployeeDetails: response})
    })
  };

  render() {
    if (!this.state.EmployeeDetails)
      return (<p>Loading Data</p>)
    return (<div className="Employeedetails">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{this.state.EmployeeDetails.data.empname}</Card.Title>
      <Card.Text>
      <p>Name : {this.state.EmployeeDetails.data.empname}</p>
      <p>Email : {this.state.EmployeeDetails.data.empemail}</p>
      <p>Phone : {this.state.EmployeeDetails.data.empphone}</p>
      </Card.Text>
    
    </Card.Body>
  </Card>
    
     
    </div>)
  }
}
