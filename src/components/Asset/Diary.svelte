<script>
  import Text from 'components/Field/Text.svelte'

  export let asset
  export let action
</script>

<Text label="Title" value="{asset.title || ''}" />
<Text label="Note" value="{asset.note || ''}" />
<Text label="Location" value="{asset.location || ''}" />
<Text label="Mood" value="{asset.mood || ''}" />
