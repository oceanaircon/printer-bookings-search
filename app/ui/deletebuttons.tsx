"use client";

import {
  deleteBooker,
  deletePrinter,
  deleteBooking,
  deleteCategory,
  deleteService,
  deleteWorksheet,
} from "../lib/actions";

export function DeleteBooker({ id }: { id: number }) {
  const deleteBookerWithId = deleteBooker.bind(null, id);

  const onSubmit = () => {
    if (confirm("Biztosan törölni akarod?")) {
      deleteBookerWithId();
    }
  };

  return (
    <form action={onSubmit}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}

export function DeletePrinter({ id }: { id: number }) {
  const deletePrinterWithId = deletePrinter.bind(null, id);

  const onSubmit = () => {
    if (confirm("Biztosan törölni akarod?")) {
      deletePrinterWithId();
    }
  };

  return (
    <form action={onSubmit}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}

export function DeleteCategory({ id }: { id: number }) {
  const deleteCategoryWithId = deleteCategory.bind(null, id);

  const onSubmit = () => {
    if (confirm("Biztosan törölni akarod?")) {
      deleteCategoryWithId();
    }
  };

  return (
    <form action={onSubmit}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}

export function DeleteService({ id }: { id: number }) {
  const deleteServiceWithId = deleteService.bind(null, id);

  const onSubmit = () => {
    if (confirm("Biztosan törölni akarod?")) {
      deleteServiceWithId();
    }
  };

  return (
    <form action={onSubmit}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}

export function DeleteBooking({ id }: { id: number }) {
  const deleteBookingWithId = deleteBooking.bind(null, id);

  const onSubmit = () => {
    if (confirm("Biztosan törölni akarod?")) {
      deleteBookingWithId();
    }
  };

  return (
    <form action={onSubmit}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}

export function DeleteWorksheet({ id }: { id: number }) {
  const deleteWorksheetWithId = deleteWorksheet.bind(null, id);

  const onSubmit = () => {
    if (confirm("Biztosan törölni akarod?")) {
      deleteWorksheetWithId();
    }
  };

  return (
    <form action={onSubmit}>
      <button className="rounded-md border p-1 hover:bg-gray-100">
        <span>Törlés</span>
      </button>
    </form>
  );
}
