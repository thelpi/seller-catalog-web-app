import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Page } from "../../ds/pages";
import { useProducts, useSearch } from "../../hooks";
import { Search } from "@mui/icons-material";
import { productColumns } from "../productColumns";

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
          columns={productColumns}
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
