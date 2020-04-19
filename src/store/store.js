import Cookies from 'js-cookie';

const initialState = {
    cause: {
        causeList: [],
        selectedCause: '',
    },
    token: Cookies.get('gm_id') || null,
    user: {},
    organization: {
        orgList: [],
        selectedOrg: '',
    },
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    // filter: 'all',
    // alert: { type: null, message: null }
};

export default initialState;