"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from shame_scraping import get_product

import reflex as rx
import json

filename = f"{config.app_name}/{config.app_name}.py"

class Product:
     def __init__(self, name, price, desc):
        self.name = name
        self.price = price
        self.desc = desc

class ProductState(rx.State):
    """The app state."""
    products = [Product]

    def set_products(self, products):
        self.products = products

    def generate_shame(self, product: Product):
        # TODO..... testing formatting json input to api
        message = {
            "role": "user",
            "content": {product.name + " costs " + product.price + ", made of " + product.desc},
        }
        # TODO: figure out how to export call_ai from ai.py
        # call_ai(message)
        
class FormInputState(rx.State):
    form_data: dict = {}

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        val = get_product(form_data["input"])
        print(val)

def index() -> rx.Component:
    # just testing data
    products: list[Product] = [
    Product(name="white dress", price=10, desc="10% linen 90% polyester made in China"),
    Product(name="Product 2", price=20, desc="Description 2"),
    Product(name="Product 3", price=30, desc="Description 3")
    ]
    ProductState.set_products(products)

    # TODO should show a grid of cards of all products in ProductState....figure out how to do that lol
    # TODO remove default value after url validation
    return rx.vstack(
        rx.form.root(
            rx.vstack(
                rx.input(
                    name="input",
                    default_value="search",
                    placeholder="Input text here...",
                    type="password",
                    required=True,
                ),
                rx.button("Submit", type="submit"),
                width="100%",
            ),
            on_submit=FormInputState.handle_submit,
            reset_on_submit=True,
            width="100%",
        ),
        rx.divider(width="100%"),
        rx.heading("Results"),
        rx.text(FormInputState.form_data.to_string()),
        width="100%",
    )

app = rx.App()
app.add_page(index)
