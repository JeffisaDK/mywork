const workViewport = document.querySelector('[data-work-viewport]');
const workTrack = document.querySelector('[data-work-track]');
const previousWorkButton = document.querySelector('[data-work-prev]');
const nextWorkButton = document.querySelector('[data-work-next]');

if (workViewport && workTrack && previousWorkButton && nextWorkButton) {
    let currentOffset = 0;

    const getBounds = () => ({
        min: Math.min(0, workViewport.clientWidth - workTrack.scrollWidth),
        max: 0
    });

    const moveWork = (direction) => {
        const card = workTrack.querySelector('.work-card');
        const step = card ? card.getBoundingClientRect().width + 18 : workViewport.clientWidth;
        const bounds = getBounds();
        currentOffset = Math.max(bounds.min, Math.min(bounds.max, currentOffset + direction * step));
        workTrack.style.transform = `translateX(${currentOffset}px)`;
    };

    previousWorkButton.addEventListener('click', () => moveWork(1));
    nextWorkButton.addEventListener('click', () => moveWork(-1));
    window.addEventListener('resize', () => {
        const bounds = getBounds();
        currentOffset = Math.max(bounds.min, Math.min(bounds.max, currentOffset));
        workTrack.style.transform = `translateX(${currentOffset}px)`;
    });
}

document.querySelectorAll('.at-a-glance dl').forEach((details) => {
    [...details.querySelectorAll('dt')].forEach((label) => {
        if (label.textContent.trim().toLowerCase() === 'timeline') {
            label.nextElementSibling?.remove();
            label.remove();
        }
    });
});
