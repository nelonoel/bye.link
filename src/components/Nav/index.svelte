<script>
  import NavLink from './Link.svelte'
  export let user
  export let asset
</script>

<aside
  class="transform translate-x-full sm:transform flex flex-col sm:flex-row
  xl:flex-col justify-start sm:justify-between xl:justify-start items-stretch
  sm:items-end xl:items-stretch absolute sm:relative h-screen sm:h-auto
  xl:h-screen overflow-x-hidden overflow-y-auto w-full xl:w-primary-sidebar
  bg-gray-800 text-gray-300 z-20">
  <nav class="py-4 sm:py-0 xl:py-4">
    <h6 class="text-caps px-4 text-gray-600 my-2 sm:hidden xl:block">
      Navigation
    </h6>
    <ul class="flex flex-col sm:flex-row xl:flex-col">
      <NavLink
        isActive={asset === 'contacts'}
        href={`/${user}/contacts`}
        count={3}>
        <path
          slot="icon"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0
          00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        <span class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base">
          Contacts
        </span>
      </NavLink>

      <NavLink
        isActive={asset === 'passwords'}
        href={`/${user}/passwords`}
        count={6}>
        <path
          slot="icon"
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0
          01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        <span class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base">
          Passwords
        </span>
      </NavLink>

      <NavLink isActive={asset === 'cards'} href={`/${user}/cards`} count={3}>
        <path
          slot="icon"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0
          00-3 3v8a3 3 0 003 3z" />
        <span class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base">
          Cards
        </span>
      </NavLink>

      <NavLink isActive={asset === 'notes'} href={`/${user}/notes`} count={5}>
        <path
          slot="icon"
          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414
          4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0
          002 2h8a2 2 0 002-2v-2" />
        <span class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base">
          Notes
        </span>
      </NavLink>

      <NavLink isActive={asset === 'diary'} href={`/${user}/diary`} count={120}>
        <path
          slot="icon"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3
          6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168
          5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477
          18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        <span class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base">
          Diary
        </span>
      </NavLink>
    </ul>
  </nav>

  <footer class="py-4 sm:py-0 xl:py-4">
    <h6 class="text-caps px-4 text-gray-600 mb-2 sm:hidden xl:block">
      Settings
    </h6>
    <ul class="flex flex-col sm:flex-row xl:flex-col">
      <NavLink isActive={typeof asset === 'undefined'} href={`/${user}`}>
        <path
          slot="icon"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879
          1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <span class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base">
          User
          <span class="inline sm:hidden xl:inline">Account</span>
        </span>
      </NavLink>

      <NavLink href="/">
        <path
          slot="icon"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3
          3 0 013-3h7a3 3 0 013 3v1" />
        <span
          class="mx-3 sm:mx-2 xl:mx-3 text-base sm:text-xs lg:text-base inline
          lg:hidden xl:inline">
          Log out
        </span>
      </NavLink>
    </ul>
  </footer>
</aside>
