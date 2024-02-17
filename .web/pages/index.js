/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Card as RadixThemesCard, Container as RadixThemesContainer, Dialog as RadixThemesDialog, Grid as RadixThemesGrid, Text as RadixThemesText, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import range from "/utils/helpers/range.js"
import NextHead from "next/head"



export function Grid_1b87cfa7ef37e047983e2cf52eddde05 () {


  return (
    <RadixThemesGrid columns={`3`} css={{"width": "100%"}} gap={`4`}>
  {Array.from(range(12, undefined, 1)).map((i, index_b7c25990fec38fbc1b9c3c4a48b04914) => (
  <RadixThemesCard css={{"height": "10vh"}} key={index_b7c25990fec38fbc1b9c3c4a48b04914}>
  {`Card ${((i) + (1))}`}
</RadixThemesCard>
))}
</RadixThemesGrid>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <RadixThemesContainer>
  <Grid_1b87cfa7ef37e047983e2cf52eddde05/>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
