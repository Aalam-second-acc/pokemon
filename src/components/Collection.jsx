import { List, Card } from 'antd';
import { usePokemonStore } from './store/usePokemonStore';

const Collection = () => {
  const { collection } = usePokemonStore();

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={collection}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.name} cover={<img src={item.image} alt={item.name} />}>
            <p>EXP: {item.base_experience}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default Collection;
