/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        tbc: {
          primaryred: {
            600: '#e68967',
            500: '#eaa185',
            400: '#f0b8a3',
            300: '#f3c5b3',
            200: '#f3c5b3',
            100: '#fcf3f0'
          },
          primarybrown: {
            600: '#a05d3f',
            500: '#b37d65',
            400: '#c79d8a',
            300: '#cfac9f',
            200: '#e3cfc5',
            100: '#f5eeed'
          },
          primaryyellow: {
            600: '#cfa746',
            500: '#d9b66b',
            400: '#e3c890',
            300: '#e7d3a2',
            200: '#f0e5c9',
            100: '#faf6ec'
          },
          secondarygreen: {
            600: '#73816a',
            500: '#8f9988',
            400: '#aab2a7',
            300: '#b9beb4',
            200: '#d4d8d2',
            100: '#f0f3f0'
          },
          secondarygray: {
            600: '#bebcb8',
            500: '#cbc8c6',
            400: '#d9d6d4',
            300: '#dfdddc',
            200: '#ebebea',
            100: '#ebebea'
          },
          secondarybrown: {
            600: '#cdb087',
            500: '#d7be9e',
            400: '#e0ceb7',
            300: '#e5d7c2',
            200: '#eee6da',
            100: '#fbf6f3'
          },
          pilarorange: {
            600: '#dc8954',
            500: '#e09565',
            400: '#e3a176',
            300: '#e7ac87',
            200: '#eab898',
            100: '#eec4aa',
            0: '#f8e7dd'
          },
          pilarpurple: {
            600: '#4e1040',
            500: '#602853',
            400: '#714066',
            300: '#835879',
            200: '#95708c',
            100: '#a788a0',
            0: '#ede7ec'
          },
          pilargreen: {
            600: '#728756',
            500: '#809367',
            400: '#8e9f78',
            300: '#9cab89',
            200: '#aab79a',
            100: '#b9c3ab',
            0: '#f1f3ee'
          },
          pilargray: {
            600: '#292f32',
            500: '#3e4447',
            400: '#54595b',
            300: '#696d70',
            200: '#7f8284',
            100: '#949799',
            0: '#eaeaeb'
          },
          pilarbrown: {
            600: '#7e685f',
            500: '#8b776f',
            400: '#98867f',
            300: '#a5958f',
            200: '#b2a49f',
            100: '#bfb4af',
            0: '#f2f0ef'
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
