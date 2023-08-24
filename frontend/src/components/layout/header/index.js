import {isEmpty} from 'lodash';
import PropTypes from 'prop-types';
import Menu from './nav';
const Header = ( {header, headerMenus, socialLinks, slug} ) => {
	if ( isEmpty( headerMenus ) ) {
		return null;
	}
	return (
		<Menu header={header} headerMenus={headerMenus} socialLinks ={socialLinks}/>
	);
};

Header.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string
};

Header.defaultProps = {
  header: {},
  headerMenus: [],
  slug: ''
};

export default Header;
