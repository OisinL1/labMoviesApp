import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BaseActorProps } from "../../types/interfaces";
import img from "../../images/film-poster-placeholder.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface ActorCardProps {
  actor: BaseActorProps;
  action?: (actor: BaseActorProps) => React.ReactNode;
}

const styles = {
  card: { maxWidth: 200, },
  media: { height: 300 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};



const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography variant="h6" align="center">
          {actor.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={styles.media}
        image={actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : img}
        alt={actor.name}
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        {action && action(actor)}
        <Link to={`/actors/${actor.id}`} style={{ textDecoration: 'none', marginLeft: 8 }}>
          <Button variant="outlined" size="small" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
