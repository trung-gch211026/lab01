var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res)=>{
    var students = await StudentModel.find();
    res.render('student/studentList', {students: students})
})

router.get('/delete/:id', async(req,res)=>{
    var id = req.params.id
    await StudentModel.findByIdAndDelete(id)
    .then(() => console.log("Delete successfully"))
    .catch((error) => console.log("Delete failed"));
    res.redirect('/student')
})

router.get('/deleteall', async (req, res)=>{
    await StudentModel.deleteMany()
    .then(() => console.log("Delete successfully"))
    .catch((error) => console.log("Delete failed"));
    res.redirect("/student");
})

router.get('/add', (req, res)=>{
    res.render('student/studentAdd')
})

router.post('/add', async (req, res)=>{
    var student = req.body
    await StudentModel.create(student)
    .then(console.log('Add successfully'))
    .catch(err=>console.log(err))
    res.redirect("/student")
})

module.exports = router;