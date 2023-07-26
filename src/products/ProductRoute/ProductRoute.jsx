import { useParams } from "react-router-dom";
import { Page } from "../../ds/pages";
import { useProduct } from "@/hooks";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
import { Price } from "@/ds/atoms";
import { ProductCondition } from "../ProductCondition";

export default function ProductRoute() {
  const { id } = useParams();
  const { isLoading, data: product } = useProduct({ id });

  if (isLoading) {
    return <LinearProgress />;
  }

  const productProperties = [
    { name: "Nom", value: product.name },
    { name: "Prix", value: product.price, type: "number", renderCell: Price },
    {
      name: "Condition",
      value: product.condition,
      renderCell: ProductCondition,
    },
    { name: "Stock", value: product.stock, type: "number" },
  ];

  return (
    <Page title={product.name}>
      <Alert severity="success">
        <AlertTitle>Votre fiche produit a été enrichie avec succès</AlertTitle>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        aperiam expedita aspernatur voluptatem. Ad, eum qui dolores libero
        recusandae nobis cumque excepturi nulla omnis, enim, suscipit debitis
        exercitationem dicta temporibus?
      </Alert>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, my: 2 }}>
        <Button variant="outlined" startIcon={<Favorite />}>
          Ajouter aux favoris
        </Button>
        <Button startIcon={<Edit />}>Editer la fiche</Button>
      </Box>
      <Box component="article" sx={{ display: "flex", gap: 2 }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
        />
        <TableContainer>
          <Typography variant="h6">Propriétés</Typography>
          <Table aria-label="fiche produit">
            <TableBody>
              {productProperties.map(
                ({ name, value, type, renderCell = ({ value }) => value }) => (
                  <TableRow sx={{ border: 0 }} key={name}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell
                      align={type == "number" ? "right" : "left"}
                      sx={{ fontWeight: "bold" }}
                    >
                      {renderCell({ value })}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Page>
  );
}
