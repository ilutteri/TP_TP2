import jwt from 'jsonwebtoken';
import { User, Tablero } from '../Models/models.js';

export const getUserIdFromToken = async (token) => {
    if (!token) {
      throw new Error('No token provided');
    }
  
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      throw new Error('User not found');
    }
  
    return user.id;
  };
  
  export const getTableroIdFromUserId = async (userId) => {
    const tablero = await Tablero.findOne({ where: { userId } });
    if (!tablero) {
      throw new Error('Tablero not found');
    }
  
    return tablero.id;
  };