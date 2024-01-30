import { fetchWorksheetById, loadServices } from "@/app/lib/data";
import Form from "@/app/ui/worksheets/edit-form";

export default async function UpdateWorksheetPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const worksheet = await fetchWorksheetById(id);
  const services = await loadServices();

  return (
    <main>
      <Form worksheet={worksheet} services={services} />
    </main>
  );
}
