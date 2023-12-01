const UserModel = require("../Models/User");
const TodoModel = require("../Models/Todos");

const addTodo = async(req, res) => {
  try {
    let data = req.body;

    let updatedResponse =  await TodoModel.create(data);

    

    res.status(200).json({
        status:true,
        statusCode:200,
        data:updatedResponse,
        message:"Todo created successfully",
    })
  } catch (err) {
    console.log("err",err)
    res.status(400).json({
      status:false,
      statusCode:400,
      message:"Something went wrong while creating todo",
      error:err,
  })

  }
};

const editTodo = async(req, res) => {
  try {
    let data = req.body;
    let updatedResponse =  await TodoModel.findByIdAndUpdate(data.id,{$set:{text:data.newText}},{new:true});
    res.status(200).json({
        status:true,
        statusCode:200,
        data:updatedResponse,
        message:"Todo edited successfully",
    })
  } catch (err) {
    console.log("err",err)
    res.status(400).json({
      status:false,
      statusCode:400,
      message:"Something went wrong while creating todo",
      error:err,
  })

  }
};

const deleteTodo = async(req, res) => {
  try {
    let data = req.params;
    let updatedResponse =  await TodoModel.findByIdAndDelete(data.id);

    res.status(200).json({
        status:true,
        statusCode:200,
        data:updatedResponse,
        message:"Todo deleted successfully",
    })
  } catch (err) {
    console.log("err",err)
    res.status(400).json({
      status:false,
      statusCode:400,
      message:"Something went wrong while creating todo",
      error:err,
  })

  }
};

const completeTodo = async(req, res) => {
  try {
    let data = req.body;
    let todoResponse = await TodoModel.findById(data.id);

    let updatedResponse =  await TodoModel.findByIdAndUpdate(data.id,{ $set: { completed: !todoResponse.completed } },{new:true});

    res.status(200).json({
        status:true,
        statusCode:200,
        data:updatedResponse,
        message:"Todo created successfully",
    })
  } catch (err) {
    console.log("err",err)
    res.status(400).json({
      status:false,
      statusCode:400,
      message:"Something went wrong while creating todo",
      error:err,
  })

  }
};

const fetchTodoForUser = async(req, res) => {
  try {
    let data = req.params;

    let updatedResponse =  await TodoModel.find({userId:data.id});

    res.status(200).json({
        status:true,
        statusCode:200,
        data:updatedResponse,
        message:"Todo fetched successfully",
    })
  } catch (err) {
    console.log("err",err)
    res.status(400).json({
      status:false,
      statusCode:400,
      message:"Something went wrong while fetching todo",
      error:err,
  })

  }
};

module.exports={
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  fetchTodoForUser,
}

