import React from "react"
import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { keystoneContext } from "../utils/keystone.server"

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	// WARNING: this does nothing for now
	//   You will probably use Remix Sessions like in
	//   https://remix.run/docs/en/main/tutorials/jokes
	console.log("### request.body: ", request.body)

	const session = {}
	const context = keystoneContext.withSession(session)
	return {
		posts: (await context.query.Post.findMany({
			query: "id name content",
		})) as { id: string; name: string; content: string }[],
	}
}

export default function Index() {
	const data = useLoaderData<typeof loader>()

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center gap-16">
				<header className="flex flex-col items-center gap-9">
					<h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
						Welcome to <span className="sr-only">Remix</span>
					</h1>
					<div className="h-[144px] w-[434px]">
						<img
							src="/logo-light.png"
							alt="Remix"
							className="block w-full dark:hidden"
						/>
						<img
							src="/logo-dark.png"
							alt="Remix"
							className="hidden w-full dark:block"
						/>
					</div>
				</header>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</div>
	)
}
