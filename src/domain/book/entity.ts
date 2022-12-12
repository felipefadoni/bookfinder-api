export interface BookEntity {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  published_date: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
