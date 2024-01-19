'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { tv } from 'tailwind-variants'

const currentMenu = tv({
	base: 'active:opacity-80 font-versos',
	variants: {
		active: {
			true: 'underline font-bold',
		},
	},
})

export const Menu = () => {
	const pathname = usePathname()

	const links = [
		{
			label: 'stock',
			path: '/dashboard',
		},
		{
			label: 'tier list',
			path: '/dashboard/tier-list',
		},
	]

	return (
		<nav className='ml-8 flex space-x-4'>
			{links.map(e => (
				<Link className={currentMenu({ active: e.path === pathname })} href={e.path}>
					{e.label}
				</Link>
			))}
		</nav>
	)
}
