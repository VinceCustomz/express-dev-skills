const skill = require('../models/skill');
const skillDB = require('../models/skill')

module.exports = {
    index: index,
    show: show,
    new: newSkill,
    create,
    delete: deleteTodo,
    update,
    edit
};

function index(req, res) {
    res.render('skills/index', {
        skills: skillDB.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    console.log(req.body);
    res.redirect('/todos');
}

function deleteTodo(req, res) {
    skillDB.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    res.render('skills/edit', {skill: skillDB.getOne(req.params.id)})
}

function update(req, res) {
    skillDB.updateOne(req.params.id, req.body)
    res.redirect('/skills/' + req.params.id)
}

