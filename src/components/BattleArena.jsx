import { Select, Card } from 'antd';
import { useState } from 'react';
import { usePokemonStore } from './store/usePokemonStore';

const BattleArena = () => {
  const { collection } = usePokemonStore();
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const getWinner = () => {
    if (!first || !second) return null;
    return first.base_experience > second.base_experience ? first : second;
  };

  const options = collection.map((p) => ({
    label: p.name,
    value: p.name,
  }));

  const selectPokemon = (name) => collection.find((p) => p.name === name);

  const winner = getWinner();

  return (
    <div style={{ textAlign: 'center', padding: 30 }}>
      <h2>Battle Arena</h2>
      <Select
        placeholder="Choose first Pokemon"
        options={options}
        onChange={(val) => setFirst(selectPokemon(val))}
        style={{ width: 200, margin: '0 20px' }}
      />
      <Select
        placeholder="Choose second Pokemon"
        options={options}
        onChange={(val) => setSecond(selectPokemon(val))}
        style={{ width: 200 }}
      />

      {first && second && (
        <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 40 }}>
          <Card title={first.name} style={{ width: 200 }}>
            <img src={first.image} alt={first.name} style={{ width: '100%' }} />
            <p>EXP: {first.base_experience}</p>
          </Card>
          <Card title={second.name} style={{ width: 200 }}>
            <img src={second.image} alt={second.name} style={{ width: '100%' }} />
            <p>EXP: {second.base_experience}</p>
          </Card>
        </div>
      )}

      {winner && (
        <p style={{ marginTop: 20 }}>
           Winner: <strong>{winner.name}</strong>!
        </p>
      )}
    </div>
  );
};

export default BattleArena;
