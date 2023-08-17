'use client'
import { User } from '@/protocols'
import axios from 'axios'
import { useState } from 'react'
import UserDisplay from '../UserDisplay/UserDisplay'

export default function GitHubUserSearch() {
  const [user, setUser] = useState<undefined | User>(undefined)
  const [userName, setUserName] = useState<string>('')

  async function getUserData(data: FormData) {
    const username = data.get('username') ?? ''
    try {
      const { data: responseUser } = await axios.get<User>(
        `https://api.github.com/users/${username}`,
      )
      console.log('tudo ok ', responseUser)
      setUser(responseUser)
      setUserName('')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setUser(undefined)
      console.log('tudo não ok ', error.message)
    }
  }

  return (
    <>
      <form action={getUserData} className="w-full flex">
        <input
          type="text"
          name="username"
          className="w-full rounded-s-lg outline-none pl-3 text-zinc-800"
          placeholder="GitHub Username..."
          value={userName}
          onChange={({ target: { value } }) => setUserName(value)}
        />
        <button className="bg-zinc-700 hover:bg-zinc-800 border-l-2 p-1 rounded-e-lg border-gray-800">
          search
        </button>
      </form>
      {user && <UserDisplay user={user} />}
    </>
  )
}
