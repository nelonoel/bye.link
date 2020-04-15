<script>
  import Text from 'components/Field/Text.svelte'

  export let asset = {
    note: '',
    location: '',
    mood: '',
  }
  export let action
  let isEditing = action === 'edit' || action === 'add'
</script>

<Text {isEditing} label="Note" value="{asset.note}" />
<Text {isEditing} label="Location" value="{asset.location || ''}" />
<Text {isEditing} label="Mood" value="{asset.mood || ''}" />
