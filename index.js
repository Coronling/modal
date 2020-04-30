/**
 * @Coronling/Modal
 * Copyright (c) Simon Raichl 2020
 * MIT License
 */

const selectElements = selector => [].slice.call(document.querySelectorAll(selector));

const modal = () => {
    const modals = selectElements("[data-modal]");
    modals.forEach(initializeModal);
};

const initializeModal = modalId => {
    const modalElement = typeof modalId === "string" ? document.querySelector(`[data-modal=${modalId}]`) : modalId;
    const { modal } = modalElement.dataset;

    const openTriggers = selectElements(`[data-modal-trigger="${modal}"]`);
    const closeTriggers = selectElements(`[data-modal-close="${modal}"]`);
    const setModalActive = mode => () => {
        document.body.classList[mode]("overflow-hidden");
        modalElement.classList[mode]("active");
    };

    modalElement.addEventListener("mouseup", ({ target }) => {
        if (target === modalElement) {
            setModalActive("remove")();
        }
    });

    openTriggers.forEach(trigger => {
        trigger.addEventListener("click", setModalActive("add"));
    });

    closeTriggers.forEach(trigger => {
        trigger.addEventListener("click", setModalActive("remove"));
    });
};

export { modal, initializeModal };