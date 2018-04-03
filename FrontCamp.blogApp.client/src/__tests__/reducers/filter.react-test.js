import filter from "../../reducers/filter";

describe('Filter Reducer', () => {
  it('has a default state', () => {
    let expectedEmptyState = {};

    expect(filter(undefined, {type:'unknown'})).toEqual(expectedEmptyState);
  });

    it('can handle SET_FILTER_AUTHOR', () => {
    let expectedEmptyState = {};

    expect(
        filter({}, 
        { type:'SET_FILTER_AUTHOR', author: 'testAuthor' })
    ).toEqual({author: 'testAuthor'});
  });
});