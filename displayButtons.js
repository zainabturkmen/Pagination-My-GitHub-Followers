const displayButtons = (btnContainer, pages, activeIndex) => {
    let btns = pages.map((_, pageIndex)=>{
        return `<button class="page-btn">${pageIndex + 1}</button>`
    });

    container.innerHTML = btns.join("");
}

export default displayButtons
