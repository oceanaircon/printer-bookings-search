import React from "react";
import { NewWorksheetButton, UpdateBooking } from "../buttons";
import { DeleteBooking } from "../deletebuttons";
import { fetchFilteredBookings } from "../../lib/data";

export default async function BookingsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const bookings = await fetchFilteredBookings(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <br />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Név</th>
              <th>Email</th>
              <th>Printer</th>
              <th>Serial</th>
              <th>Díj</th>
              <th>Start</th>
              <th>Kedvezmény</th>
              <th>Munkalap</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr key={booking.id}>
                <th>{booking.id}</th>
                <th>{booking.booker.name}</th>
                <td>{booking.booker.email}</td>
                <td>{booking.printer.name}</td>
                <td>{booking.printer.serial}</td>
                <td>{booking.printer.category.fee}</td>
                <td>{booking.createdAt.toString().slice(0, 16)}</td>
                <td>{booking.discount}</td>
                <td>
                  <NewWorksheetButton id={booking.id} />
                </td>
                <td>
                  <UpdateBooking id={booking.id}></UpdateBooking>
                  <DeleteBooking id={booking.id}></DeleteBooking>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
