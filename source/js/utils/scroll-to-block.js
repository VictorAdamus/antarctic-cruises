const scrollToBlock = () => {
    const scrollToAdvantages = () => {
        const scrollButton = document.querySelector('[data-scroll-advantages]');
        const block = document.querySelector('[data-advantages]');
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            block.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
            console.log('adv');
        })
    }

    const scrollToBooking = () => {
        const scrollButton = document.querySelector('[data-scroll-booking]');
        const block = document.querySelector('[data-booking]');
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            block.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
            console.log('book');
        })
    }

    const scrollToProducts = () => {
        const scrollButton = document.querySelector('[data-scroll-products]');
        const block = document.querySelector('[data-products]');
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            block.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
            console.log('prod');
        })
    }

    const scrollToLocation = () => {
        const scrollButton = document.querySelector('[data-scroll-location]');
        const block = document.querySelector('[data-location]');
        scrollButton.addEventListener('click', (e) => {
            e.preventDefault();
            block.scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            })
            console.log('loc');
        })
    }

    scrollToAdvantages();
    scrollToBooking();
    scrollToProducts();
    scrollToLocation();
}

export {scrollToBlock};