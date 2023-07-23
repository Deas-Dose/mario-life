import { component$ } from "@builder.io/qwik";

export default component$(() => {
    console.log('hello')
    return (
        <article class="bg-white p-[20px] rounded-[8px] shadow m-[10px]">
            <h2>About</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quidem quisquam error atque corporis esse eaque ducimus. Debitis facere, voluptatibus totam ab in vel illo voluptate vitae quaerat corrupti.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quidem quisquam error atque corporis esse eaque ducimus. Debitis facere, voluptatibus totam ab in vel illo voluptate vitae quaerat corrupti.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae quidem quisquam error atque corporis esse eaque ducimus. Debitis facere, voluptatibus totam ab in vel illo voluptate vitae quaerat corrupti.</p>
        </article>
    );
})