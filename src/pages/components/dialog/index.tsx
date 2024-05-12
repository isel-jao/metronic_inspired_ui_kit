import { Button, ButtonProps } from "@/components/button";
import { cn } from "@/utils";
import { XIcon } from "lucide-react";
import { useRef } from "react";

import React from "react";
import { DialogContext, useDialogContext } from "./context";

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <DialogContext.Provider
      value={{ openDialog, closeDialog, dialogRef: dialogRef }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export interface DialogContentProps
  extends React.HTMLAttributes<HTMLDialogElement> {}
export function DialogContent({
  className,
  children,
  onClick,
  ...props
}: DialogContentProps) {
  const { closeDialog, dialogRef } = useDialogContext();
  const handleOnClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    const clientRect = dialog?.getBoundingClientRect();
    if (!dialog || !clientRect) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const { x, y, width, height } = clientRect;
    if (
      clientX < x ||
      clientX > x + width ||
      clientY < y ||
      clientY > y + height
    )
      closeDialog();
    onClick?.(e);
  };
  return (
    <dialog
      ref={dialogRef}
      onClose={closeDialog}
      className={cn(
        "relative w-full max-w-sm rounded bg-card p-0 shadow backdrop:backdrop-blur-sm",
        className,
      )}
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </dialog>
  );
}

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}
export function DialogHeader({
  children,
  className,
  ...props
}: DialogHeaderProps) {
  const { closeDialog } = useDialogContext();
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-between  border-b border-muted p-4 text-lg font-semibold md:p-6",
        className,
      )}
    >
      {children}
      <Button
        variant="text"
        size="icon"
        className="text-muted-foreground/50 hover:text-primary"
        onClick={closeDialog}
      >
        <XIcon size={20} />
      </Button>
    </div>
  );
}
export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export function DialogBody({
  children,
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <div {...props} className={cn("p-4 md:p-6", className)}>
      {children}
    </div>
  );
}
export interface DialogBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export function DialogFooter({
  children,
  className,
  ...props
}: DialogHeaderProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex items-center justify-end gap-4 border-t border-muted p-4 md:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface DialogCloseButtonProps extends ButtonProps {}

export function DialogCloseButton({
  onClick,
  children,
  ...props
}: DialogCloseButtonProps) {
  const { closeDialog } = useDialogContext();
  return (
    <Button
      onClick={(e) => {
        closeDialog();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export interface DialogOpenButtonProps extends ButtonProps {}
export function DialogOpenButton({
  children,
  ...props
}: ButtonProps & { children: React.ReactNode }) {
  const { openDialog } = useDialogContext();
  return (
    <Button onClick={openDialog} {...props}>
      {children}
    </Button>
  );
}
