import { Banner } from '../../components/Banner'
import { ProductsList } from '../../components/ProductsList'
import { useGetGameSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

export const Home = () => {
  const { data: gameOnSale } = useGetOnSaleQuery()
  const { data: gameSoon } = useGetGameSoonQuery()

  if (gameOnSale && gameSoon) {
    return (
      <>
        <Banner />
        <ProductsList
          games={gameOnSale}
          title="Promomoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={gameSoon}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}
