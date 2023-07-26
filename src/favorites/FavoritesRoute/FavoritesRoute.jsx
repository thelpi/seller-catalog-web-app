import { DataGrid } from "@mui/x-data-grid";
import { Page } from "../../ds/pages";
import { productColumns } from "@/products/productColumns";
import { useReducer } from "react";

export default function FavoritesRoute() {
  // TODO store global, redux, etc... ?
  const [products] = useReducer(() => {}, []);

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
