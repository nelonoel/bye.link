<script>
  import user from 'stores/user'
</script>

<style>
  .highlight {
    box-shadow: inset 0 -0.5em 0 theme('colors.yellow.300');
  }
  .fade {
    background: linear-gradient(
      90deg,
      theme('colors.gray.700'),
      theme('colors.gray.400')
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
  }
</style>

<svelte:head>
  <title>Welcome to bye.link</title>
</svelte:head>

<div
  class="flex flex-col justify-center items-center min-h-screen min-w-screen
  bg-gray-100 text-gray-900 px-3 py-6"
>
  <figure class="text-3xl mb-4">👋</figure>
  <h6 class="mb-2 text-gray-600 text-caps">Introducing bye.link</h6>
  <h1
    class="mb-4 text-6xl max-w-lg mx-auto text-center leading-none
    font-extrabold"
  >
    Entrust your
    <span class="highlight text-yellow-900">digital assets</span>
  </h1>
  <p class="mb-10 text-xl text-gray-700 max-w-lg mx-auto text-center">
    Send your
    <strong>trusted contacts</strong>
    a link that can be accessed only when you become
    <span class="fade">unreachable.</span>
  </p>
  <p class="text-sm text-center text-gray-600 mb-8 sm:mb-2">
    Subscribe to be notified upon launch or
    <!-- {#if $user && $user.isUserSignedIn()} -->
    <a class="text-blue-600 underline" href="/@walter_white">view app demo</a>
    <!-- {:else}
    <button class="text-blue-600 underline" on:click={() => $user && $user.redirectToSignIn()}>login</button>
  	{/if} -->
    .
  </p>
  <form
    class="flex flex-col sm:flex-row justify-center items-center sm:items-end
    bg-gray-150 p-6 sm:p-4 rounded-lg"
    name="subscribe"
    method="POST"
    data-netlify="true"
  >
    <label class="flex flex-col mx-0 sm:mx-2 my-2 sm:my-3">
      <span class="text-caps text-gray-500">Name</span>
      <input
        class="text-sm flex-grow rounded px-2 py-1 bg-gray-100 border
        border-gray-300 focus:bg-gray-50 focus:border-blue-300 min-w-0"
        type="text"
        name="name"
      />
    </label>
    <label class="flex flex-col mx-0 sm:mx-2 my-2 sm:my-3">
      <span class="text-caps text-gray-500">Email</span>
      <input
        class="text-sm flex-grow rounded px-2 py-1 bg-gray-100 border
        border-gray-300 focus:bg-gray-50 focus:border-blue-300 min-w-0"
        type="email"
        name="email"
      />
    </label>
    <button
      class="flex items-center justify-center rounded-md bg-blue-500
      hover:bg-blue-550 focus:bg-blue-550 text-white text-sm py-1 border
      border-transparent w-24 px-4 w-full h-full mx-2 mt-3 mb-2 sm:mb-3"
      type="submit"
    >
      Subscribe
    </button>
  </form>
</div>
