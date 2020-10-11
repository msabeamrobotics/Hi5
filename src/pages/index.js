import React from "react";
import theme from "theme";
import { Theme, Box, Hr, Image, Text, Button, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				flex-direction="row"
				md-flex-direction="column"
				width="500px"
			>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Hr />
		<Hr />
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="300px" height="300px" src="https://uploads.quarkly.io/5f8269588a25ab001e4e75f3/images/5cee415cafec5ef4e3c73b6d_Hi5%20Hero%20image-p-800.png?v=2020-10-11T02:29:57.060Z" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				position="static"
			>
				Unlock culture with ongoing recognition and feedback.{"\n\n"}
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi5 helps managers get rich insights about team culture on a dashboard. Team members use a fun app to give feedback and recognition to peers.{"\n\n"}
			</Text>
			<Button font="--lead" margin="20px">
				Start for free now &gt;
			</Button>
		</Section>
		<Button
			position="fixed"
			top="44px"
			left="1058.8566666666668px"
			z-index="2"
			href="/"
			bottom="auto"
			height="40px"
			right="63px"
			width="158.14583333333334px"
		>
			<Strong>
				Get started
			</Strong>
		</Button>
	</Theme>;
});