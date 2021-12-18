const API_KEY = process.env.API_KEY;

export default {
  Trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  TopRated: {
    title: "Top rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  Horror: {
    title: "Horror",
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  },
  Action: {
    title: "Action",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  Comedy: {
    title: "Comedy",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  Romantic: {
    title: "Romantic",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  Dramas: {
    title: "Tv Shows",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  Bollywood: {
    title: "Bollywood",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  Hollywood: {
    title: "Hollywood",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  SciFi: {
    title: "Sci-Fi",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
