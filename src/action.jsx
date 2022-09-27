import { TOGGLE_NAV, OPEN_LOGIN_FORM, OPEN_MODAL, USERNAME, FIRSTNAME, SURNAME, EMAIL, PASSWORD, AGREE, TOUCHED_FIRStNAME, TOUCHED_SURNAME, TOUCHED_EMAIL, TOUCHED_PASSWORD, TOUCHED_DETAILS } from "./contact";

export const setToggleNav = () => ({
    type: TOGGLE_NAV
})

export const setOpenLoginModal = () => ({
    type: OPEN_LOGIN_FORM
})

export const setOpenModal = () => ({
    type: OPEN_MODAL
})

export const setUsername = (text) => ({
    type: USERNAME,
    payload: text
})

export const setFirstname = (text) => ({
    type: FIRSTNAME,
    payload: text
})

export const setSurname = (text) => ({
    type: SURNAME,
    payload: text
})

export const setEmail = (text) => ({
    type: EMAIL,
    payload: text
})

export const setPassword = (text) => ({
    type: PASSWORD,
    payload: text
})

export const setAgree = () => ({
    type: AGREE
})

export const setTouchedFirstname = () => ({
    type: TOUCHED_FIRStNAME
})

export const setTouchedSurname = () => ({
    type: TOUCHED_SURNAME
})

export const setTouchedEmail = () => ({
    type: TOUCHED_EMAIL
})

export const setTouchedPassword = () => ({
    type: TOUCHED_PASSWORD
})