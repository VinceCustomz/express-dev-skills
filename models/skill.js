const skills = [
    {id: 12345, skill: 'Javascript', completed: true},
    {id: 12355, skill: 'Python', completed: false},
    {id: 12366, skill: 'Node.js', completed: false}
  ];
  
  module.exports = {
    getAll:getAll,
    getOne:getOne,
    create,
    deleteOne,
    updateOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function updateOne (id, data) {
    let idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].skill = data.skill
  }