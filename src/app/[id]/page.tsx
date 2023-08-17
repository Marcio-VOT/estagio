import RepositoryDisplay from '@/components/RepositoryDisplay/RepositoryDisplay'
import UserFullDisplay from '@/components/UserDisplay/UserFullDisplay'
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
    console.log(error.message)
    redirect('/', RedirectType.push)
  }
  return (
    <>
      <UserFullDisplay user={user} />
      <div className="w-full">
        <h1 className="w-full rounded-full text-lg bg-zinc-50 text-center py-2">
          Repositories
        </h1>
        {repos.map((repo) => (
          <RepositoryDisplay key={repo.id} repository={repo} />
        ))}
      </div>
    </>
  )
}
