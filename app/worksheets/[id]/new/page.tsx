import Form from "@/app/ui/worksheets/create-form";
import { loadServices, fetchBookingById } from "@/app/lib/data";

export default async function NewWorksheetPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;

  const booking = await fetchBookingById(id);

  const services = await loadServices();

  return (
    <main>
      <Form booking={booking} services={services} />
    </main>
  );
}
