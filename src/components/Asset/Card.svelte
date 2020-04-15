<script>
  import Text from 'components/Field/Text.svelte'
  import Card from 'components/Field/Card.svelte'
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
  const color = 'yellow'
  let isEditing = action === 'edit' || action === 'add'
</script>

<Text {isEditing} {color} label="Title" value="{asset.title}" />
<Card {isEditing} {color} label="Card No." value="{asset.card_number}" />
<Text {isEditing} {color} label="Card Type" value="{asset.card_type}" />
<Text {isEditing} {color} label="Expiry" value="{asset.expiry}" />
<Text
  {isEditing}
  {color}
  label="Verification No."
  value="{asset.verification_number}"
/>
<Text {isEditing} {color} label="Account Holder" value="{asset.card_holder}" />
<Note {isEditing} {color} label="Note" value="{asset.note}" />
