import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ClassDetailContent from './ClassDetailContent'
import { classesData } from '@/data/classesData'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const classNumber = parseInt(id)
  const classData = classesData.find((c) => c.classNumber === classNumber)

  if (!classData) {
    return {
      title: 'Class Not Found',
    }
  }

  return {
    title: `${classData.className} - Apna Ghar | Complete Study Material`,
    description: `Access comprehensive study materials, videos, notes, and practice tests for ${classData.className}. ${classData.subjects.length} subjects with ${classData.totalContent}+ resources.`,
  }
}

export async function generateStaticParams() {
  return classesData.map((classItem) => ({
    id: classItem.classNumber.toString(),
  }))
}

export default async function ClassPage({ params }: Props) {
  const { id } = await params
  const classNumber = parseInt(id)
  const classData = classesData.find((c) => c.classNumber === classNumber)

  if (!classData) {
    notFound()
  }

  return <ClassDetailContent classData={classData} />
}
