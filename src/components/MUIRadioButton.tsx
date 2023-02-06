import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const MUIRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <FormControl error={!value ? true : false}>
        <FormLabel id="job-experience-group-label">Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio color={"success"} />}
            label="0-2"
            value={"0-2"}
          />
          <FormControlLabel
            control={<Radio color={"primary"} />}
            label="2-5"
            value={"2-5"}
          />
          <FormControlLabel
            control={<Radio color={"secondary"} />}
            label="6-10"
            value={"6-10"}
          />
        </RadioGroup>
        <FormHelperText>Choose your trully experience </FormHelperText>
      </FormControl>
    </Box>
  );
};
