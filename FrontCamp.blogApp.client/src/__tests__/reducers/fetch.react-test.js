import fetch from "../../reducers/fetch";

describe('Fetch Reducer', () => {
  it('has a default state', () => {
    let expectedEmptyState = false;

    expect(fetch(undefined, {type:'unknown'})).toEqual(expectedEmptyState);
  });
});