/*
- Accordion List: é uma lista de itens empilhada verticalmente,
 que ao ser clicada, revela ou oculta um conteúdo associado a cada
  elemento desta Lista.
  # Usa-se o evento de click em cada item que vai ser relacionado,
  ao seu conteúdo.
*/
export default function iniAccordion(){
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");
    
    accordionList.forEach(itemDt => {
        /*Passando dois eventos de uma vez só*/
         /* itemDt.addEventListener("mousemove",() => itemDt.style.cursor = "pointer");
        itemDt.addEventListener("click", accordion); */
        ["mouseenter", "click"].forEach(itemEvent => {
            itemDt.addEventListener(itemEvent, accordion)
        })
    })

    function accordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
        //Método NextElementSibling: retorna o conteúdo html do próximo irmão//
    }

    accordionList[0].classList.toggle('ativo');
    accordionList[0].nextElementSibling.classList.toggle('ativo');
}
   