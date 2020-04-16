<script>
	import Container from 'components/Main/Container.svelte'
	import Avatar from 'components/Field/Avatar.svelte'
	import Text from 'components/Field/Text.svelte'
	import Description from 'components/Field/Description.svelte'

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
	let color = 'gray'
	let isEditing = true
</script>

<Container class="w-full">
	<main class="p-3 md:p-4 my-auto">
		<Avatar {isEditing} {color} src="{asset.picture}" name="{asset.name}" />
		<Text {isEditing} {color} label="Name" value="{asset.name}" />
		<Text {isEditing} {color} type="email" label="E-mail" value="{asset.email}">
			<Description
				>We'll start reaching out to you when you become inactive for 30 days. If you don't respond within 10 days, we'll send the security questions you've setup for each of your trusted contacts.</Description
			>
		</Text>
		<Text {isEditing} {color} label="Mobile No." value="{asset.mobile}" />
	</main>
</Container>
