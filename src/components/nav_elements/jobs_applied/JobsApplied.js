import React, { Component } from "react";
import './JobsApplied.css';
import SearchApp from './searching';

class JobsApplied extends Component {
  employeeData = [
    { name: "Joan", title: "developer", salary: 100000 },
    { name: "Enrique", title: "manager", salary: 200000 },
    { name: "Shana", title: "developer", salary: 105000 },
    { name: "Shana", title: "manager", salary: 105000 },
];
  render() {
  return (
  <div className="jobsapplied">
    <SearchApp data={this.employeeData} />
  </div>
 );
}
}

export default JobsApplied;
