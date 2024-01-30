import { CategoryField } from "@/app/lib/definitions";
import { createPrinter } from "@/app/lib/actions";

export default function Form({ categories }: { categories: CategoryField[] }) {
  return (
    <form action={createPrinter}>
      <label htmlFor="category" className="mb-2 block text-sm font-medium">
        Kategória
      </label>
      <select name="categoryId" id="category">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label htmlFor="serial">Serial:</label>
      <br />
      <input type="text" name="serial" />
      <br />
      <label htmlFor="name">Név:</label>
      <br />
      <input type="text" name="name" />
      <br />
      <label htmlFor="description">Leírás:</label>
      <br />
      <input type="text" name="description" />
      <br />
      <fieldset>
        <legend>Printer állapota</legend>
        <div>
          <div>
            <div>
              <input
                id="available"
                name="status"
                type="radio"
                value="SZABAD"
                defaultChecked={true}
              />
              <label htmlFor="available">Szabad</label>
            </div>
            <div className="flex items-center">
              <input id="leased" name="status" type="radio" value="FOGLALT" />
              <label htmlFor="leased">Foglalt</label>
            </div>
          </div>
        </div>
      </fieldset>
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
