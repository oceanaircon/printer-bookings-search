import React from "react";
import Link from "next/link";
import Search from "../ui/search";
import { Suspense } from "react";
import BookingsTable from "../ui/bookings/bookingsTable";

const BookingsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <Link href="/bookings/new">
        <p>Új szerződés</p>
      </Link>
      <br />

      <Search placeholder="Szerződés kereső..." />
      <br />
      <br />
      <Suspense key={query + currentPage} fallback={""}>
        <BookingsTable query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default BookingsPage;
