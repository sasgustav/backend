import { Request, Response } from 'express';

import knex from '../database/connection';

class CarController {
  async index(req: Request, res: Response) {
    const cars = await knex('cars').select('*');

    return res.json(cars);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const car = await knex('cars').where('id', id).first();

    if (!car) {
      return res.status(400).json({ message: 'Car not found.' });
    }

    return res.json(car);
  }

  async create(req: Request, res: Response, next: any) {
    try {
      const bodyCar = req.body

      await knex('cars').insert(bodyCar)

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: any) {
    try {
      const bodyCar = req.body
      const { id } = req.params


      await knex('cars')
        .update(bodyCar)
        .where({ id })

      return res.status(204).send()

    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: any) {
    try {
      const { id } = req.params

      await knex('cars')
        .where({ id })

      return res.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

export default CarController;

