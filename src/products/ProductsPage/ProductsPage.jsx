import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import db from "../../db.json";
import { withinRow } from "../../hoc";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: withinRow(ProductImage),
  },
  {
    field: "productDescription",
    headerName: "Name",
    valueGetter: ({ row }) => `${row.name} ${row.description}`,
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

export default function ProductsPage() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={db.products}
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
  );
}
