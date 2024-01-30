import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import { UpdateCategory } from "../ui/buttons";
import { DeleteCategory } from "../ui/deletebuttons";

const CategoriesPage = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <Link href="/categories/new">
        <p>Új kategória</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Díj</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <th>{category.id}</th>
              <th>{category.name}</th>
              <td>{category.fee}</td>
              <td>
                <UpdateCategory id={category.id}></UpdateCategory>
                <DeleteCategory id={category.id}></DeleteCategory>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesPage;
