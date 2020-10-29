import React, { useState, useEffect } from 'react';
import './index.css';
import { Chapter } from '../../util/typeDefs';
import { fetchChapters } from '../../util/api';
import Layout from '../../components/Layout';
import { useHistory, useParams } from 'react-router-dom';
const ChooseChapters = () => {
  const { bibleId, bookId } = useParams<{ bibleId: string; bookId: string }>();
  const History = useHistory();
  const [Chapters, setChapters] = useState<Chapter[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const Fn = async () => {
      const Chapters = await fetchChapters(bibleId, bookId);
      setChapters(Chapters);
      setLoading(false);
    };
    Fn();
  }, []);
  const RenderChapters = () =>
    Chapters?.map((Chapter) => (
      <p
        onClick={() =>
          History.push(`/bibles/${bibleId}/chapters/${Chapter.id}`)
        }
      >
        {Chapter.number}
      </p>
    ));
  const RenderLoading = () => <h1>Loading . . .</h1>;
  return (
    <div className='chooseBooks'>
      <Layout>
        <h1>CHOOSE A CHAPTER</h1>
        <hr />
        {Loading ? RenderLoading() : RenderChapters()}
      </Layout>
    </div>
  );
};

export default ChooseChapters;
