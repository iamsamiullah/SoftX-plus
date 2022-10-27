/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: "SoftX",
		author: "Gibbu",
		version: "1.0.0",
		description: "A soft and comfy feel for Discord.",
		source: "https://github.com/iamsamiullah/SoftX",
		invite: "ZHthyCw"
	},
	baseImport: 'https://iamsamiullah.github.io/SoftX/SoftX.css',
	addons: [
		['src/addons/_radialglow.scss', 'dist/RadialGlow.css'],
		['src/addons/_verticaluserarea.scss', 'dist/VerticalUserArea.css'],
		['src/addons/_serverrings.scss', 'dist/ServerRings.css'],
	]
}