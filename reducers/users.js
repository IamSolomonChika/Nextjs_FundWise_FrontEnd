export default (user = [], action) => {
    switch (action.type) {
        case 'SIGN_UP':
        return {
            ...user,
            user: action.payload,
        };
        default:
        return user;
    }
    }