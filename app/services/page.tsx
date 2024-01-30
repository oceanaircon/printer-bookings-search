import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import { DeleteService } from "../ui/deletebuttons";
import { UpdateService } from "../ui/buttons";

const ServicesPage = async () => {
  const services = await prisma.service.findMany();

  return (
    <div>
      <Link href="/services/new">
        <p>Új hiba</p>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Hiba neve</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <th>{service.id}</th>
              <td>{service.name}</td>
              <td>
                <UpdateService id={service.id}></UpdateService>
                <DeleteService id={service.id}></DeleteService>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesPage;
