import { withinRow } from "../hoc";
import { ProductActions } from "./ProductActions";
import { ProductCondition } from "./ProductCondition";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";

export const productColumns = [
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
  {
    field: "actions",
    headerName: "",
    sortable: false,
    renderCell: withinRow(ProductActions),
  },
];
