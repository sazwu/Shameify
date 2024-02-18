"""Welcome to Reflex! This file outlines the steps to create a basic app."""

from rxconfig import config
from shame_scraping import get_product
from .ai import get_roasted
from typing import List
from time import sleep
from nltk.tokenize import sent_tokenize
from .style import style

import reflex as rx
import json
import sys
import time
import nltk
import asyncio

filename = f"{config.app_name}/{config.app_name}.py"

class ProgressExampleState(rx.State):
    show_progress: bool = False

    async def increment(self):
        self.show_progress = True
        yield
        # Think really hard.
        await asyncio.sleep(6)
        self.show_progress = False
        
class CondSimpleState(rx.State):
    show: bool = True

    def change(self):
        self.show = not (self.show)

class FormInputState(rx.State):
    form_data: dict = {}
    roast_text: list = []
    product_name = ""
    product_materials = ""
    product_brand = ""

    def get_index_of_field(self, words, start, term):
        for i in range(start, len(words)):
            if (term in words[i]):
                return i
    
    def parse_product_card(self, scraped_data):
        words = scraped_data.split(" ")
        name_index = 0
        description_index = self.get_index_of_field(words, name_index, "description")
        materials_index = self.get_index_of_field(words, description_index, "materials")
        brand_index = self.get_index_of_field(words, materials_index, "brand")
        self.product_name = ' '.join(words[1:description_index + 1])[:-12]
        self.product_materials = ' '.join(words[materials_index + 1: brand_index + 1])[:-6]
        self.product_brand = ' '.join(words[brand_index + 1: len(words)])

    # def get_url(self):
    #     rx.script("chrome.storage.sync.get(['url'], function(items){ console.log('get successful')});")

    def handle_submit(self, form_data: dict):
        """Handle the form submit."""
        self.form_data = form_data
        # show text
        val = get_product(form_data["input"])
        # val = get_product(self.get_url)
        scraped_data = get_roasted({
            "role" : "user", 
            "content" : val}, False )
        print(scraped_data)
        roast = get_roasted({
            "role" : "user",
            "content" : scraped_data
        }, True)
        print()
        print(roast)
        self.parse_product_card(scraped_data)
        self.roast_text = sent_tokenize(roast.lstrip().strip("\""))
        CondSimpleState.change

#send help
def typewriter_effect(sentence, type_delay):
    for char in sentence: 
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(type_delay)

#Original function
def display_text(text):
    return(
       rx.text(text.to_string(), as_="p", 
               style={
                   "font-family" : "Courier New",
                   "font-weight" : "bold",
                   "max-width" : "40%",
                   "margin" : "auto",
               })
    )

def index() -> rx.Component:
    return rx.vstack(
           rx.vstack(
            rx.heading("shameify",
                       style={
                           "padding":"5px"
                       }),
            rx.divider(width="100vw", style={
                "margin-bottom": "5px"
            }),
        ),
        rx.form.root(
            rx.vstack(
                rx.input(
                    name="input",
                    default_value="",
                    placeholder="you want to waste money on...",
                    required=True,
                    width="100%"
                ),
                rx.cond(
                    ProgressExampleState.show_progress,
                    rx.chakra.circular_progress(is_indeterminate=True),
                    rx.button("submit", type="submit", on_click=ProgressExampleState.increment),
                ),
                width="100%",
            ),
            rx.cond(
                CondSimpleState.show,
                rx.card(
                    rx.text(FormInputState.product_name),
                    rx.text(FormInputState.product_materials),
                    rx.text(FormInputState.product_brand),
                    width="40%",
                    variant="classic",
                    hide=CondSimpleState.show
                ),
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
        margin="auto"
    )

app = rx.App(style=style)
app.add_page(index)
