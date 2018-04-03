import configureStore from 'redux-mock-store';
import * as Actions from "../../actions/index.js";

describe('Actions', () => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);

    it('should create an action to start fetch', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const expectedPayload = { type: 'FETCH_START' };

        store.dispatch( Actions.startRequest());
        const actions = store.getActions();

        expect(actions).toEqual([expectedPayload]);
    });

    it('should create an action to finish fetch', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const expectedPayload = { type: 'FETCH_END' };

        store.dispatch(Actions.endRequest());
        const actions = store.getActions();

        expect(actions).toEqual([expectedPayload]);
    });

    it('should create an action to logout', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const expectedPayload = { type: 'USER_LOGOUT' };

        store.dispatch(Actions.logout());
        const actions = store.getActions();

        expect(actions).toEqual([expectedPayload]);
    });

    it('should create an action to set filter author', () => {
        const initialState = {};
        const store = mockStore(initialState);
        const expectedPayload = { type: 'SET_FILTER_AUTHOR', author: 'testAuthor' };

        store.dispatch(Actions.setFilter('testAuthor'));
        const actions = store.getActions();

        expect(actions).toEqual([expectedPayload]);
    });
});