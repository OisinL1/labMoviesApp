import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

interface ActorDetailsProps {
  name: string;
  biography?: string;
  birthday?: string;
  place_of_birth?: string;
}

const styles = {
  root: { padding: 16, marginTop: 16 },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
    gap: 8,
  },
};

const ActorDetails: React.FC<ActorDetailsProps> = ({ name, biography, birthday, place_of_birth }) => {
  return (
    <>
      <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
        Overview
      </Typography>
      <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
        {name}
      </Typography>
      {biography && (
        <Typography variant="body1" paragraph>
          {biography}
        </Typography>
      )}
      <Paper component="ul" sx={styles.chipSet}>
        {birthday && (
          <li>
            <Chip label={`Birthday: ${birthday}`} color="primary" />
          </li>
        )}
        {place_of_birth && (
          <li>
            <Chip label={`Place of Birth: ${place_of_birth}`} />
          </li>
        )}
      </Paper>
    </>
  );
};

export default ActorDetails;
