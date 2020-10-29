export type Bible = {
  abbreviation: string;
  abbreviationLocal: string;
  audioBibles: [];
  countries: { id: string; name: string; nameLocal: string }[];
  dblId: string;
  description: string;
  descriptionLocal: string;
  id: string;
  language: {
    id: string;
    name: string;
    nameLocal: string;
    script: string;
    scriptDirection: string;
  };
  name: string;
  nameLocal: string;
  relatedDbl: any;
  type: string;
  updatedAt: string;
};
export type Book = {
  abbreviation: string;
  bibleId: string;
  id: string;
  name: string;
  nameLong: string;
};
export type Chapter = {
  bibleId: string;
  bookId: string;
  id: string;
  number: string;
  reference: string;
};
export type Verse = {
  bibleId: string;
  bookId: string;
  chapterId: string;
  id: string;
  orgId: string;
  reference: string;
};
export type VerseData = {
  bibleId: string;
  bookId: string;
  chapterId: string;
  content: string;
  copyright: string;
  id: string;
  next: { id: string; number: string };
  orgId: string;
  previous: { id: string; number: string };
  reference: string;
  verseCount: number;
};
