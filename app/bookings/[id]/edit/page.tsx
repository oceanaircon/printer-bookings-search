import { fetchBookingById, loadBookers, loadPrinters } from "@/app/lib/data";
import Form from "@/app/ui/bookings/edit-form";

export default async function UpdateBookingPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const booking = await fetchBookingById(id);
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  return (
    <main>
      <Form booking={booking} bookers={bookers} printers={printers} />
    </main>
  );
}