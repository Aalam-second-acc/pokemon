import { List, Card, Button, Spin } from 'antd';
import { usePokemons } from './api/pokeApi';
import { usePokemonStore } from './store/usePokemonStore';

const PokemonList = () => {
  const { data, isLoading } = usePokemons();
  const { addToCollection, collection } = usePokemonStore();

  const handleCatch = (pokemon) => {
    const alreadyCaught = collection.some((p) => p.name === pokemon.name);
    if (!alreadyCaught) addToCollection(pokemon);
  };

  return (
    <Spin spinning={isLoading} tip="Loading Pokémons...">
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              cover={<img src={item.image} alt={item.name} />}
              actions={[
                <Button onClick={() => handleCatch(item)}>Catch</Button>,
              ]}
            />
          </List.Item>
        )}
      />
    </Spin>
  );
};

export default PokemonList;
