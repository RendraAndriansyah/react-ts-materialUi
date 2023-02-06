import { Bookmark, BookmarkBorder, CleaningServices } from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnc] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ acceptTnC });
  console.log({ skills });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    index === -1
      ? setSkills([...skills, e.target.value])
      : setSkills(skills.filter((skill) => skill !== e.target.value));
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms & conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value={"HTML"}
              control={
                <Checkbox
                  checked={skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value={"CSS"}
              control={
                <Checkbox checked={skills.includes("CSS")} onChange={handleSkillChange} />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value={"Javascript"}
              control={
                <Checkbox
                  checked={skills.includes("Javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
