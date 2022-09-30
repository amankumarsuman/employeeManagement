import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import {useSelector} from "react-redux"
function AddEmployeeForm({editData}) {
const data=useSelector((state)=>state?.employeeData?.data)
const status=useSelector((state)=>state?.edit)
console.log(data)
console.log(status)
console.log(editData)
    const init={
        empl_altemail:"",
        empl_firstname: "",
      empl_lastname: "",
      empl_surname: "",
      empl_rmanager_empl_id: "",
      empl_hr_empl_id: 2,
      empl_jbgr_id: "",
    //   empl_joindate: "",
      empl_dob: "",
      empl_designation: "",
      empl_offemail: "",
      empl_pemail:"",
      empl_mobile: "",
      empl_altemail: "",
      empl_bloodgroup: "",
      empl_gender: "",
      empl_lastUpdatedDate: "",
      empl_lastUpdatedUser: "",
      empl_address: "",
      empl_fatherName: "",
      empl_status: '',
      password: ""
    }

    const [input,setInput] =useState(status?data:init)


    const handleChange=(e)=>{
        const {name,value}=e.target
        setInput({...input,[name]:value})

    }
console.log(input)
const handleSubmit=()=>{
    const {empl_altemail,
        empl_firstname,
      empl_lastname,
      empl_surname,
      empl_rmanager_empl_id, 
      empl_hr_empl_id,
      empl_jbgr_id,
    //   empl_joindate, 
      empl_dob,
      empl_designation, 
      empl_offemail,
      empl_pemail,
      empl_mobile, 
    
      empl_bloodgroup, 
      empl_gender,
      empl_lastUpdatedDate,
      empl_lastUpdatedUser,
      empl_address,
      empl_fatherName,
      empl_status,
      password}=input


axios.post("http://localhost:5028/AdminEmployee/V1/AddEmployee",{
 
        empl_firstname,
      empl_lastname,
      empl_surname,
      empl_rmanager_empl_id, 
      empl_hr_empl_id,
      empl_jbgr_id,
    //   empl_joindate, 
      empl_dob,
      empl_designation, 
      empl_offemail,
      empl_pemail,
      empl_mobile, 
      empl_altemail, 
      empl_bloodgroup, 
      empl_gender,
      empl_lastUpdatedDate,
      empl_lastUpdatedUser,
      empl_address,
      empl_fatherName,
      empl_status,
      password,
})
}
function handleUpdate(){


    const {empl_altemail,
        empl_firstname,
      empl_lastname,
      empl_surname,
      empl_rmanager_empl_id, 
      empl_hr_empl_id,
      empl_jbgr_id,
    //   empl_joindate, 
      empl_dob,
      empl_designation, 
      empl_offemail,
      empl_pemail,
      empl_mobile, 
    
      empl_bloodgroup, 
      empl_gender,
      empl_lastUpdatedDate,
      empl_lastUpdatedUser,
      empl_address,
      empl_fatherName,
      empl_status,
      password}=input


axios.post("http://localhost:5028/Employee/V1/UpdateEmployee",{
 
        empl_firstname,
      empl_lastname,
      empl_surname,
      empl_rmanager_empl_id, 
      empl_hr_empl_id,
      empl_jbgr_id,
    //   empl_joindate, 
      empl_dob,
      empl_designation, 
      empl_offemail,
      empl_pemail,
      empl_mobile, 
      empl_altemail, 
      empl_bloodgroup, 
      empl_gender,
      empl_lastUpdatedDate,
      empl_lastUpdatedUser,
      empl_address,
      empl_fatherName,
      empl_status,
      password,
})


}

  return (
    <div>
      <form>
        <Grid container spacing={2}>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_altemail" label="Alternate Email" value={input.empl_altemail} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_firstname" label="First Name" value={input.empl_firstname} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_lastname" label="Last Name" value={input.empl_lastname} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_surname" label="Surname" value={input.empl_surname} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_rmanager_empl_id" label="Manager Employee ID" value={input.empl_rmanager_empl_id} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_hr_empl_id" label="HR Email ID" value={input.empl_hr_empl_id} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_jbgr_id" label="JBGR ID" value={input.empl_jbgr_id} />
            </Grid>
            <Grid item xs={4}>
{/* <TextField onChange={handleChange} name="empl_joindate" label="Joining Date"  value={input.empl_joindate} /> */}
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_dob" label="Date Of Birth"  value={input.empl_dob} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_designation" label="Designation" value={input.empl_designation} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_offemail" label="Office Email" value={input.empl_offemail} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_pemail" label="Personal Email" value={input.empl_pemail} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_altemail" label="Alternate Email" value={input.empl_altemail} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_mobile" label="Mobile" type="number" value={input.empl_mobile} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_bloodgroup" label="Blood Group" value={input.empl_bloodgroup} />
            </Grid>
            <Grid item xs={4}>
            {/* <Box sx={{ minWidth: 80 }}>
      <FormControl sx={{width:"220px"}}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.empl_gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
          <MenuItem value="O">Other</MenuItem>
        </Select>
      </FormControl>
    </Box> */}
<TextField onChange={handleChange} name="empl_gender" label="Gender"  value={input.empl_gender} />

            </Grid>

            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_lastUpdatedDate" label="Last Updated" value={input.empl_lastUpdatedDate} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_lastUpdatedUser" label="Last Updated User"  value={input.empl_lastUpdatedUser} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_address" label="Address"  value={input.empl_address} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_fatherName" label="Father Name"  value={input.empl_fatherName} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="empl_status" label="status"   value={input.empl_status} />
            </Grid>
            <Grid item xs={4}>
<TextField onChange={handleChange} name="password" label="Password"  type="password" value={input.password} />
            </Grid>
        </Grid>
      </form>
      {status?<Button variant="contained" onClick={handleUpdate}>UPDATE</Button>:<Button variant="contained" onClick={handleSubmit}>ADD</Button>}
      
    </div>
  )
}

export default AddEmployeeForm
