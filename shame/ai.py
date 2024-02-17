from openai import OpenAI
import os
import sys

TOGETHER_API_KEY = os.environ.get("TOGETHER_API_KEY")

#todo: figure out how to add api key to env
client = OpenAI(api_key=TOGETHER_API_KEY,
  base_url='https://api.together.xyz',
)

def get_roasted(input, roast: bool):
    content = "You are given text scraped from a product page html. Identify the main product name, description, and materials"
    if roast:
        content = "You are a sassy, critical, well-intentioned friend that hates overconsumption and cares about sustainability. Use short snappy sentences as you roast my choices and encourage me to do better, but educate me on why the issues of the product."
    messages = [
        {
        "role": "system",
        "content": {content},
        },
    ]
    messages.append(input)
    chat_completion = client.chat.completions.create(
    messages=messages,
    model="mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens=1024
    )

    return chat_completion.choices[0].message.content
