<script>
  export let type = 'text'
  export let label
  export let value
</script>

<div class="py-3">
  <div class="text-caps text-gray-400 mb-1">{label}</div>
  <input
    class="bg-gray-50 border-2 border-gray-150 focus:border-gray-200
    focus:bg-white focus:outline-none text-gray-800 rounded w-full text-lg px-3
    py-2"
    {type}
    {value}
  />
</div>
