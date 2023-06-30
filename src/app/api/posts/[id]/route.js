import { NextResponse } from 'next/server'
import connect from '../../../../utils/db'
import Post from '../../../../models/Post'

export async function GET(request, { params }) {
  const { id } = params

  try {
    await connect()
    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const { id } = params

  try {
    await connect()
    await Post.findByIdAndDelete(id)

    return new NextResponse('Post has been Deleted', { status: 200 })
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 })
  }
}
