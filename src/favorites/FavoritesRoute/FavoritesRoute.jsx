import { DataGrid } from "@mui/x-data-grid";
import { Page } from "../../ds/pages";
import { productColumns } from "@/products/productColumns";
import { FavoritesContext } from "../../contexts";

export default function FavoritesRoute() {
  const products = FavoritesContext.useContext();

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
