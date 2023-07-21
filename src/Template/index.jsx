import Header from "@/Header";
import { Outlet } from "react-router-dom";

export default function Template() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
}
