"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from shame_scraping import get_product
from .ai import get_roasted

import reflex as rx
import json

filename = f"{config.app_name}/{config.app_name}.py"

# class Product:
#      def __init__(self, name, price, desc):
#         self.name = name
#         self.price = price
#         self.desc = desc

# class ProductState(rx.State):
#     """The app state."""
#     products = [Product]

#     def set_products(self, products):
#         self.products = products

#     def generate_shame(self, product: Product):
#         # TODO..... testing formatting json input to api
#         message = {
#             "role": "user",
#             "content": {product.name + " costs " + product.price + ", made of " + product.desc},
#         }
        
class CondSimpleState(rx.State):
    show: bool = True

    def change(self):
        self.show = not (self.show)

class FormInputState(rx.State):
    form_data: dict = {}
    roast_text: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        # show text
        CondSimpleState.change
        val = get_product(form_data["input"])
        print(val)
        scraped_data = get_roasted({
            "role" : "user", 
            "content" : val}, False )
        roast = get_roasted({
            "role" : "user",
            "content" : scraped_data
        }, True)
        print(roast)
        self.roast_text = roast.split('?')

def display_text(text):
    return(
        rx.text(text.to_string() + "?\n\n")
    )

def index() -> rx.Component:
    return rx.vstack(
        rx.form.root(
            rx.vstack(
                rx.input(
                    name="input",
                    default_value="search",
                    placeholder="you want to waste money on...",
                    type="password",
                    required=True,
                ),
                rx.button("Submit", type="submit"),
                width="100%",
            ),
            rx.cond(
                CondSimpleState.show,
                rx.foreach(
                    FormInputState.roast_text, display_text
                ),
            ),
            on_submit=FormInputState.handle_submit,
            reset_on_submit=True,
            width="100%",
        ),
        rx.divider(width="100%"),
        rx.heading("Results"),
        rx.text(FormInputState.form_data.to_string()),
        rx.text(FormInputState.roast_text.to_string()),
        width="100%",
    )

app = rx.App()
app.add_page(index)
