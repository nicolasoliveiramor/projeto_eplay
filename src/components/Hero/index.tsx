import { Game } from '../../pages/Home'

import { Banner, Infos } from './styles'
import { Tag } from '../Tag'
import { Button } from '../Button'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

export const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar este jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)
