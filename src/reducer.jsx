import { TOGGLE_NAV, OPEN_LOGIN_FORM, OPEN_MODAL, USERNAME, FIRSTNAME, SURNAME, EMAIL, PASSWORD, AGREE, TOUCHED_FIRStNAME, TOUCHED_SURNAME, TOUCHED_PASSWORD, TOUCHED_EMAIL, TOUCHED_DETAILS } from "./contact";

const initialState = {
    isNavToggled : false,
    isLoginOpen : false,
    isModalOpen : false,
    username : '',
    firstname : '',
    surname : '',
    email : '',
    password : '',
    agree : false,
    touched : {
        firstname : false,
        surname : false,
        email : false,
        password : false
    }
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case TOGGLE_NAV:
            return {
                ...state,
                isNavToggled: !state.isNavToggled
            };
        case OPEN_LOGIN_FORM:
            return {
                ...state,
                isLoginOpen: !state.isLoginOpen
            };
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            };
        case USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            };
        case SURNAME:
            return {
                ...state,
                lastname: action.payload
            };
        case EMAIL:
            return {
                ...state,
                lastname: action.payload
            };
        case PASSWORD:
            return {
                ...state,
                lastname: action.payload
            };
        case AGREE:
            return {
                ...state,
                agree: !state.agree
            };
        case TOUCHED_FIRStNAME:
            return {
                ...state,
                firstname: !state.touched.firstname
            };
        case TOUCHED_SURNAME:
            return {
                ...state,
                surname: !state.touched.surname
            };
        case TOUCHED_EMAIL:
            return {
                ...state,
                email: !state.touched.email
            };
        case TOUCHED_PASSWORD:
            return {
                password: !state.touched.password
            };
        default:
            return state;
    }
}