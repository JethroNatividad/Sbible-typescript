import React, { useState, useEffect } from 'react';
import './index.css';
import { Book } from '../../util/typeDefs';
import { fetchBooks } from '../../util/api';
import Layout from '../../components/Layout';
import { useHistory, useParams } from 'react-router-dom';
import { List, Loader } from 'semantic-ui-react';
import Container from '../../components/Container';
const ChooseBooks = () => {
  const { bibleId } = useParams<{ bibleId: string }>();
  const History = useHistory();
  const [Books, setBooks] = useState<Book[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const Fn = async () => {
      const books = await fetchBooks(bibleId);
      setBooks(books);
      setLoading(false);
    };
    Fn();
  }, []);
  const RenderBooks = () =>
    Books?.map((book) => (
      <List.Item
        onClick={() =>
          History.push(`/bibles/${bibleId}/books/${book.id}/chapters`)
        }
        key={book.id}
      >
        <List.Icon name='leaf' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header>{book.abbreviation}</List.Header>
          <List.Description>{book.name}</List.Description>
        </List.Content>
      </List.Item>
    ));
  const RenderLoading = () => (
    <Loader active size='large'>
      Loading
    </Loader>
  );
  return (
    <div className='chooseBooks'>
      <Layout>
        <h1>CHOOSE A BOOK</h1>
        <hr />
        <Container>
          {Loading ? (
            RenderLoading()
          ) : (
            <List divided relaxed>
              {RenderBooks()}
            </List>
          )}
        </Container>
      </Layout>
    </div>
  );
};

export default ChooseBooks;
