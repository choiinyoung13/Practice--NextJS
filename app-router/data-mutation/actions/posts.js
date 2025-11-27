'use server'

import { storePost, updatePostLikeStatus } from '@/lib/posts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPost(prevState, formData) {
  const title = formData.get('title')
  const image = formData.get('image')
  const content = formData.get('content')

  // validation check
  let error = []

  if (!title || title.trim().length === 0) {
    error.push('Title is required.')
  }

  if (!content || content.trim().length === 0) {
    error.push('Content is required.')
  }

  if (!image || image.size === 0) {
    error.push('Image is required.')
  }

  if (error.length > 0) {
    return { error, enteredValue: { title, content } }
  }

  const postContent = {
    imageUrl: '',
    title,
    content,
    userId: 1,
  }

  await storePost(postContent)

  redirect('/feed')
}

export async function togglePostIsLikedStatus(postId) {
  await updatePostLikeStatus(postId, 2)
  revalidatePath('/', 'layout')
}
