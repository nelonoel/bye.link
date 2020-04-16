<script>
  import get from 'lodash/get'
  import getCardType from 'credit-card-type'
  import _cards from 'meta/card'
  import Redacted from './Redacted.svelte'

  export let color = 'gray'
  export let isEditing
  export let card
  let value

  $: cardNumber = get(card, 'card_number', '')
  $: value = cardNumber
  $: verificationNumber = get(card, 'verification_number', '')
  $: expiry = get(card, 'expiry', '')
  $: cardType = getCardType(value)
  $: meta = cardType.length === 1 ? cardType[0] : null
</script>

{#if cardNumber || isEditing}
  <div class="w-128 max-w-full mx-auto px-4 py-3 relative">
    {#if isEditing}
      <label class="block text-caps text-gray-400 mb-1">Card No.</label>
      <div class="ml-16 py-1">
        <input
          class="{`bg-transparent border-b-2 border-gray-150 focus:border-${color}-500 text-gray-750 w-full text-xl`}"
          type="text"
          bind:value
        />
      </div>
    {:else}
      <h6 class="text-caps text-gray-400 mb-1">Card No.</h6>
      <Redacted {color} value="{cardNumber}">
        <div class="ml-16 py-1">
          •••• •••• ••••
          <span class="text-xl ml-2 mr-1">
            {cardNumber.substring(cardNumber.length - 4)}
          </span>
        </div>
      </Redacted>
    {/if}
    <div
      class="absolute left-0 bottom-0 ml-4 mb-4 w-12 pointer-events-none h-8
      rounded bg-gray-200 bg-center bg-no-repeat opacity-75"
      style="{`background-image: url(${_cards(meta ? meta.type : 'default').icon}); background-size: ${_cards(meta ? meta.type : 'default').size}`}"
    ></div>
  </div>
{/if}

{#if verificationNumber || expiry || isEditing}
  <div class="w-128 max-w-full mx-auto flex">
    {#if verificationNumber || isEditing}
      <div class="w-1/2 max-w-full px-4 py-3">
        {#if isEditing}
          <label class="block text-caps text-gray-400 mb-1">
            {meta ? meta.code.name : 'Verification No.'}
          </label>
          <input
            class="{`bg-transparent border-b-2 border-gray-150 focus:border-${color}-500 text-gray-750 w-full text-xl`}"
            type="text"
            value="{verificationNumber}"
          />
        {:else}
          <h6 class="text-caps text-gray-400 mb-1">
            {meta ? meta.code.name : 'Verification No.'}
          </h6>
          <Redacted {color} value="{verificationNumber}">•••</Redacted>
        {/if}
      </div>
    {/if}

    {#if expiry || isEditing}
      <div class="w-1/2 max-w-full px-4 py-3">
        {#if isEditing}
          <label class="block text-caps text-gray-400 mb-1">Expiry</label>
          <input
            class="{`bg-transparent border-b-2 border-gray-150 placeholder-gray-300 focus:border-${color}-500 text-gray-750 w-full text-xl`}"
            type="text"
            placeholder="MM / YYYY"
            value=""
          />
        {:else}
          <h6 class="text-caps text-gray-400 mb-1">Expiry</h6>
          <div class="text-xl">12 / 2026</div>
        {/if}
      </div>
    {/if}
  </div>
{/if}
