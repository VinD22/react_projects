import React from 'react';
import { Grid } from "@material-ui/core";
import Header from "./Header.js";
import Content from "./Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} />
      </Grid>
    </Grid>
  )
}

export default App;
