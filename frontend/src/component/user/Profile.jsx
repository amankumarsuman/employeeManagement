// import { useAuth0 } from '@auth0/auth0-react';
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useState } from 'react';

const Profile = () => {
  const [edit, setEdit] = useState(false);
  // const callAbout = async () => {
  //   try {
  //     const res = await fetch("/user/about", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     // setuserdata(data);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   callAbout();
  // }, []);

  const userData = useSelector(
    (state) => state?.loggedInData?.LoggedUserData?.LoggedUserData
  );

  const [userDataInput, serUserDataInput] = useState(userData);
  console.log(userData);
  return (
    <Paper
      sx={{ height: "430px", width: "30%", textAlign: "center", marginTop: 10 }}
      elevation={10}
      className="column"
    >
      <Grid container sx={{ marginTop: "20px" }} spacing={2}>
        <Grid item xs={6}>
          <TextField
            label={"First Name"}
            name="fname"
            value={userDataInput?.fname}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={"Last Name"}
            name="lname"
            value={userDataInput?.lname}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={"Email"}
            name="email"
            value={userDataInput?.email}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={"Office Email"}
            name="offEmail"
            value={userDataInput?.offEmail}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={"Mobile No"}
            name="mobile"
            value={userDataInput?.mobile}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={"Address"}
            name="addr"
            value={userDataInput?.addr}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={"Password"}
            name="password"
            type="password"
            value={userDataInput?.password}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
