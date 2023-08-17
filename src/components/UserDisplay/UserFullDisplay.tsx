import { User } from '@/protocols'
import Image from 'next/image'
import Link from 'next/link'

export default function UserFullDisplay({ user }: { user: User }) {
  return (
    <>
      <Link href={user.html_url}>
        <div className="w-full relative my-4 rounded-lg shadow-lg hover:shadow-2xl p-6 bg-zinc-100">
          <div className="flex flex-wrap ">
            <Image
              src={user.avatar_url}
              alt="user avatar"
              width={80}
              height={80}
              className="rounded-full mr-2"
            />
            <div>
              <p className="text-xl">{user.name}</p>
              <p className=" text-zinc-600">{user.login}</p>
              <p className="  text-sm mt-1">
                {' '}
                Follower : {user.followers} Public Repositories :{' '}
                {user.public_repos}
              </p>
            </div>
          </div>
          <p className="absolute bottom-2 right-2">{user.location}</p>
          <p className="absolute top-2 right-2"> ID: {user.id}</p>
        </div>
      </Link>
    </>
  )
}
