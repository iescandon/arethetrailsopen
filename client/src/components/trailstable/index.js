import React, { useState } from 'react';
import { Dropdown, Form, Button, Modal } from 'react-bootstrap';
import './style.css';
import Table from 'react-bootstrap/Table';
// import Modal from '../modal';
// import { formatRelative } from 'date-fns';

function TrailsTable({
	selectedTrail,
	updateTrailCondition,
	updateCurrentDate,
}) {
	const trailConditions = [
		'Unknown',
		'Dry',
		'Hero',
		'Tacky',
		'Muddy',
		'Wet',
		// '✗ Under Construction',
	];

	const [show, setShow] = useState(false);
	const [selectedRow, setSelectedRow] = useState({});
	const [trailComment, setTrailComment] = useState('');
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = ({ target }) => {
		const { value } = target;
		setTrailComment(value);
	};

	return (
		<Table className="table table-striped mt-3">
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
									<div className="col">
										<div
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
										</div>
										<div className="row tablerow trailName">{trail.name}</div>
										<div className="row tablerow trailUpdated">
											{updateCurrentDate(trail.lastUpdated)}
										</div>
									</div>
									<div className="col comments my-auto">comments</div>
									<div
										className="col-2 my-auto text-center"
										onClick={handleShow}
									>
										<i class="fa fa-comment commentIcon"></i>
									</div>
								</div>
							</td>
							{selectedRow === trail ? (
								<Modal show={show} onHide={handleClose}>
									<Modal.Body>
										<div className="row justify-content-center mt-4">
											Anything we should watch out for on the trails?
										</div>
										<div>
											<Form>
												<Form.Group controlId="exampleForm.ControlTextarea1">
													<Form.Control
														as="textarea"
														rows={3}
														value={trailComment}
														onChange={(event) => {
															handleInputChange(event);
														}}
													/>
												</Form.Group>
											</Form>
										</div>
										<Button variant="primary" onClick={handleClose}>
											Add Comment
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
