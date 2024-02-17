/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Root_c3147bee8f7d6274585e64d5b1f9f38c () {
  
    const handleSubmit_3f653449f441fbd5c1905281b5696878 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_input_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_3f653449f441fbd5c1905281b5696878}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesTextField.Input css={{"defaultValue": "search"}} name={`input`} placeholder={`Input text here...`} required={true} type={`password`}/>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
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
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <Root_c3147bee8f7d6274585e64d5b1f9f38c/>
  <RadixThemesSeparator css={{"width": "100%"}} size={`4`}/>
  <RadixThemesHeading>
  {`Results`}
</RadixThemesHeading>
  <Text_656977eb6c86da3c6150f34e6a9e37a7/>
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
