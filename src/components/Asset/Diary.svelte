<script>
  import Text from 'components/Field/Text.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    note: '',
    location: '',
    mood: '',
  }
  export let action
  const color = 'blue'
  let isEditing = action === 'edit' || action === 'add'
</script>

<Note {isEditing} {color} label="Note" value="{asset.note}" />
<Text {isEditing} {color} label="Location" value="{asset.location || ''}" />
<Text {isEditing} {color} label="Mood" value="{asset.mood || ''}" />
