var express = require('express');
var router = express.Router();
var ctrlEmployee = require('./employee.controller');

// reviews
router.get('/employees', ctrlEmployee.employeesReadAll);
router.get('/employees/:employeeid', ctrlEmployee.employeesReadOne);
router.post('/employees', ctrlEmployee.employeesCreate);
router.put('/employees/:employeeid', ctrlEmployee.employeesUpdateOne);
router.delete('/employees/:employeeid', ctrlEmployee.employeesDeleteOne);


module.exports = router;