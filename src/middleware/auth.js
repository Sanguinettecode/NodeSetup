import { google }  from 'googleapis';

import key from '../../store/auth.json';
const scopes = 'https://www.googleapis.com/auth/admin.reports.usage.readonly';
const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes);
const view_id = 'XXXXXXX'

process.env.GOOGLE_APPLICATION_CREDENTIALS = './auth.json'

export default async (req, res, next) => {
jwt.authorize((err,response) => {
    
      const token = response
      try {
        req.aceess_token = token.aceess_token;
        return next();
      } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
      }
})
}
/*
jwt.authorize((err, response) => {
  google.analytics('v3').data.ga.get(
    {
      auth: jwt,
      ids: 'ga:' + view_id,
      'start-date': '30daysAgo',
      'end-date': 'today',
      metrics: 'ga:pageviews'
    },
    (err, result) => {
      console.log(err, result)
    }
  )
}) */
