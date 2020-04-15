<script>
  import Text from 'components/Field/Text.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    title: '',
    note: '',
  }
  export let action
  let isEditing = action === 'edit' || action === 'add'
</script>

<Text {isEditing} label="Title" value="{asset.title}" />
<Note {isEditing} label="Note" value="{asset.note}" />
