export interface MealType {
  id: number
  title: string
  slug: string
  image: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
}

export interface MealInput {
  name: string
  email: string
  title: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
  image: File
  slug?: string
}

export interface ShareMealState {
  message?: string
  values?: Omit<MealInput, 'image'>
}
