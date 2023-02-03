import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Header/";
export default function Layout() {
  return (
    <>
      <Header />
      <Grid container p={2}>
        <Outlet />
      </Grid>
    </>
  );
}
