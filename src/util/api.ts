import axios from 'axios';
import { BASE_API, API_KEY } from '../config';
import { Bible, Book, Chapter, Verse, VerseData } from '../util/typeDefs';
const verseQuery =
  '?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false';
const fetchData = async (endpoint: string) => {
  try {
    const res = await axios.get(`${BASE_API}${endpoint}`, {
      headers: {
        'api-key': API_KEY,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
const fetchBibles = async () => {
  const bibles: Bible[] = await fetchData('/v1/bibles?language=eng');
  return bibles;
};
const fetchBooks = async (bibleId: string) => {
  const books: Book[] = await fetchData(`/v1/bibles/${bibleId}/books`);
  return books;
};
const fetchChapters = async (bibleId: string, bookId: string) => {
  const chapters: Chapter[] = await fetchData(
    `/v1/bibles/${bibleId}/books/${bookId}/chapters`
  );
  //remove the intro
  return chapters.filter((chapter) => chapter.number !== 'intro');
};
const fetchVerses = async (bibleId: string, chapterId: string) => {
  const versesList: Verse[] = await fetchData(
    `/v1/bibles/${bibleId}/chapters/${chapterId}/verses`
  );
  let data: VerseData[] = [];
  for (let i = 0; i < versesList.length; i++) {
    let verse = versesList[i];
    const _verse = await fetchData(
      `/v1/bibles/${bibleId}/verses/${verse.id}${verseQuery}`
    );
    data.push(_verse);
  }
  return data;
};
export { fetchBibles, fetchBooks, fetchChapters, fetchVerses };
