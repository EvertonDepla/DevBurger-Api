import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Everton2',
    email: 'everton2@email.com',
    password_hash: 'dejdsjadkd',
  });

  return response.status(201).json(user);
});

export default routes;
