import reflex as rx

style = {
    "rx.button ::hover": {
        "background-color" : "#B6DED7"
    },
    "margin": "10px",
    rx.text: {
        "font_family": "cousine, roboto, sans serif",
        "color" : "#3A4140",
    },
    rx.heading: {
        "color" : "#BD5318"
    },
    rx.container: {
        "align-items": "center"
    },
    rx.vstack: {
        "margin" : "auto"
    },
    rx.button: {
        "background-color" : "#E1F4F1",
        "color" : "#3A4140",
    }
}

app = rx.App(style=style)
