import React, { useState, useEffect } from 'react';
import './index.css';
import { VerseData } from '../../util/typeDefs';
import { fetchVerses } from '../../util/api';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
const ChooseVerses = () => {
  const { bibleId, chapterId } = useParams<{
    bibleId: string;
    chapterId: string;
  }>();
  const [Verses, setVerses] = useState<VerseData[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const Fn = async () => {
      const Verses = await fetchVerses(bibleId, chapterId);
      setVerses(Verses);
      setLoading(false);
    };
    Fn();
  }, []);
  const RenderVerses = () => Verses?.map((Verse) => <p>{Verse.content}</p>);
  const RenderLoading = () => <h1>Loading . . .</h1>;
  return (
    <div className='chooseBooks'>
      <Layout>
        <h1>CHOOSE A VERSE</h1>
        <hr />
        {Loading ? RenderLoading() : RenderVerses()}
      </Layout>
    </div>
  );
};

export default ChooseVerses;
