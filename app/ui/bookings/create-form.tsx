import { BookerField, PrinterField } from "@/app/lib/definitions";
import { createBooking } from "@/app/lib/actions";

export default function Form({
  bookers,
  printers,
}: {
  bookers: BookerField[];
  printers: PrinterField[];
}) {
  return (
    <form action={createBooking}>
      <label htmlFor="booker" className="mb-2 block text-sm font-medium">
        Ügyfél
      </label>
      <select name="bookerId" id="booker" defaultValue="">
        {bookers.map((booker) => (
          <option key={booker.id} value={booker.id}>
            {booker.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label htmlFor="printer" className="mb-2 block text-sm font-medium">
        Printer
      </label>
      <select name="printerId" id="printer" defaultValue="">
        {printers.map((printer) => (
          <option key={printer.id} value={printer.id}>
            {printer.name}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label htmlFor="discount">Kedvezmény:</label>
      <br />
      <input type="number" name="discount" />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
