<script>
	import path from 'stores/path'
	import getAssetMetadata from 'utils/getAssetMetadata'
	$:meta = getAssetMetadata($path.asset)
</script>

<figure class="text-gray-200">
	<svg fill="currentColor" viewBox="0 0 20 20" class="w-64 h-64">
		{@html meta.icons.fill}
	</svg>
</figure>
