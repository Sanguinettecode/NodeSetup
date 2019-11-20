import {google} from 'googleapis';
import api from '../../services/gaxiosConfig'

class MyController{
  async method(req, res){
    const data = '2019-11-01';
    res.send(req.aceessToken)
    const config = {
      headers: {'Authorization': "Bearer " + req.aceessToken, 'Accept': 'application/json'}
    };
    const response  = await api.get(`/usage/users/all/dates/${data}`,
    config)
    res.send(response)
  }
}

export default new MyController();