import { Stack, Box, Divider } from "@mui/material";

const MuiStack = () => {
  return (
    <>
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
          bgcolor="crimson"
          color={"antiquewhite"}
          width="15rem"
          height={"15rem"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Andriansyah
        </Box>
      </Stack>
    </>
  );
};

export default MuiStack;
