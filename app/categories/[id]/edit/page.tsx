import { fetchCategoryById } from "@/app/lib/data";
import Form from "@/app/ui/categories/edit-form";

export default async function UpdateCategoryPage({
  params,
}: {
  params: { id: number };
}) {
  const id = params.id;
  const category = await fetchCategoryById(id);
  console.log(category);

  return (
    <main>
      <Form category={category} />
    </main>
  );
}
