import { defer } from '@remix-run/node'
import { Await, useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'

export async function loader() {
  const message = new Promise(resolve =>
    setTimeout(() => resolve('Hello there'), 1000)
  )

  return defer({ message })
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>()

  return (
    <div>
      <main>
        <h1>Defer bug repro</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={message} errorElement={<p>Error!</p>}>
            {message => <p>{message}</p>}
          </Await>
        </Suspense>
      </main>
    </div>
  )
}
