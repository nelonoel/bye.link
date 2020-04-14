<script>
  import Text from 'components/Field/Text.svelte'

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
</script>

<Text label="Title" value="{asset.title}" />
<Text label="Card No." value="{asset.card_number}" />
<Text label="Card Type" value="{asset.card_type}" />
<Text label="Expiry" value="{asset.expiry}" />
<Text label="Verification No." value="{asset.verification_number}" />
<Text label="Account Holder" value="{asset.card_holder}" />
<Text label="Note" value="{asset.note}" />
