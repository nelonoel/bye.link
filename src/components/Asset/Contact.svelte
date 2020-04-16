<script>
  import Avatar from 'components/Field/Avatar.svelte'
  import Text from 'components/Field/Text.svelte'
  import Description from 'components/Field/Description.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    picture: '',
    name: '',
    email: '',
    mobile: '',
    security_question: '',
    answer: '',
    note: '',
    added_by_default: '',
  }
  export let action
  const color = 'pink'
  let isEditing = action === 'edit' || action === 'add'
</script>

<Avatar {isEditing} {color} src="{asset.picture}" name="{asset.name}" />
<Text {isEditing} {color} label="Name" value="{asset.name}" />
<Text {isEditing} {color} type="email" label="E-mail" value="{asset.email}">
  <Description>
    We'll reach out to them when you become inactive for 40 days.
  </Description>
</Text>
<Text {isEditing} {color} label="Mobile No." value="{asset.mobile}" />

<Text
  {isEditing}
  {color}
  label="Security Question"
  value="{asset.security_question}"
>
  <Description>
    Your trusted person needs to answer this to gain access to your assets.
  </Description>
</Text>

<Text
  {isEditing}
  {color}
  label="Answer to Security Question"
  value="{asset.answer}"
>
  <Description>Case-insensitive. Spaces and symbols are ignored.</Description>
</Text>

<Note {isEditing} {color} label="Welcome Note" value="{asset.note}">
  <Description>Only visible once they gain access to your assets.</Description>
</Note>
