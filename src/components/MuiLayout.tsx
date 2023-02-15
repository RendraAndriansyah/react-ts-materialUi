import { Stack, Box, Divider, Grid, Paper } from "@mui/material";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "1rem", backgroundColor: "#eaaa62" }} elevation={10}>
      <Stack
        sx={{ border: "1px solid green" }}
        direction="row"
        spacing={2}
        p={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component={"div"}
          sx={{
            backgroundColor: "primary.main",
            display: "grid",
            color: "whitesmoke",
            width: "15rem",
            height: "15rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Rendra
        </Box>
        <Box
          display={"flex"}
          bgcolor="azure"
          color={"#454545"}
          width="15rem"
          height={"15rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Andriansyah
        </Box>
      </Stack>
      <Grid container pt={1} spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Box bgcolor={"success.light"} height={50}>
            1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} height={50}>
            2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"success.main"} height={50}>
            3{" "}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"error.main"} height={50}>
            4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiLayout;
