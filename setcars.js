const setCar = (section) => {
    section.addEventListener("click", (e) => {
        const id = e.target.parentElement.dataset.id;
        localStorage.setItem("super car", id);
    });
}
export default setCar;