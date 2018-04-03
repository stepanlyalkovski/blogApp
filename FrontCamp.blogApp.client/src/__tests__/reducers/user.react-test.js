import user from "../../reducers/user";

describe('User Reducer', () => {
    it('has a default state', () => {
        let expectedEmptyState = false;

        expect(user(undefined, {type:'unknown'})).toEqual({});
    });


    it('can handle USER_REGISTER_REQUEST', () => {
        expect(user({}, {type:'USER_REGISTER_REQUEST'}))
        .toEqual({
            inProgress: true
        });
    });

    it('can handle USER_REGISTER_SUCCESS', () => {
        expect(user({}, {
            type:'USER_REGISTER_SUCCESS',
            user: { author:'testAuthor' }
        }))
        .toEqual({
            inProgress: false,
            isRegistered: true,
            author:'testAuthor'
        });
    });

    it('can handle USER_REGISTER_FAILURE', () => {
        expect(user({}, {
            type:'USER_REGISTER_FAILURE',
            error: { errorText:'errorText' }
        }))
        .toEqual({
            inProgress: false,
            isRegistered: false,
            error: { errorText:'errorText' }
        });
    });

    it('can handle USER_LOGIN_REQUEST', () => {
        expect(user({}, {
            type:'USER_LOGIN_REQUEST'
        }))
        .toEqual({
            inProgress: true
        });
    });

    it('can handle USER_LOGIN_SUCCESS', () => {
        expect(user({}, {
            type:'USER_LOGIN_SUCCESS',
            user: { author:'testAuthor', token:'testToken' }
        }))
        .toEqual({
            isLoggedIn: true,
            author: 'testAuthor',
            token: 'testToken',
            inProgress: false
        });
    });

    it('can handle USER_LOGIN_FAILURE', () => {
        expect(user({}, {
            type:'USER_LOGIN_FAILURE',
            error: { errorText:'errorText' }
        }))
        .toEqual({
            isLoggedIn: false,
            inProgress: false,
            error: { errorText:'errorText' }
        });
    });

    it('can handle USER_LOGOUT', () => {
        expect(user({}, {
            type:'USER_LOGOUT'
        }))
        .toEqual({
            isLoggedIn: false,
            token: undefined,
            author: undefined
        });
    });
});