import React, { useState, useEffect } from 'react';
import './index.css';
import { Bible } from '../../util/typeDefs';
import { fetchBibles } from '../../util/api';
import Layout from '../../components/Layout';
import { useHistory } from 'react-router-dom';
import { List, Loader } from 'semantic-ui-react';
import Container from '../../components/Container';
const ChooseBibles: React.FC = () => {
  const History = useHistory();
  const [Bibles, setBibles] = useState<Bible[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const Fn = async () => {
      const bibles = await fetchBibles();
      setBibles(bibles);
      setLoading(false);
    };
    Fn();
  }, []);
  const RenderBibles = () =>
    Bibles?.map((bible) => (
      <List.Item
        onClick={() => History.push(`/bibles/${bible.id}/books`)}
        key={bible.id}
      >
        <List.Icon name='book' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>{bible.abbreviation}</List.Header>
          <List.Description>{bible.description}</List.Description>
        </List.Content>
      </List.Item>
    ));
  const RenderLoading = () => (
    <Loader active size='large'>
      Loading
    </Loader>
  );
  return (
    <div className='chooseBibles'>
      <Layout>
        <h1>CHOOSE A BIBLE</h1>
        <hr />

        <Container>
          {Loading ? (
            RenderLoading()
          ) : (
            <List divided relaxed>
              {RenderBibles()}
            </List>
          )}
        </Container>
      </Layout>
    </div>
  );
};

export default ChooseBibles;
