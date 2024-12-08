/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			bgColor: '#fffff',
  			primaryColor: '#64FFDA',
  			textColor: '#00000',
  			textHoverColor: '#ffffff',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			profile: 'profileAnimate 8s ease-in-out infinite 1s'
  		},
  		keyframes: {
  			profileAnimate: {
  				'0%': {
  					borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
  				},
  				'50%': {
  					borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
  				},
  				'100%': {
  					borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	screens: {
  		xsm: '350px',
  		xs: '476px',
  		sm: '640px',
  		md: '768px',
  		bs: '900px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px',
  		'4xl-mx': {
  			max: '2135px'
  		},
  		'3xl-mx': {
  			max: '1835px'
  		},
  		'2xl-mx': {
  			max: '1535px'
  		},
  		'xl-mx': {
  			max: '1284px'
  		},
  		'lg-mx': {
  			max: '1028px'
  		},
  		'bs-mx': {
  			max: '899px'
  		},
  		'md-mx': {
  			max: '767px'
  		},
  		'sm-mx': {
  			max: '639px'
  		},
  		'xs-mx': {
  			max: '475px'
  		},
  		'xsm-mx': {
  			max: '360px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}