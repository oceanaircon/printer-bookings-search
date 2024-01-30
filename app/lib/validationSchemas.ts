import { z } from "zod";

export const createBookerSchema = z.object({
  name: z.string().min(1),
  address: z.string(),
  taxnumber: z.string(),
  phone: z.string(),
  email: z.string().min(1),
});

export const createBookingSchema = z.object({
  bookerId: z.coerce.number(),
  printerId: z.coerce.number(),
  discount: z.coerce.number(),
});

export const createCategorySchema = z.object({
  name: z.string().min(1),
  fee: z.coerce.number(),
});

export const createPrinterSchema = z.object({
  categoryId: z.coerce.number(),
  serial: z.string().min(1).max(191),
  name: z.string().min(1).max(191),
  description: z.string().min(1).max(191),
  status: z.enum(["SZABAD", "FOGLALT"]),
});

export const createServiceSchema = z.object({
  name: z.string().min(1),
});

export const createWorksheetSchema = z.object({
  bookingId: z.coerce.number(),
  serviceId: z.coerce.number(),
  status: z.enum(["FOLYAMATBAN", "BEFEJEZETT"]),
});

export const updateWorksheetSchema = z.object({
  bookingId: z.coerce.number(),
  serviceId: z.coerce.number(),
  repairDeadline: z.string(),
  status: z.enum(["FOLYAMATBAN", "BEFEJEZETT"]),
});
