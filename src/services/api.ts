import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getGameSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getGameAction: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getGameSport: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getGameSimulation: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getGameFight: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGameRpg: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetGameSoonQuery,
  useGetGameActionQuery,
  useGetGameSportQuery,
  useGetGameSimulationQuery,
  useGetGameFightQuery,
  useGetGameRpgQuery,
  useGetGameQuery
} = api
