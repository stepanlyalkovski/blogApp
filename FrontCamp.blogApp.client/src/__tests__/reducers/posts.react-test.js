import posts from "../../reducers/posts";

describe('Posts Reducer', () => {
  it('has a default state', () => {
    let expectedEmptyState = [];

    expect(posts(undefined, {type:'unknown'})).toEqual(expectedEmptyState);
  });

  it('can handle ADD_POST', () => {
    let firstAddedPost = {text:'testText', title: 'testTitle'};
    expect(posts(undefined, {type:'ADD_POST', post: firstAddedPost})).toEqual([firstAddedPost]);
  });

  it('can handle DELETE_POST', () => {
    let postToDelete = {text:'postToDeleteText', title: 'postToDelete', _id: 1};
    let initialState = [
      {text:'testText', title: 'testTitle', _id: 2},
      postToDelete
    ];

    let expectedState = [{text:'testText', title: 'testTitle', _id: 2}];

    expect(posts(initialState, {type:'DELETE_POST', postId: 1})).toEqual(expectedState);
  });

  it('can handle ADD_POSTS', () => {
    let initialState = [
      {text:'initialTestText', title: 'initialPostTitle', _id: 4}
    ];

    let addedPostList = [
      {text:'postToDeleteText', title: 'postToDelete', _id: 1},
      {text:'testText', title: 'testTitle', _id: 2},
      {text:'testText2', title: 'testTitle2', _id: 3},
    ];

    expect(posts({}, {type:'ADD_POSTS', posts: addedPostList})).toEqual(addedPostList);
  });
});