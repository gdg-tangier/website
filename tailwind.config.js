/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
		extend: {
			colors: {
				blue: {
					100: 'var(--blue-100)',
					200: 'var(--blue-200)',
					300: 'var(--blue-300)',
					400: 'var(--blue-400)',
					500: 'var(--blue-500)',
					600: 'var(--blue-600)',
					700: 'var(--blue-700)',
					800: 'var(--blue-800)',
					900: 'var(--blue-900)',
				},
				green: {
					100: 'var(--green-100)',
					200: 'var(--green-200)',
					300: 'var(--green-300)',
					400: 'var(--green-400)',
					500: 'var(--green-500)',
					600: 'var(--green-600)',
					700: 'var(--green-700)',
					800: 'var(--green-800)',
					900: 'var(--green-900)',
				},
				yellow: {
					100: 'var(--yellow-100)',
					200: 'var(--yellow-200)',
					300: 'var(--yellow-300)',
					400: 'var(--yellow-400)',
					500: 'var(--yellow-500)',
					600: 'var(--yellow-600)',
					700: 'var(--yellow-700)',
					800: 'var(--yellow-800)',
					900: 'var(--yellow-900)',
				},
				red: {
					100: 'var(--red-100)',
					200: 'var(--red-200)',
					300: 'var(--red-300)',
					400: 'var(--red-400)',
					500: 'var(--red-500)',
					600: 'var(--red-600)',
					700: 'var(--red-700)',
					800: 'var(--red-800)',
					900: 'var(--red-900)',
				},
				gray: {
					900: 'var(--gray-900)',
					800: 'var(--gray-800)',
					700: 'var(--gray-700)',
					600: 'var(--gray-600)',
					500: 'var(--gray-500)',
					400: 'var(--gray-400)',
					300: 'var(--gray-300)',
					200: 'var(--gray-200)',
					100: 'var(--gray-100)',
				},
				black: 'var(--black)',
				'black-alpha-25': 'var(--black-alpha-25)',
				white: 'var(--white)',
			},
			boxShadow: {
				default: '0 1px 3px 0 var(--shadow-default-color)',
				md: '0 4px 6px -1px var(--shadow-default-color)',
				lg: '0 10px 15px -3px var(--shadow-default-color)',
				xl: '0 20px 25px -5px var(--shadow-default-color)',
				'2xl': '0 25px 50px -12px var(--shadow-default-color)',
				inner: 'inset 0 2px 4px 0 var(--shadow-default-color)',
				outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
				none: 'none',
			},
			borderColor: theme => ({
				... theme('colors'),
				default: theme('colors.gray.200', 'currentColor'),
			}),
		}
	},
  variants: {},
  plugins: []
}
