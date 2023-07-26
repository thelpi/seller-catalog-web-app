import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { withinRow } from "../../hoc";
import { Page } from "../../ds/pages";
import { useProducts, useSearch } from "../../hooks";
import { ProductCondition } from "../ProductCondition";
import { ProductImage } from "../ProductImage";
import { ProductPrice } from "../ProductPrice";
import { ProductDescription } from "../ProductDescription";
import { Search } from "@mui/icons-material";

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
  const [searchTerm, { onSearchChange, searchSubmit }] = useSearch();
  const {
    isLoading,
    data: products,
    refetch,
  } = useProducts({ search: searchTerm });

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Page title="Gestion du catalogue">
      {/* Pas propre */}
      <Box
        sx={{ ml: 21, pb: 8 }}
        component="form"
        onSubmit={searchSubmit(refetch)}
      >
        <TextField
          sx={{ width: "630px" }}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          placeholder="Rechercher par GTIN ou SKU"
          value={searchTerm}
          onChange={onSearchChange}
          autoComplete="off"
        />
        <Button sx={{ ml: 1 }} onClick={searchSubmit(refetch)}>
          Recherche
        </Button>
      </Box>
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
