import { withRouter } from 'react-router-dom';
import { useAuth } from './../components/customHooks';

const WithAuth = props => useAuth(props) && props.children;

export default withRouter( WithAuth);
   