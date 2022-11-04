export default (admin = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
        return {
            ...admin,
            admin: action.payload,
        };
        default:
        return admin;
    }
    }