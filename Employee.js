import React,{Component} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import EmployeeDetails from './EmployeeDetails'

export default class Employee extends Component{
	constructor(props){
		super(props)
		this.state={
				selectedEmployee:100
		}
	}
	
	componentDidMount(){
		this.getEmployeeData();
	}
	
	getEmployeeData(){
		 axios.get('assets/json/employeelist.json').then(response => {
		      this.setState({employeeList: response})
		    })
	}
	render(){
		 if (!this.state.employeeList)
		      return (<p>Loading data</p>)
		    return (<div className="container" >
		      <div className="item">
		        {

		          this.state.employeeList.data.map(employee => 
		          <Card style={{ width: '18rem' }}>
		          <Card.Img variant="top" src="holder.js/100px180" />
		          <Card.Body>
		            <Card.Title>{employee.empname}</Card.Title>
		            <Card.Text>
		            <p>{employee.empemail}</p>
		              <p>{employee.empphone}</p>
		              <Button bsStyle="info" onClick={() => this.setState({selectedEmployee: employee.empid})}>

		                Click to View Details

		              </Button>
		            </Card.Text>
		          
		          </Card.Body>
		        </Card>
		          
		          )
		        }
		      </div>
		      <div className="item">
		      <EmployeeDetails val={this.state.selectedEmployee}/>
		      </div>
		    </div>)
	}
}