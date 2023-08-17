import { User } from '@/protocols'
import Image from 'next/image'
import Link from 'next/link'

export default function UserDisplay({ user }: { user: User }) {
  return (
    <>
      <Link href={`/${user.login}`}>
        <div className="w-full relative my-4 rounded-lg shadow-lg hover:shadow-2xl p-4 bg-zinc-100">
          <div className="flex flex-wrap ">
            <Image
              src={user.avatar_url}
              alt="user avatar"
              width={80}
              height={80}
              className="rounded-full mr-2"
            />
            <div className="mt-1">
              <p className="text-xl">{user.name}</p>
              <p className=" text-zinc-600">{user.login}</p>
            </div>
          </div>
          <p className="absolute bottom-2 right-2">{user.location}</p>
        </div>
      </Link>
    </>
  )
}
// "https://avatars.githubusercontent.com/u/115326340?v=4"
// name "Marcio Fran."
// login "Marcio-VOT"
// "Brazil - PR"
