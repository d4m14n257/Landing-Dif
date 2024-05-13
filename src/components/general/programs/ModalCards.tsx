import React from "react";
import ModalBase from "../ModalBase";
import StepperCard from "../StepperCard";
import { ModalStepperCard } from "../types/types";


export default function ModalCards(props: ModalStepperCard) {
    const { open, handleClose, card, sizeWidth } = props

    return (
        <ModalBase
            isOpen={open}
            handleClose={handleClose}
        >
            <StepperCard
                title={card.title}
                src={card.src}
                path={card.path}
                sizeWidth={sizeWidth}
            />
        </ModalBase>
    )
}