import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Stack>
        <Stack direction={"row"} spacing={2} paddingBottom={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction={"row"} spacing={2} paddingBottom={2}>
          <TextField label="small secondary" size="small" color="secondary" />
          <TextField label="medium success" size="medium" color="success" />
        </Stack>
        <Stack direction={"row"} spacing={2} paddingBottom={2}>
          <TextField
            label="Email"
            type={"email"}
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required={!value ? true : false}
            error={!value}
            helperText={!value ? "Required" : "use valid email"}
          />
          <TextField
            label="Password"
            type={"password"}
            variant="outlined"
            helperText={`don't share your password`}
          />
          <TextField
            label="you can't edit this form"
            type={"search"}
            variant="outlined"
            disabled
          />
          <TextField label={"only read"} inputProps={{ readOnly: true }} />
        </Stack>
        <Stack direction={"row"} spacing={2} paddingBottom={2}>
          <TextField
            label={"amount"}
            InputProps={{
              startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
            }}
          />
          <TextField
            label={"amount"}
            InputProps={{
              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextField;
