import React from "react";
import { Categories } from "../components/Categories";
import { NewsList } from "../components/NewsList";
import { useParams } from "react-router-dom";

export const NewsPage = () => {
  const { category } = useParams();
  console.log(category || "all");

  return (
    <>
      <Categories />
      <NewsList category={category || "all"} />
    </>
  );
};
