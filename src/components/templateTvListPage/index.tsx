import React from "react";
import Header from "../headerTvList";
import Grid from "@mui/material/Grid";
import TvList from "../tvList";
import { TvListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const TemplateTvListPage: React.FC<TvListPageTemplateProps> = ({ tvSeries, title, action }) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TvList action={action} tvSeries={tvSeries} />
      </Grid>
    </Grid>
  );
};

export default TemplateTvListPage;
