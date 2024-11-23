import React from "react";
import { Category } from "./categories/categories";
import Footer from "./footer";

const FooterMain = async () => {
  const response = await fetch(
    "https://api.shope.com.bd/api/v1/public/hero-categories"
  );
  const categories: Category[] = await response.json();

  return (
    <>
      <Footer categories={categories} />
    </>
  );
};

export default FooterMain;
