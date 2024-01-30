import { createCategory } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createCategory}>
      <label htmlFor="name">Név:</label>
      <br />
      <input type="text" name="name" />
      <br />
      <label htmlFor="fee">Díj:</label>
      <br />
      <input type="number" name="fee" />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
