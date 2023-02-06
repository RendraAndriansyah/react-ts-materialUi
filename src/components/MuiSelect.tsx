import { CleaningServices } from "@mui/icons-material";
import { MenuItem, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [fruits, setFruits] = useState<string[]>([]);
  console.log(country);
  console.log(fruits);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };
  const handleChangeFruits = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fruit = e.target.value;
    setFruits(typeof fruit === "string" ? fruits : fruit);
  };
  return (
    <Stack direction={"row"} spacing={2}>
      <Box width={"15rem"}>
        <TextField
          label={"select country"}
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={"ID"}>Indonesia</MenuItem>
          <MenuItem value={"MY"}>Malaysia</MenuItem>
          <MenuItem value={"USA"}>United States</MenuItem>
        </TextField>
      </Box>
      <Box width={"15rem"}>
        <TextField
          label={"Choose your favorities"}
          select
          value={fruits}
          onChange={handleChangeFruits}
          SelectProps={{ multiple: true }}
          fullWidth
        >
          <MenuItem value={"Apple"}>Apple</MenuItem>
          <MenuItem value={"Banana"}>Banana</MenuItem>
          <MenuItem value={"Cantaulope"}>Cantaulope</MenuItem>
          <MenuItem value={"Durian"}>Durian</MenuItem>
          <MenuItem value={"Elderberry"}>Elderberry</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};
