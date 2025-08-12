import React from "react";
import Header from "../headerActorList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import { TemplateActorListPageProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const TemplateActorListPage: React.FC<TemplateActorListPageProps> = ({ actors, title, action }) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={actors} />
      </Grid>
    </Grid>
  );
};

export default TemplateActorListPage;
