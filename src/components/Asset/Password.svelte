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
</script>

<Text label="Title" value="{asset.title}" />
<Text label="Username" value="{asset.username}" />
<Text label="Password" value="{asset.password}" />
<Text type="url" label="Website" value="{asset.website}" />
<Text label="Note" value="{asset.note}" />
