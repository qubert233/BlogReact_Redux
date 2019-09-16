import constants from '../constatnts/constatnts';

const postsLoaded = newPosts => ({
  type: 'FETCH_POSTS_SUCCESS',
  payload: newPosts,
});

const postsRequested = () => ({
  type: 'FETCH_POSTS_REQUEST',
});

const postsError = error => ({
  type: 'FETCH_POSTS_FAILURE',
  payload: error,
});

const currentArticleLoaded = newArticle => ({
  type: 'FETCH_CURRENT-ARTICLE_SUCCESS',
  payload: newArticle,
});

const currentArticleError = error => ({
  type: 'FETCH_CURRENT-ARTICLE_FAILURE',
  payload: error,
});

const currentArticleRequest = () => ({
  type: 'FETCH_CURRENT-ARTICLE_REQUEST',
});

const addFormArticleShow = () => ({
  type: 'ADD_FORM-ARTICLE_UNHIDE',
});

const addFormArticleHide = () => ({
  type: 'ADD_FORM-ARTICLE_HIDE',
});


export const addNewComment = payload => ({ type: constants.ADD_NEW_COMMENT, payload });

export {
  postsLoaded,
  postsRequested,
  postsError,
  currentArticleError,
  currentArticleLoaded,
  currentArticleRequest,
  addFormArticleHide,
  addFormArticleShow,
};
