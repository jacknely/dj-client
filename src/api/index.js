import axios from "axios";

const url = "endpoint";

export const fetchPlaylist = async (user, playlist) => {
  // try {
  //   const {
  //     data: {  },
  //   } = await axios.get(url);
  const response = {
    user: "",
    listName: "",
    playlist: [
      { id: 1, title: "Song 1", artist: "Artist 1" },
      { id: 2, title: "Song 2", artist: "Artist 2" },
      { id: 3, title: "Song 3", artist: "Artist 3" },
      { id: 4, title: "Song 4", artist: "Artist 4" },
    ],
    analysis: {
      energy: [10, 50],
      vocals: [30, 60],
      tempo: [35, 56],
      dancable: [38, 90],
    },
  };
  return response;
  // } catch (error) {
  //   console.log(error);
  // }
};

export const fetchRecommend = (analysis) => {
  // try {
  //   const {
  //     data: {  },
  //   } = await axios.get(url);
  const response = {
    recommended: [
      { id: 1, title: "New Song 1", artist: "Artist 1" },
      { id: 2, title: "New Song 2", artist: "Artist 2" },
      { id: 3, title: "New Song 3", artist: "Artist 3" },
      { id: 4, title: "New Song 4", artist: "Artist 4" },
    ],
  };
  return response;
  // } catch (error) {
  //   console.log(error);
  // }
};
