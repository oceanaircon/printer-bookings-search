import { fetchServiceById } from "@/app/lib/data";
import Form from "@/app/ui/services/edit-form";

export default async function UpdateServicePage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const service = await fetchServiceById(id);
  console.log(service);

  return (
    <main>
      <Form service={service} />
    </main>
  );
}
