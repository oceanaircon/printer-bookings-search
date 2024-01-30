import prisma from "@/prisma/client";
import {
  CategoryField,
  BookerField,
  PrinterField,
  BookingField,
} from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

// kategóriák betöltése új printer létrehozásához

export async function loadCategories() {
  const categories: CategoryField[] = await prisma.category.findMany();
  return categories;
}

// ügyfelek betöltése új szerződés létrehozásához

export async function loadBookers() {
  const bookers: BookerField[] = await prisma.booker.findMany();
  return bookers;
}

// a "szabad" printerek betöltése új szerződés létrehozásához

export async function loadPrinters() {
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "SZABAD",
    },
  });
  return printers;
}

export async function loadBookings() {
  const bookings: BookingField[] = await prisma.booking.findMany();
  return bookings;
}

export async function loadPrintersForService() {
  const printers: PrinterField[] = await prisma.printer.findMany({
    where: {
      status: "FOGLALT",
    },
  });
  return printers;
}

export async function loadServices() {
  const services = await prisma.service.findMany();
  return services;
}

// id alapján kiválasztott rekordok UPDATE és DELETE funkciókhoz

export async function fetchBookingById(id: number) {
  noStore();

  const booking = await prisma.booking.findFirst({
    where: {
      id: Number(id),
    },
  });

  return booking as any;
}

export async function fetchBookerById(id: number) {
  noStore();

  const booker = await prisma.booker.findFirst({
    where: {
      id: Number(id),
    },
  });

  return booker as any;
}

export async function fetchPrinterById(id: number) {
  noStore();

  const printer = await prisma.printer.findFirst({
    where: {
      id: Number(id),
    },
  });

  return printer as any;
}

export async function fetchCategoryById(id: number) {
  noStore();

  const category = await prisma.category.findFirst({
    where: {
      id: Number(id),
    },
  });

  return category as any;
}

export async function fetchServiceById(id: number) {
  noStore();

  const service = await prisma.service.findFirst({
    where: {
      id: Number(id),
    },
  });

  return service as any;
}

export async function fetchWorksheetById(id: number) {
  noStore();

  const worksheet = await prisma.worksheet.findFirst({
    where: {
      id: Number(id),
    },
  });

  return worksheet as any;
}

const ITEMS_PER_PAGE = 8;
export async function fetchFilteredBookings(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    /*     const bookings = await prisma.$queryRaw(
      Prisma.sql`SELECT Booking.id, 
      Booker.name, Booker.email, 
      Printer.name, Printer.serial,
      Category.fee, 
      Booking.createdAt, Booking.discount 
      FROM Booking, Printer
      INNER JOIN Booker ON Booker.id = Booking.bookerId
      INNER JOIN Printer ON Printer.id = Booking.printerId
      INNER JOIN Category ON Category.id = Printer.categoryId
      Booker.name LIKE ${`%${query}%`} OR
      Booker.email LIKE ${`%${query}%`}
      ORDER BY Booking.createdAt DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`
    ); */

    const bookings = await prisma.booking.findMany({
      select: {
        id: true,
        booker: {
          select: {
            name: true,
            email: true,
          },
        },
        printer: {
          select: {
            name: true,
            serial: true,
            category: {
              select: {
                fee: true,
              },
            },
          },
        },
        createdAt: true,
        discount: true,
      },
      where: {
        OR: [
          {
            booker: {
              name: {
                contains: query,
              },
            },
          },
          {
            booker: {
              email: {
                contains: query,
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
      take: ITEMS_PER_PAGE,
      skip: offset,
    });

    return bookings;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Hiba a lekérdezésben.");
  }
}
