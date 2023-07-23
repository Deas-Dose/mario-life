import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const name = useSignal("Mario");

  return (
    <div>
      <h2>Okie Dokie</h2>

      <p>Hello, {name.value}</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "A blog site about everything Mario",
    },
  ],
};
