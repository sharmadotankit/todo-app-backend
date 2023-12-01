const UserModel = require("../Models/User");
const TodoModel = require("../Models/Todos");

const addTodo = async(req, res) => {
  try {
    let data = req.body;
    console.log(data);
    return;

    let updatedResponse =  await TodoModel.findByIdAndUpdate(clientId,{...data},{new:true});

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

    let updatedResponse =  await TodoModel.findByIdAndUpdate(clientId,{...data},{new:true});

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

const deleteTodo = async(req, res) => {
  try {
    let data = req.body;

    let updatedResponse =  await TodoModel.findByIdAndUpdate(clientId,{...data},{new:true});

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

const completeTodo = async(req, res) => {
  try {
    let data = req.body;

    let updatedResponse =  await TodoModel.findByIdAndUpdate(clientId,{...data},{new:true});

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

module.exports={
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
}

