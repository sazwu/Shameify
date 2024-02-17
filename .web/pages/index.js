/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



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

export function Text_e1ef53df896217f18765f749b6696cfc () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__form_input_state.roast_text)}
</RadixThemesText>
  )
}

export function Text_656977eb6c86da3c6150f34e6a9e37a7 () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__form_input_state.form_data)}
</RadixThemesText>
  )
}

export function Root_c3b04225f81ec003b2e771dfc9b4b9d7 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_62e23b00df8fd685edad06d7651caf0f = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_input_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    


  return (
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_62e23b00df8fd685edad06d7651caf0f}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesTextField.Input css={{"defaultValue": "search"}} name={`input`} placeholder={`you want to waste money on...`} required={true} type={`password`}/>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
  <Fragment_503fac77d4c0b3bb69b0d996bba47b0a/>
</RadixFormRoot>
  )
}

export function Fragment_503fac77d4c0b3bb69b0d996bba47b0a () {
  const state__cond_simple_state = useContext(StateContexts.state__cond_simple_state)
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <Fragment>
  {isTrue(state__cond_simple_state.show) ? (
  <Fragment>
  {Object.entries(state__form_input_state.roast_text).map((text, index_8c419b4a9a40531ba66129c41f9c2d38) => (
  <RadixThemesText as={`p`} key={index_8c419b4a9a40531ba66129c41f9c2d38}>
  {((JSON.stringify(text)) + ("?\n\n"))}
</RadixThemesText>
))}
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
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <Root_c3b04225f81ec003b2e771dfc9b4b9d7/>
  <RadixThemesSeparator css={{"width": "100%"}} size={`4`}/>
  <RadixThemesHeading>
  {`Results`}
</RadixThemesHeading>
  <Text_656977eb6c86da3c6150f34e6a9e37a7/>
  <Text_e1ef53df896217f18765f749b6696cfc/>
</RadixThemesFlex>
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
