// import { component$ } from "@builder.io/qwik";
// import { Link } from "@builder.io/qwik-city";

// const headerLinks = [{
//   'id':1,
//   'link':'/',
//   'name': 'Home',
// }, {
//   'id':2,
//   'link':'/about',
//   'name': 'About'
// }, {
//   'id':3,
//   'link':'/contact',
//   'name': 'Contact'
// }]

// export default component$(() => {
  

//   return (
//     <header style="background-color: var(--theme-yellow)">
//       <nav class="flex p-[10px] max-w-[1260px] mx-auto my-0 items-center">
//         <img src="/img/mario_block.jpeg" alt="logo" class="w-[40px] h-[50px]"/>
//         <h1 class="ml-[10x] mr-auto font-bold text-[2em]">Mario Life</h1>
//         <ul>
//           {headerLinks.map(({id, link, name}) => {
//             return (
//               <li key={id} class="inline-block ml-[10px]">
//                 <Link href={link} class="text-white no-underline rounded-[4px] px-[8px] py-[4px] hover:bg-white hover:text-[#111]">{name}</Link>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     </header>
//   );
// });
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


interface listElementProps {
  content: string;
}
export let listElement = component$<listElementProps>((props) => {
  return(
      <li class="inline-block ml-[10px]">
          <Link href={props.content}>{props.content}</Link>
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
          <listElement content="/" />
          <listElement content="/about" />
          <listElement content="/contact" />
        </ul>
      </nav>
    </header>
  );
});


