import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();
  return `ProductPage: ${id}`;
}
