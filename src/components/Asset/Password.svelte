<script>
  import Text from 'components/Field/Text.svelte'

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
<Text {isEditing} label="Password" value="{asset.password}" />
<Text {isEditing} type="url" label="Website" value="{asset.website}" />
<Text {isEditing} label="Note" value="{asset.note}" />
