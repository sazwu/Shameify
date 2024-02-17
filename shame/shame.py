"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""


def index() -> rx.Component:
    return rx.container(
        rx.grid(
            rx.foreach(
                rx.Var.range(12),
                lambda i: rx.card(f"Card {i + 1}", height="10vh"),
            ),
            columns="3",
            spacing="4",
            width="100%",
        )
    )


app = rx.App()
app.add_page(index)
