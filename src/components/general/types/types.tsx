import { ChangeEventHandler } from 'react';

//Types used on Footer.tsx
export type About = {
    slogan: string,
    address: string
}

//Type used on request
type Address = {
    municipio_id: number | null | { id: number, name: string }
    localidad_id: number | null | { id: number, name: string }
    tipo_vialidad_id: number | null
    vialidad: string,
    numero_exterior: number | null
    tipo_asentamiento_id: number | null
    asentamiento: string,
    codigo_postal: number
    usuario_id: number | null
}

interface ButtonStepper {
    handleNext: Function
    handleBack: Function
    activeStep: number
}

export type UserForm = {
    adicional: boolean
    nombre: string
    primer_apellido: string
    segundo_apellido: string
    curp: { id: number, curp: string } | null
    fecha_nacimiento: string
    genero: string
    discapacidades: { id: number, name: string }[] | []
    pais_id: number | null
    entidad_id: number | null
    etnia_id: number | null
    estado_civil_id: number | null
    usuario_id: number
    numero_celular: string
    numero_local: string
    email: string,
    domicilio: Address
}

export interface Benefits extends ButtonStepper {
    benefit?: string
    checked: boolean
    handleBenefit: Function
    handleChange: ChangeEventHandler<HTMLInputElement>
}

export interface FormThatFill extends ButtonStepper {
    setUserThatFill: any
    userThatFill: UserForm
}

export interface FinishedForm extends ButtonStepper {
    handleRequestCompleteForm: Function
}

//Types used in familydeployment
export interface Modal {
    open: boolean
    handleClose: Function
}

export interface Cards {
    src?: string
    title?: string
    path?: any[]
    href?: string
}

export interface StepperCards extends Cards {
    sizeWidth: string
}

export interface ModalCard extends Modal {
    card: Cards
}

export interface ModalStepperCard extends ModalCard {
    sizeWidth: string
}

//Types used by TrainingCards
export interface BottonCards {
    src: string
    title: string
    path: number
    width: string
}