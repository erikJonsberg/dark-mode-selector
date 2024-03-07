import DarkModeSelector from "@/components/DarkModeSelector";

export default function Home() {
	return (
		<main className='min-h-screen flex flex-col px-24 py-10'>
			<div className='flex w-full justify-center'>
				<DarkModeSelector />
			</div>
			<div className='relative flex flex-grow items-center justify-center'>
				<h1 className='text-6xl font-bold'>Dark Mode Selector</h1>
			</div>
		</main>
	);
}
