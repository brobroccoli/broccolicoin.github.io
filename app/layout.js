import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
	title: "Bro",
	// description: 'Generated by create next app',
}

const myFont = localFont({
	src: [
		
		{
			path: "/Font/Font/Nitti-Normal.woff2",
			weight: "400",
			style: "normal",
		},
		 {
		path: "/Font/Font/Nitti-Bold.woff2",
		weight: "900",
		style: "normal",
	  },
	],
})



export default function RootLayout({children}) {
	return (
		<html lang='en'>
			<body className={myFont.className}>{children}</body>
		</html>
	)
}
