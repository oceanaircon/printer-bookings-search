import { ServiceField } from "@/app/lib/definitions";
import { updateService } from "@/app/lib/actions";

export default function Form({ service }: { service: ServiceField }) {
  const updateServiceWithId = updateService.bind(null, service.id);

  return (
    <form action={updateServiceWithId}>
      <input type="hidden" name="id" value={service.id} />
      <label htmlFor="name">Hiba leírása:</label>
      <br />
      <input type="text" name="name" defaultValue={service.name} />
      <br />
      <br />
      <input type="submit" value="Mehet" />
    </form>
  );
}
