import { List, Button, Spin, Card } from 'antd';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemonList, fetchPokemonDetails } from './api/pokeApi';
import { usePokemonStore } from './store/usePokemonStore';
import { useEffect, useState } from 'react';

export default function PokemonList() {
  const { catchPokemon } = usePokemonStore();
  const [pokemonData, setPokemonData] = useState([]);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: fetchPokemonList,
    getNextPageParam: (_, pages) => pages.length,
  });

  useEffect(() => {
    const loadDetails = async () => {
      if (!data) return;
      const promises = data.pages.flatMap(page =>
        page.results.map(p => fetchPokemonDetails(p.url))
      );
      const results = await Promise.all(promises);
      setPokemonData(results);
    };
    loadDetails();
  }, [data]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && hasNextPage) fetchNextPage();
  };

  if (status === 'loading') return <Spin />;

  return (
    <div style={{ height: '80vh', overflowY: 'auto' }} onScroll={handleScroll}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={pokemonData}
        renderItem={(poke) => (
          <List.Item key={poke.id}>
            <Card
              title={poke.name}
              cover={<img alt={poke.name} src={poke.sprites.other['official-artwork'].front_default} />}
            >
              <p>HP: {poke.stats[0].base_stat}</p>
              <p>Attack: {poke.stats[1].base_stat}</p>
              <p>Defense: {poke.stats[2].base_stat}</p>
              <Button onClick={() => catchPokemon(poke)}>Поймать</Button>
            </Card>
          </List.Item>
        )}
      />
      {isFetchingNextPage && <Spin />}
    </div>
  );
}
