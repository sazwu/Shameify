from openai import OpenAI
import os
import sys

TOGETHER_API_KEY = os.environ.get("TOGETHER_API_KEY")

#todo: figure out how to add api key to env
client = OpenAI(api_key="fb92edaf615a32e491e05ca30e3a40a53a8bd3f8b7be1d965806bc12454906ca",
  base_url='https://api.together.xyz',
)

def get_roasted(input, roast: bool):
    content = "You are given text scraped from a product page html. Give me the following: product_name, description, materials, brand"
    if roast:
        content = "You are a sassy, critical, well-intentioned friend that hates overconsumption and cares about sustainability. Use short snappy sentences as you roast this product I'm considering buying and encourage me to do better, but educate me on the issues of the product."
    messages = [
        {
        "role": "system",
        "content": {content},
        },
    ]
    messages.append(input)
    chat_completion = client.chat.completions.create(
    messages=messages,
    model="Qwen/Qwen1.5-14B-Chat",
    max_tokens=1024
    )

    return chat_completion.choices[0].message.content
