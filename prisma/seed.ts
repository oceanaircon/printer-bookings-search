import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("bagoly1234", 12);
  const user = await prisma.user.upsert({
    where: { email: "kakukk@kakukk.com" },
    update: {},
    create: {
      email: "kakukk@kakukk.com",
      name: "Kakukk",
      password,
    },
  });
  console.log({ user });

  const booker = await prisma.booker.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Bérlő",
      address: "8000 Székesfehérvár, Fő utca 1.",
      email: "tesztemail@tesztemail.hu",
    },
  });
  console.log({ booker });

  const category = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Kategória",
      fee: 100,
    },
  });
  console.log({ category });

  const printer = await prisma.printer.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Printer",
      serial: "12345678ABCD",
      categoryId: 1,
    },
  });
  console.log({ printer });

  const service = await prisma.service.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Teszt Munka",
    },
  });
  console.log({ service });

  const booking = await prisma.booking.upsert({
    where: { id: 1 },
    update: {},
    create: {
      bookerId: 1,
      printerId: 1,
    },
  });
  console.log({ booking });

  let hatarido = new Date();
  hatarido.setHours(hatarido.getHours() + 72);

  const worksheet = await prisma.worksheet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      bookingId: 1,
      serviceId: 1,
      repairDeadline: hatarido,
    },
  });
  console.log({ worksheet });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
