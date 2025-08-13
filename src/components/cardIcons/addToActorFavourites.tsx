import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseActorProps } from "../../types/interfaces";

const AddToActorFavouritesIcon: React.FC<BaseActorProps> = () => {
  // Placeholder for future context logic
  const onUserSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Add to favourites logic for actors will go here
  };
  return (
    <IconButton aria-label="add actor to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorFavouritesIcon;
