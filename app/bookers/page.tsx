import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import { UpdateBooker } from "../ui/buttons";
import { DeleteBooker } from "../ui/deletebuttons";

const BookersPage = async () => {
  const bookers = await prisma.booker.findMany();

  return (
    <div>
      <Link href="/bookers/new">
        <p>Új ügyfél</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Cím</th>
            <th>Adószám</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookers.map((booker) => (
            <tr key={booker.id}>
              <th>{booker.id}</th>
              <th>{booker.name}</th>
              <td>{booker.email}</td>
              <td>{booker.phone}</td>
              <td>{booker.address}</td>
              <td>{booker.taxnumber}</td>
              <td>
                <UpdateBooker id={booker.id} />
                <DeleteBooker id={booker.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookersPage;
