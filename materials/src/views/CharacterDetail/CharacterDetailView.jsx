import { Grid, Paper, Typography } from "@mui/material";

export default function CharacterDetailView({ character }) {
  return (
    <Grid container>
      {character ? (
        <>
          <Grid item xs={12} md={4}>
            <Paper elevation={2}
            sx={{
                backgroundImage: `url(${character.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 400,
            }}
            >
              
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Name: {character.name}</Typography>
            <Typography variant="h6">Status: {character.status}</Typography>
            <Typography variant="h6">Species: {character.species}</Typography>
            <Typography variant="h6">Gender: {character.gender}</Typography>
            <Typography variant="h6">
              Origin: {character.origin.name}
            </Typography>
            <Typography variant="h6">
              Location: {character.location.name}
            </Typography>
          </Grid>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Grid>
  );
}
