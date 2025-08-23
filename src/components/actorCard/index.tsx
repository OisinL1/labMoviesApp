import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseActorProps } from "../../types/interfaces";
import img from "../../images/film-poster-placeholder.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { ActorsContext } from "../../contexts/actorsContext";

interface ActorCardProps {
  actor: BaseActorProps;
  action?: (actor: BaseActorProps) => React.ReactNode;
}

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  const { favourites } = useContext(ActorsContext);
  const isFavourite = favourites.includes(actor.id);

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          isFavourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        sx={styles.media}
        image={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : img}
        alt={actor.name}
      />
      <CardContent>
        {action && action(actor)}
        <Link to={`/actors/${actor.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
