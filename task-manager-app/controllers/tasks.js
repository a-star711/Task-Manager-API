const getAllTasks = (req,res) => {
  res.send('All Items from the file')
}

const createTask = (req,res) => {

  res.json(req.body)
}

const getSingleTask = (req,res) => {
  res.json({id:req.params.id})
}

const updateTask = (req,res) => {
  res.json({id:req.params.id})
  res.send('Task has been updated')
}

const deleteTask = (req,res) => {
  res.send('Task has been deleted')
}


module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}