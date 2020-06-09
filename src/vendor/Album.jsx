import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Self Help
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    image: "https://unsplash.com/photos/BuNWp1bL0nc/download?force=true&w=640",
    title: "Motivation",
    heading: "Need Motivation?",
    description: "Motivation for depressed",
    link: "/motivation",
    btntext: "Let me help",
    style: {
      background: "rgba(240,70,110, .8)",
      width: "100%",
    },
    linkTo: "/motivation",
  },
  {
    image: "https://unsplash.com/photos/Yui5vfKHuzs/download?force=true&w=640",
    title: "Exercise",
    heading: "Let's exercise",
    description: "Healthy Body, healthy mind",
    link: "/yoga",
    btntext: "Be fit",
    style: {
      background: "rgba(255,172,69, .8)",
      width: "100%",
    },
    linkTo: "/yoga",
  },
  {
    image: "https://unsplash.com/photos/b2qszO9C7sw/download?force=true&w=640",
    title: "Relaxation",
    heading: "Wash away my stress",
    description: "Relaxing Music",
    link: "/relax",
    btntext: "Take me there",
    style: {
      background: "rgba(37,206,167, .8)",
      width: "100%",
    },
    linkTo: "/relax",
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div
          className={classes.heroContent}
          style={{
            // background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
            background: "url(https://i.gifer.com/h6V.gif) ",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: " center",
            // box-shadow:inset 0 0 0 2000px rgba(255, 0, 150, 0.3);
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              style={{
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Let us help ourselves
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{
                color: "rgba(255, 255, 255, 0.3)",
              }}
              paragraph
            >
              In a world full of depressed people, let us unite together as one
              community and let us get help when the world shuts us down and we
              may do the same.
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
            {/* </Grid> */}
            {/* </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>

                  <Link
                    to={card.linkTo}
                    style={{
                      // listStyle: "none",
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={card.style}
                    >
                      {card.btntext}
                    </Button>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer} style={{ height: "100px" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Self Help Inc
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          style={{
            paddingBottom: "15px",
            // marginBottom: "15px",
          }}
        >
          Let's find a purpose in our life. Let's get better together.
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
