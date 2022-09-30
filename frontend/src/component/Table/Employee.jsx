import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "./Table.css"
import EmployeeDilogbox from '../dialogueBox/EmployeeDilogbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Check from '../user/Check';
import AddEmployeeForm from '../employeeForm/AddEmployeeForm';
import { editEmployeeData } from '../redux/action';
import {useDispatch} from "react-redux"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function Employee() {
  const [empData, setEmpData] = useState([])
  const [singleData, setSingleData] = useState([])
  const [open, setOpen] = React.useState(false);
  const [editData,setEditData]=useState({})
  const [isEdit,setIsEdit]=useState(false)

  const dispatch=useDispatch()
const navigate=useNavigate()
  useEffect(() => {
    axios.get("http://localhost:5028/AdminEmployee/V1/AllEmployees")
      .then((res) => setEmpData(res.data.result))
  }, [])

  const handleClick = (data) => {
    setSingleData([data])
    setOpen(true);
    console.log(setSingleData, "data")
  }
  const handleClose = () => {
    setOpen(false);
  };
  console.log(empData)


const handleEdit=(row)=>{
  setIsEdit(true)
setEditData(row)
const payload={
  data:row,
  edit:true
}
dispatch(editEmployeeData(payload))
navigate("/addempdata")
}
// console.log(editData)

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* this is sidebar */}

      <div style={{ display: "flex", justifyContent: "space-between", width: "100%",marginTop:"20px" }}>


        <Paper sx={{ minWidth: 180, height: 580, textAlign: "center" }} elevation={4}>
          <FormControl sx={{ width: "130px", marginTop: "20px", }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={select}
              label="select"
            // onChange={handleChange}

            >

              <Link to="/employeeData" style={{ textDecoration: "none" }}>
                <MenuItem value={"Employees"}>Employees </MenuItem>
              </Link>
              <Link to="/departmentData" style={{ textDecoration: "none" }}>
                <MenuItem value={"Department"}>Department</MenuItem>
              </Link>
              <Link to="/Induction" style={{ textDecoration: "none" }}>
                <MenuItem value={"Induction"}>Induction</MenuItem>
              </Link>
              <Link to="/offerletter" style={{ textDecoration: "none" }}>
                <MenuItem value={"Offer Letter"}>Offer Letter</MenuItem>

              </Link>
              <Link to="/Leaves" style={{ textDecoration: "none" }}>
                <MenuItem value={"Leaves"}>Leaves</MenuItem>

              </Link>

              <MenuItem value={"Attendance"}>Attendance</MenuItem>

              {/* <MenuItem value={30}>Thirty</MenuItem> */}

            </Select>
          </FormControl>
        </Paper>

      </div>
      {/* this is INDUCTION TABLE */}

      <div style={{ textAlign: "center", marginRight: "200px",marginLeft:"20px" }}>

        <Paper sx={{ minWidth: 240, textAlign: "center" }} elevation={10}>
          <h1>EMPLOYEES TABLE</h1>

        </Paper >
        <Paper sx={{textAlign:"center",border:"1px solid red",marginBottom:"10px",padding:"5px",width:"5%",backgroundColor:"#1976d2",color:"white"}}><AddIcon/></Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center"> Employee ID</StyledTableCell>
                {/* <StyledTableCell align="center"> empl_altemail</StyledTableCell>
                <StyledTableCell align="center">empl_bloodgroup</StyledTableCell>
                <StyledTableCell align="center">empl_designation</StyledTableCell>
                <StyledTableCell align="center">empl_dob</StyledTableCell> */}
                {/* <StyledTableCell align="center">empl_fatherName</StyledTableCell>
                <StyledTableCell align="center">rowempl_firstname</StyledTableCell> */}
                {/* <StyledTableCell align="center">empl_hr_empl_id</StyledTableCell>
                <StyledTableCell align="center">eempl_id</StyledTableCell>
                <StyledTableCell align="center">empl_jbgr_id</StyledTableCell> */}

                {/* <StyledTableCell align="center">empl_joindate</StyledTableCell>
                <StyledTableCell align="center">empl_lastUpdatedDate</StyledTableCell>
                <StyledTableCell align="center">empl_lastUpdatedUser</StyledTableCell> */}
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">LastName</StyledTableCell>
                <StyledTableCell align="center">SurName</StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>

                <StyledTableCell align="center">Mobile</StyledTableCell>
                {/* <StyledTableCell align="center">empl_offemail</StyledTableCell>
                <StyledTableCell align="center">empl_pemail</StyledTableCell>
                <StyledTableCell align="center">empl_rmanager_empl_id</StyledTableCell> */}
                <StyledTableCell align="center">Status</StyledTableCell>
                {/* <StyledTableCell align="center">password</StyledTableCell> */}
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>












              </TableRow>
            </TableHead>
            <TableBody>
              {empData.map((row) => (
                <StyledTableRow
                  onClick={() => handleClick(row)} key={row.empl_id}>


                  <StyledTableCell align="center">{row.empl_id}</StyledTableCell>
                  {/* <StyledTableCell align="center">{row.empl_altemail}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_bloodgroup}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_designation}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_dob}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{row.empl_fatherName}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{row.rowempl_firstname}</StyledTableCell> */}
                  {/* <StyledTableCell align="center">{row.empl_hr_empl_id}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_id}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_jbgr_id}</StyledTableCell>

                  <StyledTableCell align="center">{row.empl_joindate}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_lastUpdatedDate}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_lastUpdatedUser
                  }</StyledTableCell> */}
                  <StyledTableCell align="center">{row.empl_firstname}</StyledTableCell>

                  <StyledTableCell align="center">{row.empl_lastname}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_surname }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_gender}</StyledTableCell>

                  <StyledTableCell align="center">{row.empl_mobile
                  }</StyledTableCell>
                  {/* <StyledTableCell align="center">{row.empl_offemail }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_pemail }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_rmanager_empl_id}</StyledTableCell> */}
                  <StyledTableCell align="center">{row.empl_status
                  }</StyledTableCell>

                  {/* <StyledTableCell align="center">{row.password}</StyledTableCell> */}
                  <StyledTableCell align="center">
                    <img className="img" src={row.empl_photo} alt="" /></StyledTableCell>
                  <StyledTableCell align="center" sx={{display:"flex"}}>
<div onClick={()=>handleEdit(row)}>

                    <EditIcon />
</div>
                    <DeleteIcon/>
    </StyledTableCell>
                 

   


                </StyledTableRow>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <EmployeeDilogbox open={open} handleClose={handleClose} singleData={singleData} />
      </div>
    </div>
  )
}

export default Employee






