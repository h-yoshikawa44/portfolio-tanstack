import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/skill')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/skill"!</div>;
}
