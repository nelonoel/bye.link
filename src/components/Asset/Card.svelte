<script>
  import Text from 'components/Field/Text.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    title: '',
    card_number: '',
    card_type: '',
    expiry: '',
    verification_number: '',
    card_holder: '',
    note: '',
  }
  export let action
  let isEditing = action === 'edit' || action === 'add'
</script>

<Text {isEditing} label="Title" value="{asset.title}" />
<Text {isEditing} label="Card No." value="{asset.card_number}" />
<Text {isEditing} label="Card Type" value="{asset.card_type}" />
<Text {isEditing} label="Expiry" value="{asset.expiry}" />
<Text
  {isEditing}
  label="Verification No."
  value="{asset.verification_number}"
/>
<Text {isEditing} label="Account Holder" value="{asset.card_holder}" />
<Note {isEditing} label="Note" value="{asset.note}" />
