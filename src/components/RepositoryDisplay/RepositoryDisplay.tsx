import { Repository } from '@/protocols'
import Link from 'next/link'

export default function RepositoryDisplay({
  repository,
}: {
  repository: Repository
}) {
  return (
    <>
      <Link href={repository.html_url}>
        <div className="w-full relative my-4 rounded-lg shadow-lg hover:shadow-2xl p-6 bg-zinc-200">
          <p className="text-lg">{repository.name}</p>
          <p className="text-sm text-zinc-600">
            {repository.language} updated at: {repository.updated_at}
          </p>
          {repository.description && (
            <div className="w-10/12 bg-zinc-300 rounded-lg p-2 mt-2">
              Description
              <p className="text-xs">{repository.description}</p>
            </div>
          )}
          <p className="absolute top-2 right-2 text-sm text-zinc-600">
            {' '}
            Data de criação: {repository.created_at}
          </p>
        </div>
      </Link>
    </>
  )
}
