import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';



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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EmployeeDilogbox({open,handleClose,singleData}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       
      >
       
        <DialogContent>
          
 <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700, textAlign: "center" }} aria-label="customized table">
            <TableHead>
              <TableRow >
                <StyledTableCell align="center"> empl_address</StyledTableCell>
                <StyledTableCell align="center"> empl_altemail</StyledTableCell>
                <StyledTableCell align="center">empl_bloodgroup</StyledTableCell>
                <StyledTableCell align="center">empl_designation</StyledTableCell>
                <StyledTableCell align="center">empl_dob</StyledTableCell>
                <StyledTableCell align="center">empl_fatherName</StyledTableCell>
                <StyledTableCell align="center">rowempl_firstname</StyledTableCell>
                <StyledTableCell align="center">empl_gender</StyledTableCell>
                <StyledTableCell align="center">empl_hr_empl_id</StyledTableCell>
                <StyledTableCell align="center">eempl_id</StyledTableCell>
                <StyledTableCell align="center">empl_jbgr_id</StyledTableCell>

                <StyledTableCell align="center">empl_joindate</StyledTableCell>
                <StyledTableCell align="center">empl_lastUpdatedDate</StyledTableCell>
                <StyledTableCell align="center">empl_lastUpdatedUser</StyledTableCell>
                <StyledTableCell align="center">empl_lastname</StyledTableCell>
                <StyledTableCell align="center">empl_mobile</StyledTableCell>
                <StyledTableCell align="center">empl_offemail</StyledTableCell>
                <StyledTableCell align="center">empl_pemail</StyledTableCell>
                <StyledTableCell align="center">empl_rmanager_empl_id</StyledTableCell>
                <StyledTableCell align="center">empl_status</StyledTableCell>
                <StyledTableCell align="center">empl_surname</StyledTableCell>
                <StyledTableCell align="center">password</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>












              </TableRow>
            </TableHead>
            <TableBody>
              {singleData.map((row) => (
                <StyledTableRow  key={row.empl_id}>
                 
                 
                  <StyledTableCell align="center">{row.empl_address}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_altemail}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_bloodgroup}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_designation}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_dob}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_fatherName}</StyledTableCell>
                  <StyledTableCell align="center">{row.rowempl_firstname}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_gender
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_hr_empl_id
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_id}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_jbgr_id
                  }</StyledTableCell>

                  <StyledTableCell align="center">{row.empl_joindate}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_lastUpdatedDate}</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_lastUpdatedUser
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_lastname
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_mobile
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_offemail
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_pemail
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_rmanager_empl_id
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_status
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.empl_surname
                  }</StyledTableCell>
                  <StyledTableCell align="center">{row.password

                  }</StyledTableCell>
                  <StyledTableCell align="center">
                    <img className="img" src={row.empl_photo
                    } alt="" /></StyledTableCell>


                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}
