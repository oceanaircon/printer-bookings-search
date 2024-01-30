import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import { UpdateWorksheet } from "../ui/buttons";
import { DeleteWorksheet } from "../ui/deletebuttons";

const WorksheetsPage = async () => {
  const worksheets = await prisma.worksheet.findMany({
    include: {
      booking: {
        include: {
          booker: {},
          printer: {},
        },
      },
      service: {},
    },
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Időpont</th>
            <th>Bejelentő</th>
            <th>Cím</th>
            <th>Telefon</th>
            <th>Email</th>
            <th>Printer cikkszám</th>
            <th>Printer</th>
            <th>Hiba neve</th>
            <th>Határidő</th>
            <th>Állapot</th>
          </tr>
        </thead>
        <tbody>
          {worksheets.map((worksheet) => (
            <tr key={worksheet.id}>
              <th>{worksheet.id}</th>
              <th>{worksheet.errorReportingTime.toString().slice(0, 16)}</th>
              <td>{worksheet.booking.booker.name}</td>
              <td>{worksheet.booking.booker.address}</td>
              <td>{worksheet.booking.booker.phone}</td>
              <td>{worksheet.booking.booker.email}</td>
              <td>{worksheet.booking.printer.serial}</td>
              <td>{worksheet.booking.printer.name}</td>
              <td>{worksheet.service.name}</td>
              <td>{worksheet.repairDeadline.toString().slice(0, 16)}</td>
              <td>{worksheet.status}</td>
              <td>
                <UpdateWorksheet id={worksheet.id}></UpdateWorksheet>
                <DeleteWorksheet id={worksheet.id}></DeleteWorksheet>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorksheetsPage;
