"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config

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
    test_products = [Product]

    def set_products(self, products):
        self.test_products = products

    def generate_shame(self, product: Product):
        # TODO..... testing formatting json input to api
        message = {
            "role": "user",
            "content": {product.name + " costs " + product.price + ", made of " + product.desc},
        }
        # TODO: figure out how to export call_ai from ai.py
        # call_ai(message)
        

def index() -> rx.Component:
    # just testing data
    products: list[Product] = [
    Product(name="white dress", price=10, desc="10% linen 90% polyester made in China"),
    Product(name="Product 2", price=20, desc="Description 2"),
    Product(name="Product 3", price=30, desc="Description 3")
    ]
    ProductState.set_products(products)

    # TODO should show a grid of cards of all products in ProductState....figure out how to do that lol
    return rx.container(
        rx.grid(
            rx.card({products[0].name}, height="10vh"),
            columns="3",
            spacing="4",
            width="100%",
        ),
        # rx.button("Shame", ProductState.generate_shame(products[0]))
    )

app = rx.App()
app.add_page(index)
