export default (account = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
        return {
            ...account,
            accounts: action.payload,
        };
        default:
        return account;
    }
    }