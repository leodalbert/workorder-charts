import { connect } from 'react-redux';
import Header from './components/Header';
import { selectName, selectLogo } from 'selectors/siteGroup';
import { getWorkordersBySite } from 'actions/workorders';
import { getSiteGroupInfo } from 'actions/siteGroup';

const mapStateToProps = (state) => ({
  name: selectName(state),
  logo: selectLogo(state),
});

const mapDispatchToProps = { getWorkordersBySite, getSiteGroupInfo };

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
