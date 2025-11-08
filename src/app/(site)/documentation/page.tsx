import { Documentation } from '@/app/components/documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | Apna Ghar',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}
