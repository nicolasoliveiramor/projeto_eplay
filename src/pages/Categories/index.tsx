import { ProductsList } from '../../components/ProductsList'
import {
  useGetGameActionQuery,
  useGetGameFightQuery,
  useGetGameRpgQuery,
  useGetGameSimulationQuery,
  useGetGameSportQuery
} from '../../services/api'

export const Categories = () => {
  const { data: actionGame } = useGetGameActionQuery()
  const { data: sportGame } = useGetGameSportQuery()
  const { data: simulationGame } = useGetGameSimulationQuery()
  const { data: fightGame } = useGetGameFightQuery()
  const { data: rpgGame } = useGetGameRpgQuery()

  if (actionGame && sportGame && simulationGame && fightGame && rpgGame) {
    return (
      <>
        <ProductsList
          games={actionGame}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGame}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGame}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightGame}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList games={rpgGame} title="RPG" background="black" id="rpg" />
      </>
    )
  }

  return <h3>Carregando...</h3>
}
