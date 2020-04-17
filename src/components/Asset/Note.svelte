<script>
  import Title from 'components/Field/Title.svelte'
  import Text from 'components/Field/Text.svelte'
  import Password from 'components/Field/Password.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    title: '',
    secret: '',
    note: '',
  }
  export let action
  const color = 'green'
  let isEditing = action === 'edit' || action === 'add' || action === 'entrust'
</script>

<Title
  autofocus="{action === 'edit' || action === 'add'}"
  {isEditing}
  {color}
  label="Title"
  value="{asset.title}"
/>
<Password {isEditing} {color} label="Secret" value="{asset.secret || ''}" />
<Note {isEditing} {color} label="Note" value="{asset.note}" />
