import Link from 'next/link';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import {createPaginationLinks} from '../../../utils/pagination';
import cx from 'classnames';
import Previous from './previous';
import Next from './next';

const Pagination = ( {pagesCount, postName} ) => {
	if ( ! pagesCount || ! postName ) {
		return null;
	}

	const router = useRouter();
	const currentPageNo = parseInt( router?.query?.pageNo ) || 1;

	const paginationLinks = createPaginationLinks( currentPageNo, pagesCount );

	return (
		<div className="post-pagination">

			<Previous currentPageNo={currentPageNo} postName={postName}/>

			{paginationLinks.map( ( pageNo, index ) => {
				const paginationLink = `/${postName}/page/${pageNo}/`;
				return (
					pageNo === currentPageNo ? (
						<span
							aria-current="page"
							className="page-numbers current"
							key={index}
						>
							{ pageNo + '.'}
						</span>

					) : (
						'number' === typeof pageNo ? (
							<Link
								href={paginationLink}
								key={`id-${index}`}
							>
								<a className="page-numbers">{ pageNo + '.'}</a>
							</Link>
						) : (
						// If its "..."
							<span key={`id-${index}`} className="px-3 py-2">{pageNo}</span>
						)
					)
				);
			} )}
			<Next currentPageNo={currentPageNo} pagesCount={pagesCount} postName={postName}/>
		</div>
	);
};

Pagination.propTypes = {
	pagesCount: PropTypes.number,
	postName: PropTypes.string,
};

Pagination.defaultProps = {
	pagesCount: 0,
	postName: 'blog',
};

export default Pagination;
