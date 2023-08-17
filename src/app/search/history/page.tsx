'use client'

import UserDisplay from '@/components/UserDisplay/UserDisplay'
import { User } from '@/protocols'
import { useEffect, useState } from 'react'

export default function Page() {
  const [searchHistory, setSearchHistory] = useState<User[] | undefined>(
    undefined,
  )
  useEffect(() => {
    const local = localStorage.getItem('search') ?? '[]'
    setSearchHistory(JSON.parse(local))
  }, [])
  return (
    <>
      {searchHistory &&
        searchHistory.map((user) => <UserDisplay key={user.id} user={user} />)}
    </>
  )
}
