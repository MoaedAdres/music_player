import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '1b121d4c40msh58ea6c5d28cc2eep1ff713jsn39d9c27c51dd')
      headers.set('X-RapidAPI-Host','shazam-api7.p.rapidapi.com');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: ({genre,limit}) => `/charts/get-top-songs-in_world_by_genre?limit=${limit}&genre=${genre}`}),
    getSongsByGenre: builder.query({ query: ({genre,limit}) => `/charts/get-top-songs-in_world_by_genre?limit=${limit}&genre=${genre}`}),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/get-top-songs-in-country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?term=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artist/get-details?id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/songs/get_details?id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});



export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
