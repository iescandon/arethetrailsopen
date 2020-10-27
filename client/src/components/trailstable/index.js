import React, { useState } from 'react';
import { Dropdown, Form, Button, Modal } from 'react-bootstrap';
import './style.css';
import Table from 'react-bootstrap/Table';

function TrailsTable({
	selectedTrail,
	updateTrailCondition,
	updateCurrentDate,
	addTrailComment,
}) {
	const trailConditions = [
		'Unknown',
		'Dry',
		'Hero',
		'Tacky',
		'Muddy',
		'Wet',
		'Under Construction',
	];

	const [show, setShow] = useState(false);
	const [selectedRow, setSelectedRow] = useState({});
	const [trailComment, setTrailComment] = useState({
		comment: '',
		commenter: '',
	});
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = ({ target }) => {
		const { name, value } = target;
		setTrailComment({
			...trailComment,
			[name]: value,
		});
	};

	return (
		<Table className="table mt-3">
			<tbody>
				{selectedTrail.trails.map((trail) => {
					return (
						<tr key={trail.trailId}>
							<td
								className="tableTrailReport"
								onClick={() => {
									setSelectedRow(trail);
								}}
							>
								<div className="row">
									<div className="col my-auto">
										{/* <div
											className={`row tablerow condition ${trail.condition}`}
										>
											<Dropdown>
												<Dropdown.Toggle
													variant=""
													id="dropdown-basic"
													className={`condition pl-0 ${trail.condition}`}
													// className="btn-outline-secondary"
												>
													{trail.condition}
												</Dropdown.Toggle>
												<Dropdown.Menu>
													{trailConditions.map((condition) => {
														return (
															<Dropdown.Item
																key={condition}
																onClick={(event) => {
																	updateTrailCondition(trail.trailId, event);
																}}
																data-condition={condition}
															>
																{condition}
															</Dropdown.Item>
														);
													})}
												</Dropdown.Menu>
											</Dropdown>
										</div> */}
										<div className="pl-4 trailName">{trail.name}</div>
										{/* <div className="row tablerow trailUpdated">
											{updateCurrentDate(trail.lastUpdated)}
										</div> */}
									</div>
									<div className="col">
										<div className={`condition ${trail.condition}`}>
											<Dropdown>
												<Dropdown.Toggle
													variant=""
													id="dropdown-basic"
													className={`condition px-0 mr-0 ${trail.condition}`}
													// className="btn-outline-secondary"
												>
													{trail.condition}
												</Dropdown.Toggle>
												<Dropdown.Menu>
													{trailConditions.map((condition) => {
														return (
															<Dropdown.Item
																key={condition}
																onClick={(event) => {
																	updateTrailCondition(trail.trailId, event);
																}}
																data-condition={condition}
															>
																{condition}
															</Dropdown.Item>
														);
													})}
												</Dropdown.Menu>
											</Dropdown>
										</div>
										<div className="trailUpdated">
											Last updated {updateCurrentDate(trail.lastUpdated)}
										</div>
									</div>
									{/* <div className="col">
										<div className="trailUpdated">
											Last updated {updateCurrentDate(trail.lastUpdated)}
										</div>
									</div> */}
									{/* {trail.comment === '' ? null : (
										<div className="col comments my-auto">
											<div className="comment">{trail.comment}</div>
											<div className="commentDiv">
												{`Report by `}
												{trail.commenter === '' ? (
													<span className="commenter">Anonymous Rider</span>
												) : (
													<span className="commenter">{trail.commenter}</span>
												)}{' '}
												{updateCurrentDate(trail.commentDate)}
											</div>
										</div>
									)}
									<div
										className="col-2 my-auto text-center"
										onClick={handleShow}
									>
										<i className="fa fa-comment commentIcon"></i>
									</div> */}
								</div>
								<div className="row mt-3 pl-4" onClick={handleShow}>
									{trail.comment === '' ? (
										<div className="col commentBox"></div>
									) : (
										<div className="col comments pr-0 py-2 px-2 commentBox my-auto">
											<div className="comment">{trail.comment}</div>
											<div className="commentDiv">
												{`Report by `}
												{trail.commenter === '' ? (
													<span className="commenter">Anonymous Rider</span>
												) : (
													<span className="commenter">{trail.commenter}</span>
												)}{' '}
												{updateCurrentDate(trail.commentDate)}
											</div>
										</div>
									)}
									<div
										className="col-2 my-auto text-center"
										// onClick={handleShow}
									>
										<i className="fa fa-comment commentIcon"></i>
									</div>
								</div>
							</td>
							{selectedRow === trail ? (
								<Modal show={show} onHide={handleClose}>
									<Modal.Body>
										<Form>
											<Form.Group controlId="exampleForm.ControlTextarea1">
												<Form.Label>
													Anything we should watch out for on the trails?
												</Form.Label>
												<Form.Control
													as="textarea"
													rows={3}
													name="comment"
													value={trailComment.comment}
													onChange={(event) => {
														handleInputChange(event);
													}}
												/>
											</Form.Group>
											<Form.Group controlId="exampleForm.ControlInput1">
												<Form.Label>What's your name?</Form.Label>
												<Form.Control
													type="email"
													placeholder=""
													name="commenter"
													value={trailComment.commenter}
													onChange={(event) => {
														handleInputChange(event);
													}}
												/>
											</Form.Group>
										</Form>
										<Button
											variant="primary"
											onClick={() => {
												setTrailComment({
													comment: '',
													commenter: '',
												});
												handleClose();
												addTrailComment(trailComment, trail.trailId);
											}}
										>
											Submit Report
										</Button>
									</Modal.Body>
								</Modal>
							) : null}
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}

export default TrailsTable;
