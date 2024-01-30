import { fetchPrinterById, loadCategories } from "@/app/lib/data";
import Form from "@/app/ui/printers/edit-form";

export default async function UpdatePrinterPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const printer = await fetchPrinterById(id);
  const categories = await loadCategories();
  console.log(printer);

  return (
    <main>
      <Form printer={printer} categories={categories} />
    </main>
  );
}
