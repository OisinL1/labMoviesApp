import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LanguageIcon from "@mui/icons-material/Language";
import { TvDetailsProps } from "../../types/interfaces";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
};

const TvDetails: React.FC<TvDetailsProps> = (tv) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<CalendarTodayIcon />} label={`First air: ${tv.first_air_date || "N/A"}`} sx={styles.chipLabel} />
        <Chip icon={<StarRate />} label={`Rating: ${tv.vote_average}`} sx={styles.chipLabel} />
        {typeof tv.number_of_seasons === "number" && (
          <Chip icon={<AccessTimeIcon />} label={`Seasons: ${tv.number_of_seasons}`} sx={styles.chipLabel} />
        )}
        {typeof tv.number_of_episodes === "number" && (
          <Chip icon={<AccessTimeIcon />} label={`Episodes: ${tv.number_of_episodes}`} sx={styles.chipLabel} />
        )}
        {tv.genres?.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>

      {tv.production_countries && tv.production_countries.length > 0 && (
        <Paper component="ul" sx={styles.chipSet}>
          {tv.production_countries.map((c) => (
            <li key={c.name}>
              <Chip icon={<LanguageIcon />} label={c.name} />
            </li>
          ))}
        </Paper>
      )}
    </>
  );
};

export default TvDetails;
