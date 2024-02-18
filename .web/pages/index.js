/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Card as RadixThemesCard, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Separator as RadixThemesSeparator, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { CircularProgress } from "@chakra-ui/react"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Fragment_5c2d7f5a1518b850a50f2285fed14a30 () {
  const state__cond_simple_state = useContext(StateContexts.state__cond_simple_state)
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <Fragment>
  {isTrue(state__cond_simple_state.show) ? (
  <Fragment>
  {state__form_input_state.roast_text.map((text, index_ae34b164937246bb0ec4c55dd7287e87) => (
  <RadixThemesText as={`p`} css={{"font-family": "Courier New", "font-weight": "bold", "max-width": "40%", "margin": "auto"}} key={index_ae34b164937246bb0ec4c55dd7287e87}>
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

export function Root_256b05046359cf0fa4811b020efc8506 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_ccf88c4d677d5235434e2583b4d788ca = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_input_state.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    


  return (
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_ccf88c4d677d5235434e2583b4d788ca}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "margin": "auto", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesTextField.Input css={{"defaultValue": "", "width": "100%"}} name={`input`} placeholder={`you want to waste money on...`} required={true}/>
  <Fragment_7d45218be1e35110c8e31b3288f75da1/>
</RadixThemesFlex>
  <Fragment_f32ac219649607827dc97aa219ff6df5/>
  <Fragment_5c2d7f5a1518b850a50f2285fed14a30/>
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

export function Fragment_7d45218be1e35110c8e31b3288f75da1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__progress_example_state = useContext(StateContexts.state__progress_example_state)


  return (
    <Fragment>
  {isTrue(state__progress_example_state.show_progress) ? (
  <Fragment>
  <CircularProgress isIndeterminate={true}/>
</Fragment>
) : (
  <Fragment>
  <RadixThemesButton css={{"background-color": "#E1F4F1", "color": "#3A4140"}} onClick={(_e) => addEvents([Event("state.progress_example_state.increment", {})], (_e), {})} type={`submit`}>
  {`submit`}
</RadixThemesButton>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_f32ac219649607827dc97aa219ff6df5 () {
  const state__cond_simple_state = useContext(StateContexts.state__cond_simple_state)
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <Fragment>
  {isTrue(state__cond_simple_state.show) ? (
  <Fragment>
  <RadixThemesCard css={{"width": "40%", "hide": state__cond_simple_state.show}} variant={`classic`}>
  <RadixThemesText as={`p`} css={{"fontFamily": "cousine, roboto, sans serif", "color": "#3A4140"}}>
  {state__form_input_state.product_name}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontFamily": "cousine, roboto, sans serif", "color": "#3A4140"}}>
  {state__form_input_state.product_materials}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontFamily": "cousine, roboto, sans serif", "color": "#3A4140"}}>
  {state__form_input_state.product_brand}
</RadixThemesText>
</RadixThemesCard>
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
  <RadixThemesFlex align={`start`} css={{"margin": "auto", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"margin": "auto", "flexDirection": "column"}} gap={`2`}>
  <RadixThemesHeading css={{"padding": "5px", "color": "#BD5318"}}>
  {`shameify`}
</RadixThemesHeading>
  <RadixThemesSeparator css={{"margin-bottom": "5px", "width": "100vw"}} size={`4`}/>
</RadixThemesFlex>
  <Root_256b05046359cf0fa4811b020efc8506/>
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
