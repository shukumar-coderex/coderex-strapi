export default function Categories( { categories } ) {
  return (
    <span className="ml-1">
      under
      {0 < categories.edges.length ? (
        categories.edges.map( ( category, index ) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ) )
      ) : (
        <span className="ml-1">{categories.edges.node.name}</span>
      )}
    </span>
  );
}
