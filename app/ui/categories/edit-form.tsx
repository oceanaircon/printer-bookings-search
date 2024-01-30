import { CategoryField } from "@/app/lib/definitions";
import { updateCategory } from "@/app/lib/actions";

export default function Form({ category }: { category: CategoryField }) {
  const updateCategoryWithId = updateCategory.bind(null, category.id);

  return (
    <form action={updateCategoryWithId}>
      <input type="hidden" name="id" value={category.id} />
      <label htmlFor="name">Név:</label>
      <br />
      <input type="text" name="name" defaultValue={category.name} />
      <br />
      <label htmlFor="address">Díj:</label>
      <br />
      <input type="number" name="fee" defaultValue={category.fee} />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
