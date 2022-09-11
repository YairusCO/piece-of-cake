import keyMirror from 'key-mirror'

export const SIZES = keyMirror(
	Object.freeze({
		XSMALL: null,
		SMALL: null,
		MEDIUM: null,
		LARGE: null,
		XLARGE: null,
	})
)

export const SCREEN_WIDTH_BREAKPOINTS = Object.freeze({
	[SIZES.XSMALL]: 0,
	[SIZES.SMALL]: 768,
	[SIZES.MEDIUM]: 1024,
	[SIZES.LARGE]: 1366,
	[SIZES.XLARGE]: 1920,
})

export const getSize = ({ width }) => {
	switch (true) {
		case width >= SCREEN_WIDTH_BREAKPOINTS.SMALL &&
			width < SCREEN_WIDTH_BREAKPOINTS.MEDIUM:
			return SIZES.SMALL

		case width >= SCREEN_WIDTH_BREAKPOINTS.MEDIUM &&
			width < SCREEN_WIDTH_BREAKPOINTS.LARGE:
			return SIZES.MEDIUM

		case width >= SCREEN_WIDTH_BREAKPOINTS.LARGE &&
			width < SCREEN_WIDTH_BREAKPOINTS.XLARGE:
			return SIZES.LARGE

		case width >= SCREEN_WIDTH_BREAKPOINTS.XLARGE:
			return SIZES.XLARGE

		default:
			return SIZES.SMALL
	}
}
