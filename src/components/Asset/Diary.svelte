<script>
  import Text from 'components/Field/Text.svelte'
  import Markdown from 'components/Field/Markdown.svelte'

  export let asset = {
    note: '',
  }
  export let action
  const color = 'blue'

  let isEditing = action === 'edit' || action === 'add'
</script>

<Markdown {isEditing} {color} value="{asset.note}" />
