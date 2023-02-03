import { Typography, Grid} from "@mui/material";
import Card from "../../components/Card/";
export default function HomeView({ characters }) {
  return (
    <>
    <Grid container spacing={2}>
        

      {characters ? (
        characters.map(({ name, id, image, species, location, status }) => (
            <Grid item key={id} xs={12} sm={6} md={3}>

                <Card
                  id={id}
                  title={name}
                  description={`Es de la especie ${species}, y vive en ${location.name} y está ${status}`}
                  image={image}
                />
                </Grid>
        ))
      ) : (
        <Typography>No characters for now</Typography>
      )}
    </Grid>
    </>
  );
}
