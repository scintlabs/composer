import fs from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'

interface FileNode {
  name: string
  path: string
  type: 'file' | 'directory'
}

const ROOT_DIR = path.join(process.cwd(), 'src')

function isSubPath(parent: string, target: string) {
  const relative = path.relative(parent, target)
  return !relative.startsWith('..') && !path.isAbsolute(relative)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const relPath = searchParams.get('path') ?? ''
  const targetPath = path.join(ROOT_DIR, relPath)

  if (!isSubPath(ROOT_DIR, targetPath)) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
  }

  try {
    const entries = await fs.readdir(targetPath, { withFileTypes: true })
    const children: FileNode[] = entries.map((entry) => ({
      name: entry.name,
      path: path.join(relPath, entry.name),
      type: entry.isDirectory() ? 'directory' : 'file',
    }))
    return NextResponse.json({ path: relPath, children })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unable to read directory' }, { status: 500 })
  }
}
