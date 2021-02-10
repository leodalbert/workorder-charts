import { connect } from 'react-redux';
import Header from './components/Header';
import { selectName, selectLogo } from 'selectors/siteGroup';

const mapStateToProps = (state) => ({
  name: selectName(state),
  logo: selectLogo(state),
});

const mapDispatchToProps = {};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
