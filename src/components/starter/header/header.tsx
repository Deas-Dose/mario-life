import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


interface listElementProps {
  link: string;
  content: string;
}

export const ListElement = component$<listElementProps>((props) => {
  return(
      <li class="inline-block ml-[10px]">
          <Link href={props.link} class="text-white no-underline rounded-[4px] px-[8px] py-[4px] hover:bg-white hover:text-[#111]">{props.content}</Link>
      </li>
  );
})

export default component$(() => {
  return (
    <header style="background-color: var(--theme-yellow)">
      <nav class="flex p-[10px] max-w-[1260px] mx-auto my-0 items-center">
        <img src="/img/mario_block.jpeg" alt="logo" class="w-[40px] h-[50px]"/>
        <h1 class="ml-[10x] mr-auto font-bold text-[2em]">Mario Life</h1>
        <ul>
          <ListElement link="/" content="Home" />
          <ListElement link="/about" content="About" />
          <ListElement link="/contact" content="Contact" />
        </ul>
      </nav>
    </header>
  );
});


