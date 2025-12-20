
/*selects the form inside placenum section*/
const form = document.querySelector(".placenum form");
/*selects alert overlay background*/
const overlay = document.getElementById("alertOverlay");
/*selects close button inside alert box*/
const closeBtn = document.getElementById("closeAlert");

/*listens for form submission*/
form.addEventListener("submit", function (event) {
    /*stops page from refreshing*/
    event.preventDefault();
    /*shows alert overlay*/
    overlay.classList.remove("hidden");
});

/*click on close button*/
closeBtn.addEventListener("click", function () {
    /*hides alert overlay*/
    overlay.classList.add("hidden");
    
});

/*
CITATIONS:

Images:
- Old paper background: https://www.123rf.com/photo_43468400_sheet-of-old-paper-with-torn-edges-isolated-on-white-background.html
- Ripped old paper stock: https://stock.adobe.com/search?k=ripped+old+paper
- Vintage rays background: https://www.freepik.com/free-vector/classic-vintage-rays-sunburst-retro-background_18505192.htm#fromView=keyword&page=1&position=2&uuid=c426d27d-b7ea-429a-b39d-3b7ee741e68a
- Kiss mark/lips SVG: https://www.etsy.com/uk/listing/1066066903/vector-kiss-mark-lips-emoji-design-svg
- Elizabeth Arden book cover: https://www.abebooks.com/first-edition/Elizabeth-Arden-Around-World-MELE-Pietro/22064117866/bd
- Pinterest inspiration: https://ca.pinterest.com/pin/2181499815995530/
- Pinterest inspiration 2: https://ca.pinterest.com/pin/322922235757826716/

Fonts:
- Google Fonts (Rye): https://fonts.google.com/download/next-steps?categoryFilters=Feeling:%2FExpressive%2FFancy
- CSS custom font guides:
  - https://stackoverflow.com/questions/57936472/adding-custom-fonts-in-css
  - https://stackoverflow.com/questions/12144000/using-custom-fonts-using-css

Web/API references (CSS & JS):
- MDN: classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
- MDN: align-self: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-self
- MDN: justify-content: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content
- MDN: inset: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/inset
- MDN: transform: translateX: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/translateX
- MDN: flexbox basics: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts
- MDN: overflow-y: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-y

Historical & context references:
- Elizabeth Arden history: https://www.cosmeticsandskin.com/companies/elizabeth-arden-1930.php?
- Musings about Elizabeth Arden: https://www.estoraadams.com/musings/2021/1/8/mg8mljs7yhl1ysk2a4k30lwbl8ddi2
- Substack article on Elizabeth Arden: https://laurakitty.substack.com/p/becoming-elizabeth-arden
 */