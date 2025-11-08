import sql from 'better-sqlite3'
import { MealType } from '../type/meal'

const db = sql('meals.db')

export async function getMeals(): Promise<MealType[]> {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return db.prepare('SELECT * FROM meals').all() as MealType[]
}
