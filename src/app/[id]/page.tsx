import { Repository, User } from '@/protocols'
import axios from 'axios'
import { RedirectType } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  let user: User
  let repos: Repository[]
  try {
    const { data: userData } = await axios.get<User>(
      `https://api.github.com/users/${id}`,
    )
    const { data: reposData } = await axios.get<Repository[]>(
      userData.repos_url,
    )
    user = userData
    repos = reposData

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    redirect('/', RedirectType.push)
  }
  return (
    <>
      <h1>{user.id}</h1>
      {repos.map((repo) => (
        <p key={repo.id}>{repo.full_name}</p>
      ))}
    </>
  )
}
