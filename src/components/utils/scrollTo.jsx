export default function scrollTo(par, block, x, y) {
    document.getElementById(par).scrollIntoView({ block: block });
    window.scrollBy(x, y);
 }