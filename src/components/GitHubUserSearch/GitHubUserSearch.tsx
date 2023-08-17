'use client'
import { User } from '@/protocols'
import axios from 'axios'
import { useState } from 'react'
import UserDisplay from '../UserDisplay/UserDisplay'

export default function GitHubUserSearch() {
  const [user, setUser] = useState<undefined | User>(undefined)
  const [userName, setUserName] = useState<string>('')

  async function getUserData() {
    try {
      const { data: responseUser } = await axios.get<User>(
        `https://api.github.com/users/${userName}`,
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
      <div className="w-full flex">
        <input
          type="text"
          name="username"
          className="w-full rounded-s-lg outline-none pl-3 text-zinc-800"
          placeholder="GitHub Username..."
          value={userName}
          onChange={({ target: { value } }) => setUserName(value)}
          onKeyDown={(e) => e.key === 'Enter' && getUserData()}
        />
        <button
          onClick={getUserData}
          className="bg-zinc-50 hover:bg-zinc-400 border-l-[1px] p-1 rounded-e-lg border-gray-600"
        >
          search
        </button>
      </div>
      {user && <UserDisplay user={user} />}
    </>
  )
}
