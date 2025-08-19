import React, { MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseTvProps } from "../../types/interfaces";

const AddToTvFavouritesIcon: React.FC<BaseTvProps> = (tv) => {
  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const key = "tvFavourites";
    const existing: number[] = JSON.parse(localStorage.getItem(key) || "[]");
    if (!existing.includes(tv.id)) {
      localStorage.setItem(key, JSON.stringify([...existing, tv.id]));
    }
  };

  return (
    <IconButton aria-label="add tv to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavouritesIcon;
