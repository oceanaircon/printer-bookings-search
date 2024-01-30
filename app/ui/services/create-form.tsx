import { createService } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createService}>
      <label htmlFor="name">Hiba leírása:</label>
      <br />
      <input type="text" name="name" />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
