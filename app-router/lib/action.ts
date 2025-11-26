'use server'
import { revalidatePath } from 'next/cache'
import { ShareMealState } from '../type/meal'
import { MealInput } from '../type/meal'
import { saveMeal } from './meal'
import { redirect } from 'next/navigation'

function isInvaliText(text: string) {
  return !text || text.trim() === ''
}

export async function shareMeal(
  prevState: ShareMealState,
  formData: FormData
): Promise<ShareMealState> {
  const meal: MealInput = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
  }

  // 유효성 검사
  if (
    isInvaliText(meal.title) ||
    isInvaliText(meal.summary) ||
    isInvaliText(meal.instructions) ||
    isInvaliText(meal.creator) ||
    !meal.creator_email.includes('@') ||
    meal.image.size === 0
  ) {
    return {
      message: 'Please fill in all required fields correctly.',
      values: {
        name: meal.name,
        email: meal.email,
        title: meal.title,
        summary: meal.summary,
        instructions: meal.instructions,
        creator: meal.creator,
        creator_email: meal.creator_email,
        // image는 클라이언트에서 유지하므로 제외
      },
    }
  }

  await saveMeal(meal)
  revalidatePath('/meals', 'layout') // 해당 경로의 캐시 데이터 유효성 재검사, layout 설정하면 중첩된 모든 페이지들의 캐시도 재검사
  redirect('/meals')
}
