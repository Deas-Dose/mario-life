import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <article class="bg-white p-[20px] rounded-[8px] shadow m-[10px]">
            <h2>Contact</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quidem quisquam error atque corporis esse eaque ducimus. Debitis facere, voluptatibus totam ab in vel illo voluptate vitae quaerat corrupti.</p>
        </article>
    );
})

export const head: DocumentHead = {
    title: "Contact",
    meta: [
        {
            name: "description",
            content: "About page for Mario Life",
        }
    ],
};