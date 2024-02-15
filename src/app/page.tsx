import DarkModeSelector from "@/components/dark-mode-selector";

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col px-24 py-10'>
			<div className='flex w-full justify-center'>
				<DarkModeSelector />
			</div>
			<div className='flex flex-grow items-center justify-center'>
				<h1 className='text-6xl font-bold'>Dark Mode Select</h1>
			</div>
		</main>
	);
}
