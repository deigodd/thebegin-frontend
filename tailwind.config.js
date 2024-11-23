/** @type {import('tailwindcss').Config} */
export default {

    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js", 
  ],
  theme: {
  	extend: {
  		animation: {
  			marquee: 'marquee 15s linear infinite'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			}
  		},
  		colors: {
  			tbc: {
  				primaryred: {
  					'100': '#fcf3f0',
  					'200': '#f3c5b3',
  					'300': '#f3c5b3',
  					'400': '#f0b8a3',
  					'500': '#eaa185',
  					'600': '#e68967'
  				},
  				primarybrown: {
  					'100': '#f5eeed',
  					'200': '#e3cfc5',
  					'300': '#cfac9f',
  					'400': '#c79d8a',
  					'500': '#b37d65',
  					'600': '#a05d3f'
  				},
  				primaryyellow: {
  					'100': '#faf6ec',
  					'200': '#f0e5c9',
  					'300': '#e7d3a2',
  					'400': '#e3c890',
  					'500': '#d9b66b',
  					'600': '#cfa746'
  				},
  				secondarygreen: {
  					'100': '#f0f3f0',
  					'200': '#d4d8d2',
  					'300': '#b9beb4',
  					'400': '#aab2a7',
  					'500': '#8f9988',
  					'600': '#73816a'
  				},
  				secondarygray: {
  					'100': '#ebebea',
  					'200': '#ebebea',
  					'300': '#dfdddc',
  					'400': '#d9d6d4',
  					'500': '#cbc8c6',
  					'600': '#bebcb8'
  				},
  				secondarybrown: {
  					'100': '#fbf6f3',
  					'200': '#eee6da',
  					'300': '#e5d7c2',
  					'400': '#e0ceb7',
  					'500': '#d7be9e',
  					'600': '#cdb087'
  				},
  				pilarorange: {
  					'0': '#f8e7dd',
  					'100': '#eec4aa',
  					'200': '#eab898',
  					'300': '#e7ac87',
  					'400': '#e3a176',
  					'500': '#e09565',
  					'600': '#dc8954'
  				},
  				pilarpurple: {
  					'0': '#ede7ec',
  					'100': '#a788a0',
  					'200': '#95708c',
  					'300': '#835879',
  					'400': '#714066',
  					'500': '#602853',
  					'600': '#4e1040'
  				},
  				pilargreen: {
  					'0': '#f1f3ee',
  					'100': '#b9c3ab',
  					'200': '#aab79a',
  					'300': '#9cab89',
  					'400': '#8e9f78',
  					'500': '#809367',
  					'600': '#728756'
  				},
  				pilargray: {
  					'0': '#eaeaeb',
  					'100': '#949799',
  					'200': '#7f8284',
  					'300': '#696d70',
  					'400': '#54595b',
  					'500': '#3e4447',
  					'600': '#292f32'
  				},
  				pilarbrown: {
  					'0': '#f2f0ef',
  					'100': '#bfb4af',
  					'200': '#b2a49f',
  					'300': '#a5958f',
  					'400': '#98867f',
  					'500': '#8b776f',
  					'600': '#7e685f'
  				}
  			},
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
