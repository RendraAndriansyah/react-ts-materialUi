import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next"];

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);
  console.log({ value });
  console.log({ skill });
  const handleChange = (e: any, newValue: string | null) => {
    setValue(newValue);
  };

  const handleChange2 = (e: any, newValue: skill | null) => {
    setSkill(newValue);
  };
  return (
    <>
      <Stack spacing={2} pb={2} width={"15rem"}>
        <Autocomplete
          options={skills}
          renderInput={(e) => <TextField {...e} label="skills" />}
          value={value}
          onChange={handleChange}
          freeSolo
        />
        <Autocomplete
          options={skillOptions}
          renderInput={(e) => <TextField {...e} label="skills object value" />}
          value={skill}
          onChange={handleChange2}
        />
      </Stack>
    </>
  );
};

export default MuiAutocomplete;
