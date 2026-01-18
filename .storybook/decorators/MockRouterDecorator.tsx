import { PropsWithChildren } from "react";
import { getRouter } from "../../src/router";
import { RouterContextProvider } from "@tanstack/react-router";

/**
 * @tanstack/react-router のモック Decorator
 * ref: https://github.com/TanStack/router/discussions/952
 */
export function MockRouterDecorator({ children }: PropsWithChildren) {
  const router = getRouter();
  return (
    <RouterContextProvider router={router}>{children}</RouterContextProvider>
  );
}
