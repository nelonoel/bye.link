<script>
  import Text from 'components/Field/Text.svelte'

  export let asset = {
    title: '',
    note: '',
  }
  export let action
  let isEditing = action === 'edit' || action === 'add'
</script>

<Text {isEditing} label="Title" value="{asset.title}" />
<Text {isEditing} label="Note" value="{asset.note}" />
