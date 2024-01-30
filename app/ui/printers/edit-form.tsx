import { CategoryField, PrinterField } from "@/app/lib/definitions";
import { updatePrinter } from "@/app/lib/actions";

export default function Form({
  printer,
  categories,
}: {
  printer: PrinterField;
  categories: CategoryField[];
}) {
  const updatePrinterWithId = updatePrinter.bind(null, printer.id);

  return (
    <form action={updatePrinterWithId}>
      <label htmlFor="category" className="mb-2 block text-sm font-medium">
        Kategória
      </label>
      <select name="categoryId" id="category" defaultValue={printer.categoryId}>
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
      <input type="text" name="serial" defaultValue={printer.serial} />
      <br />
      <label htmlFor="name">Név:</label>
      <br />
      <input type="text" name="name" defaultValue={printer.name} />
      <br />
      <label htmlFor="description">Leírás:</label>
      <br />
      <input
        type="text"
        name="description"
        defaultValue={printer.description}
      />
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
                defaultChecked={printer.status === "SZABAD"}
              />
              <label htmlFor="available">Szabad</label>
            </div>
            <div>
              <input
                id="leased"
                name="status"
                type="radio"
                value="FOGLALT"
                defaultChecked={printer.status === "FOGLALT"}
              />
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
