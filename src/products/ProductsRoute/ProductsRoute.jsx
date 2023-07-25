import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { withinRow } from "../../hoc";
import { Page } from "../../ds/pages";
import { useProducts } from "../../hooks";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { ProductDescription } from "../ProductDescription";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: withinRow(ProductImage),
  },
  {
    field: "productDescription",
    headerName: "Name",
    flex: 1,
    renderCell: withinRow(ProductDescription),
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: withinRow(ProductCondition),
  },
  {
    field: "price",
    headerName: "Prix",
    renderCell: withinRow(ProductPrice),
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
  },
];

export default function ProductsRoute() {
  const { isLoading, data: products } = useProducts();

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Page title="Gestion du catalogue">
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Page>
  );
}
