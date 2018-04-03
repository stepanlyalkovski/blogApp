import fetch from "../../reducers/fetch";

describe('Fetch Reducer', () => {
  it('has a default state', () => {
    let expectedEmptyState = false;

    expect(fetch(undefined, {type:'unknown'})).toEqual(expectedEmptyState);
  });

  it('can handle FETCH_START', () => {
    expect(fetch(false, {type:'FETCH_START'})).toEqual(true);
  });

  it('can handle FETCH_END', () => {
      expect(fetch(true, {type:'FETCH_END'})).toEqual(false);
  });
});