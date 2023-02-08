import {
  CleaningServices,
  Favorite,
  FavoriteBorder,
  GppBad,
  GppGood,
} from "@mui/icons-material";
import { Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [rating2, setRating2] = useState<number | null>(null);
  const [rating3, setRating3] = useState<number | null>(3);
  console.log({ rating });
  console.log({ rating2 });
  const handleChange = (e: React.ChangeEvent<{}>, newRating: number | null) => {
    setRating(newRating);
  };
  const handleChange2 = (e: React.ChangeEvent<{}>, newRating: number | null) => {
    setRating2(newRating);
  };
  return (
    <>
      <Stack>
        <Rating value={rating} onChange={handleChange} size={"large"} />
      </Stack>
      <Stack>
        <Rating
          value={rating2}
          onChange={handleChange2}
          precision={0.5}
          color={"success"}
          size={"large"}
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
        />
      </Stack>
      <Stack>
        <Typography variant="body1" pt={2}>
          Read Only
        </Typography>
        <Rating
          value={rating3}
          onChange={handleChange}
          size={"large"}
          readOnly
          icon={<GppGood fontSize="inherit" color="disabled" />}
          emptyIcon={<GppBad fontSize="inherit" />}
        />
      </Stack>
    </>
  );
};

export default MuiRating;
