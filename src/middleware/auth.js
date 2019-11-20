import { google }  from 'googleapis';
import axios from 'axios';

import key from '../../store/auth.json';
const scopes = 'https://www.googleapis.com/auth/admin.reports.usage.readonly';
const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes);
const view_id = 'XXXXXXX'

process.env.GOOGLE_APPLICATION_CREDENTIALS = '../../store/auth.json'

export default async (req, res, next) => {
jwt.authorize((err,response) => {
    
      const token = response
      try {
        req.aceessToken = token.access_token;
        
        return next();
      } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
      }
})
}

