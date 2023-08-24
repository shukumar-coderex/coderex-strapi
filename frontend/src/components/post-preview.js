import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import Categories from './categories';

export default function PostPreview( {
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
} ) {

  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div>

        </div>

      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      <Avatar author={author} />
    </div>
  );
}

// {categories.edges.length > 0 ? (
//   categories.edges.map((category, index) => (
//     <span key={index} className="ml-1">
//       {category.node.name}
//     </span>
//   ))
// ) : (
//   <span className="ml-1">{categories.edges.node.name}</span>
// )}
