const regBtn = document.getElementById('reg-btn');

function regPage() {
    window.location.href = "reg.html"
}

const bookGrid = document.getElementById('book-grid');
const bookScrollButtons = document.querySelectorAll('.book-scroll-btn');

function updateBookScrollButtons() {
    bookScrollButtons.forEach((button) => {
        const direction = Number(button.dataset.scroll);
        button.disabled = direction < 0
            ? bookGrid.scrollLeft <= 0
            : bookGrid.scrollLeft + bookGrid.clientWidth >= bookGrid.scrollWidth - 1;
    });
}

bookScrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        bookGrid.scrollBy({
            left: Number(button.dataset.scroll) * bookGrid.clientWidth,
            behavior: 'smooth'
        });
    });
});

bookGrid.addEventListener('scroll', updateBookScrollButtons);
window.addEventListener('resize', updateBookScrollButtons);
new MutationObserver(updateBookScrollButtons).observe(bookGrid, {
    childList: true,
    subtree: true
});
updateBookScrollButtons();