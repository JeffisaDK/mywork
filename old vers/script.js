const dragZone = document.querySelector('[data-drag-zone]');
const dragTrack = document.querySelector('[data-drag-track]');

if (dragZone && dragTrack) {
    let isDragging = false;
    let startX = 0;
    let startOffset = 0;
    let currentOffset = 0;

    const getBounds = () => ({
        min: Math.min(0, dragZone.clientWidth - dragTrack.scrollWidth),
        max: 0
    });

    const setOffset = (offset) => {
        const bounds = getBounds();
        currentOffset = Math.max(bounds.min, Math.min(bounds.max, offset));
        dragTrack.style.transform = `translateX(${currentOffset}px)`;
    };

    dragZone.addEventListener('pointerdown', (event) => {
        isDragging = true;
        startX = event.clientX;
        startOffset = currentOffset;
        dragZone.classList.add('is-dragging');
        dragZone.setPointerCapture(event.pointerId);
    });

    dragZone.addEventListener('pointermove', (event) => {
        if (isDragging) setOffset(startOffset + event.clientX - startX);
    });

    const stopDragging = (event) => {
        if (!isDragging) return;
        isDragging = false;
        dragZone.classList.remove('is-dragging');
        if (event.pointerId) dragZone.releasePointerCapture(event.pointerId);
    };

    dragZone.addEventListener('pointerup', stopDragging);
    dragZone.addEventListener('pointercancel', stopDragging);
    dragZone.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') setOffset(currentOffset - 120);
        if (event.key === 'ArrowLeft') setOffset(currentOffset + 120);
    });
    window.addEventListener('resize', () => setOffset(currentOffset));
}
