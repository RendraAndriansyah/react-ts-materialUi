import React from "react";
import { Typography } from "@mui/material";

const MuiTyphorapy = () => {
  return (
    <>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6" component={"h1"}>
        h6 heading
      </Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro a quos labore
        culpa! Modi, ducimus consequatur perferendis alias quam at corrupti incidunt
        inventore reprehenderit repudiandae unde porro consectetur tempora debitis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas numquam
        ab expedita repellendus dolorem, illum commodi aliquid tempora maxime eveniet eos
        neque fugit esse ex reprehenderit illo sunt quo.
      </Typography>
    </>
  );
};

export default MuiTyphorapy;
