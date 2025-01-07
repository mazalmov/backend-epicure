import express from 'express';
import {
  searchByQuery,
  searchByPost,
} from '../controller/serchController';

const searchRoutes = express.Router();

searchRoutes.get('/', searchByQuery);
searchRoutes.post('/', searchByPost);


export default searchRoutes;