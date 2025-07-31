import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import PokemonList from './components/PokemonList';
import Collection from './components/Collection';
import BattleArena from './components/BattleArena';

const { Header, Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <a href="/">Покемоны</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/collection">Коллекция</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/arena">Арена</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/arena" element={<BattleArena />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}
