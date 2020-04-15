<script>
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
  let isEditing = action === 'edit' || action === 'add'
</script>

<Text {isEditing} label="Title" value="{asset.title}" />
<Text {isEditing} label="Username" value="{asset.username}" />
<Password {isEditing} label="Password" value="{asset.password}" />
<URL {isEditing} label="Website" value="{asset.website}" />
<Note {isEditing} label="Note" value="{asset.note}" />
