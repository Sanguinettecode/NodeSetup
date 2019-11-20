class MyController{
  async method(req, res){
    res.json({message: 'Hello World'})
  }
}

export default new MyController()