import { DataGrid } from "@mui/x-data-grid";
import { Page } from "../../ds/pages";
import { productColumns } from "@/products/productColumns";
import { FavoritesContext } from "../../contexts";
import { useProductsByIds } from "../../hooks";
import { LinearProgress } from "@mui/material";

export default function FavoritesRoute() {
  const { favorites } = FavoritesContext.useContext();
  const { isLoading, data: products } = useProductsByIds({
    ids: favorites,
  });

  if (isLoading) return <LinearProgress />;

  return (
    <Page title="favoris">
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
        autoHeight
      />
    </Page>
  );
}
