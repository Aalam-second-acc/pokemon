import { Select, Card } from 'antd';
import { usePokemonStore } from './store/usePokemonStore';
import { useState } from 'react';

export default function BattleArena() {
  const { collection } = usePokemonStore();
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const calculatePower = (poke) => {
    return (
      poke.stats[0].base_stat + // HP
      poke.stats[1].base_stat + // Attack
      poke.stats[2].base_stat + // Defense
      poke.stats[5].base_stat   // Speed
    );
  };

  const winner =
    first && second
      ? calculatePower(first) > calculatePower(second)
        ? first.name
        : second.name
      : null;

  return (
    <>
      <Select
        style={{ width: 200, marginRight: 10 }}
        placeholder="Выбери первого"
        onChange={(name) => setFirst(collection.find(p => p.name === name))}
      >
        {collection.map(poke => (
          <Select.Option key={poke.name} value={poke.name}>
            {poke.name}
          </Select.Option>
        ))}
      </Select>

      <Select
        style={{ width: 200 }}
        placeholder="Выбери второго"
        onChange={(name) => setSecond(collection.find(p => p.name === name))}
      >
        {collection.map(poke => (
          <Select.Option key={poke.name} value={poke.name}>
            {poke.name}
          </Select.Option>
        ))}
      </Select>

      {first && second && (
        <Card title="Результат" style={{ marginTop: 20 }}>
          <p>Победитель: <strong>{winner}</strong></p>
        </Card>
      )}
    </>
  );
}
