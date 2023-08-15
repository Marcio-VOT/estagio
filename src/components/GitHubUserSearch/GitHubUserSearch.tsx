'use client'
import { User } from "@/protocols"
import axios from "axios"
import { useState } from "react"



export default function GitHubUserSearch(){
  const [user, setUser] = useState<undefined | User>(undefined)
  async function getUserData(data:FormData) {
    const username = data.get('username') ?? ''
    try {
      const { data: responseUser } = await axios.get<User>(`https://api.github.com/users/${username}`)
      console.log("tudo ok ", responseUser.repos_url )
    } catch (error : any) {
      console.log("tudo não ok ", error.message)
    }
  }

  return (
    <form action={getUserData}>
      <input type="text" name="username" />
      <button className="bg-gray-600">search</button>
    </form>
  )
}