<script>
  import md5 from 'md5'

  import Avatar from 'components/Field/Avatar.svelte'
  import Title from 'components/Field/Title.svelte'
  import Text from 'components/Field/Text.svelte'
  import Description from 'components/Field/Description.svelte'
  import Note from 'components/Field/Note.svelte'

  export let asset = {
    avatar: '',
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

<Avatar
  {isEditing}
  {color}
  src="{asset.avatar ? asset.avatar : asset.email ? `https://gravatar.com/avatar/${md5(asset.email
          .trim()
          .toLowerCase())}?s=192&d=mp` : null}"
  name="{asset.name}"
/>
<Title
  autofocus="{action === 'edit' || action === 'add'}"
  {isEditing}
  {color}
  label="Name"
  value="{asset.name}"
/>
<Text {isEditing} {color} type="email" label="E-mail" value="{asset.email}">
  <Description>
    We'll reach out to them when you become inactive for 40 days.
  </Description>
</Text>
<Text {isEditing} {color} label="Mobile No." value="{asset.mobile}" />

{#if isEditing}
  <Note
    {isEditing}
    {color}
    multiline="{false}"
    label="Security Question"
    value="{asset.security_question}"
  >
    <Description>
      Your trusted person needs to answer this to gain access to your assets.
    </Description>
  </Note>

  <Text
    {isEditing}
    {color}
    label="Answer to Security Question"
    placeholder="{asset.security_question.length > 0 ? '•••••••••' : null}"
    value=""
  >
    <Description>Case-insensitive. Spaces and symbols are ignored.</Description>
  </Text>
{/if}

<Note {isEditing} {color} label="Welcome Note" value="{asset.note}">
  <Description>Only visible once they gain access to your assets.</Description>
</Note>
