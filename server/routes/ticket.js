const express = require('express')
const db = require('mongoose');
const path = require('path')
const ticket_controller = require('../controllers/ticket_controller');

/**
 * express module
 */
var app = express()

/**
 * Gets all ticket from the DB.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.get('/ticket', ticket_controller.ticket_all);

/**
 * Creates ticket and saves it in the DB.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.post('/ticket', ticket_controller.ticket_create);

/**
 * Get a ticket from the DB.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.get('/ticket/:id', ticket_controller.ticket_details);

/**
 * Update a ticket from the DB by ID.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.put('/ticket/update/:id', ticket_controller.ticket_update_by_id);

/**
 * Cancel a ticket from the DB by ID. Verifies if user that cancels it is ticket owner.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.put('/ticket/update/:id', ticket_controller.ticket_update_by_id);

/**
 * Assign ticket to specialist by ticket id and specialist username.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.put('/ticket/assign/:id', ticket_controller.ticket_assign_to_specialist);

/**
 * Delete a ticket from the DB by ID.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.put('/ticket/delete/:id', ticket_controller.ticket_delete_by_id);


/**
 * Divide a ticket in two tickets.
 * @module ticket
 * @function
 * @param {String} path
 * @param {Function} callback 
 * @return {Object} - Status, ticket.
 */
app.post('/ticket/divide/:id', ticket_controller.ticket_divide);

module.exports = app;