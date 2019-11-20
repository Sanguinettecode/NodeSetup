import {google} from 'googleapis';
import axios from '../../services/gaxiosConfig'

class MyController{
  async method(req, res){
    res.send('Heeloo')
  }
}

export default new MyController();