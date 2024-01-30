import Form from "@/app/ui/bookings/create-form";
import { loadBookers, loadPrinters } from "@/app/lib/data";

export default async function NewBookingPage() {
  const bookers = await loadBookers();
  const printers = await loadPrinters();

  return (
    <main>
      <Form bookers={bookers} printers={printers} />
    </main>
  );
}
