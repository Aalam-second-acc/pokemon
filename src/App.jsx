import { Tabs } from 'antd';
import PokemonList from './components/PokemonList';
import Collection from './components/Collection';
import BattleArena from './components/BattleArena';

const App = () => {
  const items = [
    { key: '1', label: 'Catch Pokémon', children: <PokemonList /> },
    { key: '2', label: 'My Collection', children: <Collection /> },
    { key: '3', label: 'Battle Arena', children: <BattleArena /> },
  ];

  return (
    <div style={{ padding: 30 }}>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default App;
