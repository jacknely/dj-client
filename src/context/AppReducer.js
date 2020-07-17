import { fetchPlaylist, fetchRecommend } from "../api";

const loadPlaylist = async (user, playlist) => {
  return await fetchPlaylist(user, playlist);
};

const loadRecommend = (analysis) => {
  return fetchRecommend(analysis);
};

export default (state, action) => {
  switch (action.type) {
    case "UPDATE_ANALYSIS":
      return {
        ...state,
        analysis: action.payload,
      };
    case "LOAD":
      const { analysis, playlist } = loadPlaylist(
        action.user,
        action.listName
      );
      return {
        ...state,
        analysis: analysis,
        playlist: playlist,
      };
    case "RECOMMEND":
      const { recommended } = loadRecommend(state.analysis);
      return {
        ...state,
        recommended,
      };
    default:
      return state;
  }
};
