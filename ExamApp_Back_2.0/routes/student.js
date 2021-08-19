
const express = require('express');
const router = express.Router();
const StudentController = require("../controllers/student")
/*
router.put('/changePassword', StudentController.changePassword);
router.put('/profileUpdate', StudentController.ProfileUpdate);
router.post('/loginreq', StudentController.loginRequired);
*/
router.get('/getSubjects', StudentController.loginRequired, StudentController.getSubjects)
router.post('/Studentlogin', StudentController.studentLogin);
router.post('/loginreq', StudentController.loginRequired);
router.put('/updatePassword', StudentController.loginRequired, StudentController.updatePassword);
router.put('/updateprofile', StudentController.loginRequired, StudentController.updateProfile);
router.post('/subjectSubmission', StudentController.loginRequired, StudentController.subjectSubmission)

module.exports = router;