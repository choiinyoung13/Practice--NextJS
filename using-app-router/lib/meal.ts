import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'
import { MealType } from '../type/meal'

const db = sql('meals.db')

export async function getMeals(): Promise<MealType[]> {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return db.prepare('SELECT * FROM meals').all() as MealType[]
}

export async function getMeal(slug: string): Promise<MealType> {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as MealType
}

export async function saveMeal(meal: {
  name: string
  email: string
  title: string
  summary: string
  instructions: string
  creator: string
  creator_email: string
  image: File
  slug?: string
}) {
  // slugify => 사용자의 입력을 웹 브라우저 주소창에 사용할 수 있는 형태로 자동 변환해주는 역할
  // ex) "Juicy Cheese Burger"	"juicy-cheese-burger", "Tom's Pizza!"	"toms-pizza"
  meal.slug = slugify(meal.title, { lower: true })

  // xss는 사용자가 입력한 HTML 코드에서 악의적인 스크립트를 제거하여
  // XSS(Cross-Site Scripting) 공격을 방지하는 라이브러리
  meal.instructions = xss(meal.instructions)

  let extension: string, fileName: string, buffer: Buffer

  extension = meal.image.name.split('.').pop() || '' // "photo.jpg" → "jpg"
  fileName = `${meal.slug}.${extension}`
  // File → ArrayBuffer → Buffer
  const arrayBuffer = await meal.image.arrayBuffer()
  buffer = Buffer.from(arrayBuffer)

  // 파일 시스템에 저장
  // public/images/juicy-cheese-burger.jpg 형태로 저장
  const stream = fs.createWriteStream(`public/images/${fileName}`)
  stream.write(buffer, error => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  })

  // DB에 저장할 이미지 경로로 변경
  const imagePath = `/images/${fileName}` // "/images/juicy-cheese-burger.jpg"

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run({
    title: meal.title,
    summary: meal.summary,
    instructions: meal.instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
    image: imagePath,
    slug: meal.slug,
  })
}
