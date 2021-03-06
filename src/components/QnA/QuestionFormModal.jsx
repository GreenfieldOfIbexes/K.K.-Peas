import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import QuestionForm from "./QuestionForm";

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	return {
		top: `50%`,
		left: `50%`,
		transform: `translate3d(-50%, -50%, 0)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 500,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function SimpleModal({
	question,
	updateSortedQuestions,
	sortedQuestions,
}) {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<button
				type="button"
				className="buttons buttons_addOne all_btns"
				onClick={handleOpen}>
				ADD A QUESTION <span className="buttons_addOne_plus"> +</span>
			</button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					<QuestionForm
						question={question}
						handleClose={handleClose}
						sortedQuestions={sortedQuestions}
						updateSortedQuestions={updateSortedQuestions}
					/>
				</div>
			</Modal>
		</div>
	);
}
