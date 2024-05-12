/* eslint-disable react-refresh/only-export-components */
import React from "react";

export const DialogContext = React.createContext<{
  openDialog: () => void;
  closeDialog: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
} | null>(null);

export function useDialogContext() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error(
      `useDialogContext must be used within a DialogContext Provider`,
    );
  }
  return context;
}
