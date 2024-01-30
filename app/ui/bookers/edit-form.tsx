import { BookerField } from "@/app/lib/definitions";
import { updateBooker } from "@/app/lib/actions";

export default function Form({ booker }: { booker: BookerField }) {
  const updateBookerWithId = updateBooker.bind(null, booker.id);

  return (
    <form action={updateBookerWithId}>
      <input type="hidden" name="id" value={booker.id} />
      <label htmlFor="name">Név:</label>
      <br />
      <input type="text" name="name" defaultValue={booker.name} />
      <br />
      <label htmlFor="address">Cím:</label>
      <br />
      <input type="text" name="address" defaultValue={booker.address} />
      <br />
      <label htmlFor="taxnumber">Adószám:</label>
      <br />
      <input type="text" name="taxnumber" defaultValue={booker.taxnumber} />
      <br />
      <label htmlFor="phone">Telefon:</label>
      <br />
      <input type="text" name="phone" defaultValue={booker.phone} />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" name="email" defaultValue={booker.email} />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
