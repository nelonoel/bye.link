<script>
  import NavLink from './Link.svelte'
  export let user
  export let asset
  export let minimal = false
</script>

<style>
  .hide {
    display: none;
  }
</style>

<nav class="{`py-0 xl:py-4 ${$$props.class || ''}`}">
  <h6 class="text-caps px-4 text-gray-600 mb-2 hidden xl:block">Settings</h6>
  <ul class="flex flex-row xl:flex-col">
    <NavLink
      class="{minimal ? 'px-3' : 'px-2'}"
      isActive="{typeof asset === 'undefined'}"
      icon="{`
        <path
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879
          1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />`}"
      href="{`/${user}`}"
    >
      <span
        class="mx-2 xl:mx-3 text-xs lg:text-base whitespace-no-wrap"
        class:hide="{minimal}"
      >
        User
        <span class="hidden xl:inline">Account</span>
      </span>
    </NavLink>

    <NavLink
      class="{minimal ? 'px-3' : 'px-2'}"
      icon="{`<path
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3
          3 0 013-3h7a3 3 0 013 3v1" />`}"
      href="/"
    >
      <span
        class="mx-2 xl:mx-3 text-xs lg:text-base inline lg:hidden xl:inline
        whitespace-no-wrap"
        class:hide="{minimal}"
      >
        Log out
      </span>
    </NavLink>
  </ul>
</nav>
