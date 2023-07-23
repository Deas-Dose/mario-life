import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface listElementProps {
    content: string;
}
export default component$((props: listElementProps) => {
    return(
        <li class="inline-block ml-[10px]">
            <Link href={"/" + props.content}>{props.content}</Link>
        </li>
    );
})