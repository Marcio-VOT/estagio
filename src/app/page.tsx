import GitHubUserSearch from '@/components/GitHubUserSearch/GitHubUserSearch'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="p-2 bg-zinc-200 rounded-se-lg sm:rounded-t-lg w-fit absolute bottom-[92%] left-0 pb-1">
        <Link href={'/search/history'}>History</Link>
      </div>
      <GitHubUserSearch />
    </>
  )
}
