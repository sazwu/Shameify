from openai import OpenAI
import os
import sys

TOGETHER_API_KEY = os.environ.get("TOGETHER_API_KEY")

#todo: figure out how to add api key to
# client = OpenAI(api_key=TOGETHER_API_KEY,
#   base_url='https://api.together.xyz',
# )
client = OpenAI(api_key="fb92edaf615a32e491e05ca30e3a40a53a8bd3f8b7be1d965806bc12454906ca",
  base_url='https://api.together.xyz',
)


input = {
    "role": "user",
    "content": "Your browser does not have JS enabled, you are still able to browse the website but you won’t be able to access advanced features such as editing or logging in. Hover to zoom. 25 Dickies Newington Tee $40.00 Or 4 interest-free installments of $10.00 with or Free Shipping Over $75 Select size to see when item arrives to you Details Product Sku: 87056065; Color Code: 002 Newington tee by Dickies with a washed look. Cotton jersey t-shirt with short sleeves & a ribbed crew neck. Topped with a logo accent at the left chest. Features - Newington tee from Dickies - Washed cotton jersey - Regular fit - Short sleeves - Ribbed crew neck Content + Care - 100% Cotton - Machine wash - Imported Size + Fit - Model is 6’1 and wearing size Medium - Measurements taken from size Medium - Chest: 22 - Length: 27 Dickies For 100 years, Dickies has been crafting quality work wear. From iconic carpenter and work pants to their essential gas jackets, their work wear just works, with every look and every fit. Shipping + Returns Like it? Share it!"
    # "content": "hai 100% polyester"
}
messages = [
    {
    "role": "system",
    "content": "You are given text scraped from a product page html. Identify the main product name, description, and materials",
    },
]
messages.append(input)
chat_completion = client.chat.completions.create(
messages=messages,
model="mistralai/Mixtral-8x7B-Instruct-v0.1",
max_tokens=1024
)

print(chat_completion.choices[0].message.content)

# sys.modules[__name__] = call_ai
