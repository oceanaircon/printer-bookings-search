import { ServiceField, UpdateWorksheetField } from "@/app/lib/definitions";
import { updateWorksheet } from "@/app/lib/actions";

export default function Form({
  worksheet,
  services,
}: {
  worksheet: UpdateWorksheetField;
  services: ServiceField[];
}) {
  const updateWorksheetById = updateWorksheet.bind(null, worksheet.id);

  return (
    <form action={updateWorksheetById}>
      <div>
        {/* Booking ID */}
        <div className="mb-4">
          <label htmlFor="customer">Választott szerződés:</label>
          <div>
            <select id="booking" name="bookingId" value={worksheet.bookingId}>
              <option value={worksheet.bookingId}>{worksheet.bookingId}</option>
            </select>
          </div>
        </div>

        {/* Service ID */}
        <div className="mb-4">
          <label htmlFor="customer">Válassz hibát</label>
          <div>
            <select
              id="service"
              name="serviceId"
              defaultValue={worksheet.serviceId}
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="repairDeadline">Határidő:</label>
          <input
            type="datetime"
            name="repairDeadline"
            defaultValue={worksheet.repairDeadline}
          ></input>
        </div>

        {/* Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Állapot</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="FOLYAMATBAN"
                  name="status"
                  type="radio"
                  value="FOLYAMATBAN"
                  checked
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  defaultChecked={worksheet.status === "FOLYAMATBAN"}
                />
                <label
                  htmlFor="FOLYAMATBAN"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  FOLYAMATBAN {/*<ClockIcon className="h-4 w-4" />*/}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="BEFEJEZETT"
                  name="status"
                  type="radio"
                  value="BEFEJEZETT"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  defaultChecked={worksheet.status === "BEFEJEZETT"}
                />
                <label
                  htmlFor="BEFEJEZETT"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  BEFEJEZETT {/*<CheckIcon className="h-4 w-4" />*/}
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div>
        <button type="submit">Mehet</button>
      </div>
    </form>
  );
}
