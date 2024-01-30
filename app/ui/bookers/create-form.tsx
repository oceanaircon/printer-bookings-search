import { createBooker } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createBooker}>
      <label htmlFor="name">Név:</label>
      <br />
      <input type="text" name="name" />
      <br />
      <label htmlFor="address">Cím:</label>
      <br />
      <input type="text" name="address" />
      <br />
      <label htmlFor="taxnumber">Adószám:</label>
      <br />
      <input type="text" name="taxnumber" />
      <br />
      <label htmlFor="phone">Telefon:</label>
      <br />
      <input type="text" name="phone" />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" name="email" />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
