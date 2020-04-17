<script>
  import Title from 'components/Field/Title.svelte'
  import Text from 'components/Field/Text.svelte'
  import Password from 'components/Field/Password.svelte'
  import URL from 'components/Field/URL.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    title: '',
    username: '',
    password: '',
    website: '',
    note: '',
  }
  export let action
  const color = 'orange'
  let isEditing = action === 'edit' || action === 'add' || action === 'entrust'
</script>

<Title
  autofocus="{action === 'edit' || action === 'add'}"
  {isEditing}
  {color}
  label="Title"
  value="{asset.title}"
/>
<Text {isEditing} {color} label="Username" value="{asset.username}" />
<Password {isEditing} {color} label="Password" value="{asset.password}" />
<URL {isEditing} {color} label="Website" value="{asset.website}" />
<Note {isEditing} {color} label="Note" value="{asset.note}" />
