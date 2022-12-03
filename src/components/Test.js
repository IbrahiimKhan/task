import React, { useEffect, useState } from 'react'
import logo from "../assets/ultimate hrm logo-05-02 2.png"
const Test = () => {
  const [userList, setUserList] = useState([])
useEffect(()=>{
  const getValue = async()=>{
    const value = await fetch("https://test.nexisltd.com/test",{
    method:"GET",
    headers:{
       "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImtoYW4uc2JhLmlicmFoaW1AZ21haWwuY29tIiwiRmlyc3RfbmFtZSI6IklicmFoaW0iLCJMYXN0X25hbWUiOiJraGFuIiwiVWlkIjoiNjM4OWMyMDJhYjgwYmNiNDE1NzUxZTgyIiwiZXhwIjoxNjcwMDU4OTQ3fQ.E3nxpqMBKL0m-pxAIFHK8jh0URL1XmWnjufs5u92pys",
       "Content-Type":"Application/json"
     }
    })
    const result = await value.json()
    setUserList(Object.values(result))
    }
getValue()
})
  return (
    <>
   
   <div className="container">
  <img src={logo} alt="" className="logo main_logo" />
    <h2 className='text-center at-info'>Attendance Information</h2>
    <div className="table-wrapper">
    <table class="table">
  <thead>
  <tr>
    <th>Name</th>
    <th>Position</th>
    <th>Branch</th>
    <th>2022-11-01</th>
    <th>2022-11-02</th>
    <th>2022-11-03</th>
    <th>2022-11-04</th>
    <th>2022-11-05</th>
  </tr>
  </thead>
  <tbody>
      {
      userList.map((value,index)=>{
      return <tr key={index}>

      <td>{value.name}</td>
      <td>{value.position}</td>
      <td>{value.branch}</td>
      <td>{Object.values(value.attendance["2022-11-01"].status).join("")}</td>
      <td>{Object.values(value.attendance["2022-11-02"].status).join("")}</td>
      <td>{Object.values(value.attendance["2022-11-03"].status).join("")}</td>
      <td>{Object.values(value.attendance["2022-11-04"].status).join("")}</td>
      <td>{Object.values(value.attendance["2022-11-05"].status).join("")}</td>
     
     
      </tr>
      })
    }
  </tbody>
</table>
    </div>
   </div>
    </>
  )
}

export default Test