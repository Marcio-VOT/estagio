import { User } from '@/protocols'
import Image from 'next/image'
import YSeparator from '../YSeparator/YSeparator'

export default function UserDisplay({ user }: { user: User }) {
  return (
    <>
      <YSeparator />
      <div className="w-full relative m-4">
        <div className="flex flex-wrap w-full">
          <Image
            src={user.avatar_url}
            alt="user avatar"
            width={40}
            height={40}
          />
          <div>
            <p>{user.name}</p>
            <p>{user.login}</p>
          </div>
        </div>
        <p className="absolute bottom-2 right-2">{user.location}</p>
      </div>
      <YSeparator />
    </>
  )
}
// "https://avatars.githubusercontent.com/u/115326340?v=4"
// name "Marcio Fran."
// login "Marcio-VOT"
// "Brazil - PR"
