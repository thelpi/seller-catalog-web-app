import { Typography } from "@mui/material";
import { string } from "prop-types";
import { Link } from "react-router-dom";
import { LargeField } from "../../ds/atoms";

export default function ProductDescription({ name, description, id }) {
  return (
    <LargeField>
      <Typography component={Link} to={`/products/${id}`}>
        {name}
      </Typography>
      <Typography noWrap>{description}</Typography>
    </LargeField>
  );
}

ProductDescription.propTypes = {
  name: string,
  description: string,
  id: string,
};
