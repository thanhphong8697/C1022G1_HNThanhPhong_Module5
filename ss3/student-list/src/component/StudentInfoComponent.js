import React, { Component } from 'react';
class StudentInfoComponent extends Component{
    constructor(){
        super();
        this.state = {
           studentList: [
            {
                id: 1,
                name: 'Hà Nguyễn Thanh Phong',
                age: 18,
                address: 'Đà Nẵng'
            },
            {
                id: 2,
                name: 'Nguyễn Lê Anh Quân',
                age: 18,
                address: 'Đà Nẵng'
            },
            {
                id: 3,
                name: 'Dương Minh Trường',
                age: 18,
                address: 'Đà Nẵng'
            },
            {
                id: 4,
                name: 'Nguyễn Thanh Tú',
                age: 18,
                address: 'Đà Nẵng'
            },
            {
                id: 5,
                name: 'Lê Văn Phát Đạt',
                age: 18,
                address: 'Huế'
            }
           ]
        }
    }

    render(){
        return (
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
   {
            this.state.studentList.map((student, index) => (
                <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))
            }
  </tbody>
</table>
        )
        
    }
}
export default StudentInfoComponent;