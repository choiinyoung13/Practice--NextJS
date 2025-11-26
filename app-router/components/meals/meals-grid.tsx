import { MealType } from '../../type/meal'
import MealItem from './meal-item'

type MealsGridProps = {
  meals: MealType[]
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className="w-[90%] max-w-360 grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20 my-8 mx-auto list-none p-0">
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  )
}
