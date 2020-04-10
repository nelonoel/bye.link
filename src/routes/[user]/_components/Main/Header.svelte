<script></script>

<header class="flex justify-between h-16 border-b border-gray-300">
	<div class="flex">
		<a href={`/user/contacts`} class="flex flex-col items-center justify-center text-gray-600 hover:text-gray-700 px-3 lg:hidden">
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				class="w-6 h-6"
			>
				<path d="M4 6h16M4 12h16M4 18h7"></path>
			</svg>
		</a>
		<div class="flex items-center pl-1 lg:pl-3 pr-4 w-primary-sidebar cursor-pointer">
			<picture class="rounded-full bg-gray-100 text-gray-400 relative">
				<svg
					fill="currentColor"
					viewBox="0 0 20 20"
					class="w-8 h-8 transform scale-110"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
						clip-rule="evenodd"
					></path>
				</svg>
			</picture>
			<picture class="rounded-full bg-gray-100 text-gray-400 -ml-6 relative">
				<svg
					fill="currentColor"
					viewBox="0 0 20 20"
					class="w-8 h-8 transform scale-110"
				>
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
						clip-rule="evenodd"
					></path>
				</svg>
			</picture>
			<div class="flex justify-center items-center rounded-full bg-gray-400 text-white -ml-6 relative w-8 h-8 border-2 border-gray-100 text-sm font-bold">
				3
			</div>
			<span class="ml-2 text-gray-600"
				>Shared</span
			>
		</div>
	</div>
	<div class="flex items-center px-4">
		<button
			class="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none
      text-gray-600 hover:text-gray-700 focus:text-gray-700 py-2 px-5 ml-2"
		>
			Cancel
		</button>
		<button
			class="flex whitespace-no-wrap items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:bg-blue-500 focus:outline-none
      text-white py-2 px-5 ml-2"
		>
			Save Changes
		</button>
	</div>
</header>
