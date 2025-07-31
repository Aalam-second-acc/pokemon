import { Card, List } from 'antd';
import { usePokemonStore } from './store/usePokemonStore';

export default function Collection() {
  const { collection } = usePokemonStore();

  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={collection}
      renderItem={(poke) => (
        <List.Item key={poke.id}>
          <Card
            title={poke.name}
            cover={<img alt={poke.name} src={poke.sprites.other['official-artwork'].front_default} />}
          >
            <p>HP: {poke.stats[0].base_stat}</p>
            <p>Attack: {poke.stats[1].base_stat}</p>
            <p>Defense: {poke.stats[2].base_stat}</p>
            <p>Speed: {poke.stats[5].base_stat}</p>
          </Card>
        </List.Item>
      )}
    />
  );
}
