import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my_products')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/my_products"!</div>;
}
