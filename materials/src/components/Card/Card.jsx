import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card as MUICard,
} from "@mui/material";
import Link from "../Link";

export default function Card({ image, title, description, id}) {
  return (
    <Link to={`${id}`}>
      <MUICard sx={{ marginTop: "18px", minHeight: 400, maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="Character"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Link>
  );
}
