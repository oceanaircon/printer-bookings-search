import { BookerField, BookingField, PrinterField } from "@/app/lib/definitions";
import { updateBooking } from "@/app/lib/actions";

export default function Form({
  booking,
  bookers,
  printers,
}: {
  booking: BookingField;
  bookers: BookerField[];
  printers: PrinterField[];
}) {
  const updateBookingWithId = updateBooking.bind(null, booking.id);

  return (
    <form action={updateBookingWithId}>
      <label htmlFor="booker" className="mb-2 block text-sm font-medium">
        Ügyfél
      </label>
      <select name="bookerId" id="booker" defaultValue={booking.bookerId}>
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
      <select name="printerId" id="printer" defaultValue={booking.printerId}>
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
      <input type="number" name="discount" defaultValue={booking.discount} />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
