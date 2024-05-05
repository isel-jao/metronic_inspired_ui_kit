import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const enterFullscreen = (element: HTMLElement) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
};

export const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

export const isFullscreen = () => Boolean(document.fullscreenElement);

export const toggleFullscreen = (element: HTMLElement) => {
  if (isFullscreen()) {
    exitFullscreen();
  } else {
    enterFullscreen(element);
  }
};
