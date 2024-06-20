import jwt from 'jsonwebtoken';
import { User } from '../Models/models.js';

const attachUserId = async (req, res) => {
    console.log(req)
    console.log(req.user.id)
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).send({ success: false, message: 'No token provided' });
      }
  
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(401).send({ success: false, message: 'User not found' });
      }
      
      return req.userId = user.id; // Adjunta el userId a la request
      
    } catch (error) {
      res.status(401).send({ success: false, message: 'Unauthorized' });
    }
  };
  
  export default attachUserId;