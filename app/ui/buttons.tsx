import Link from "next/link";

export function NewWorksheetButton({ id }: { id: number }) {
  return <Link href={`/worksheets/${id}/new`}>Új munkalap</Link>;
}

export function UpdateBooker({ id }: { id: number }) {
  return <Link href={`/bookers/${id}/edit`}>Szerkesztés</Link>;
}

export function UpdatePrinter({ id }: { id: number }) {
  return <Link href={`/printers/${id}/edit`}>Szerkesztés</Link>;
}

export function UpdateBooking({ id }: { id: number }) {
  return <Link href={`/bookings/${id}/edit`}>Szerkesztés</Link>;
}

export function UpdateWorksheet({ id }: { id: number }) {
  return <Link href={`/worksheets/${id}/edit`}>Szerkesztés</Link>;
}

export function UpdateCategory({ id }: { id: number }) {
  return <Link href={`/categories/${id}/edit`}>Szerkesztés</Link>;
}

export function UpdateService({ id }: { id: number }) {
  return <Link href={`/services/${id}/edit`}>Szerkesztés</Link>;
}
