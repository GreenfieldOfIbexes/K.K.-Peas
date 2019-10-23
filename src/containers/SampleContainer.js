import ComponentName from "../components/WidgetName/ComponentName/ComponentName.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
	intendedPropNameInComponent: state.nameOfPropInStore,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	intendedMethodNameInComponent: (someInfoFromComponent) => {
		dispatch(someActionObject(someInfoFromComponent));
	},
});

const ContainerName = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ComponentName);

export default ContainerName;
