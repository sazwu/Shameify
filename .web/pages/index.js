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



export function Root_1a15333f18516e3dba3dac261fd409b2 () {
  
    const handleSubmit_59074d044dfd0bd0b4a6001ce09ef1f0 = useCallback((ev) => {
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
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_59074d044dfd0bd0b4a6001ce09ef1f0}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesTextField.Input css={{"defaultValue": "search"}} name={`input`} placeholder={`you want to waste money on...`} required={true}/>
  <RadixThemesButton css={{"background-color": "#E1F4F1", "color": "#3A4140"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
  <Fragment_55b0889809521385eafb1c7b2339e06a/>
</RadixFormRoot>
  )
}

export function Fragment_8055bc82b6f31384d2d035455207a101 () {
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
  <RadixThemesText as={`p`} css={{"fontFamily": "cousine, roboto, sans serif", "color": "#3A4140"}}>
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

export function Fragment_55b0889809521385eafb1c7b2339e06a () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)
  const state__cond_simple_state = useContext(StateContexts.state__cond_simple_state)


  return (
    <Fragment>
  {isTrue(state__cond_simple_state.show) ? (
  <Fragment>
  {state__form_input_state.roast_text.map((text, index_0a55ddf7fe5e800dd20a1f318b0df0f3) => (
  <RadixThemesText as={`p`} css={{"font-family": "Courier New", "font-weight": "bold", "max-width": "30%", "margin": "auto"}} key={index_0a55ddf7fe5e800dd20a1f318b0df0f3}>
  {JSON.stringify(text)}
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
  <Fragment_8055bc82b6f31384d2d035455207a101/>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "column"}} gap={`2`}>
  <RadixThemesHeading css={{"padding": "5px"}}>
  {`roast duck`}
</RadixThemesHeading>
  <RadixThemesSeparator css={{"margin-bottom": "5px", "width": "100vw"}} size={`4`}/>
</RadixThemesFlex>
  <Root_1a15333f18516e3dba3dac261fd409b2/>
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
