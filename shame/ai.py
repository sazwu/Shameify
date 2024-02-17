from openai import OpenAI
import os
import sys

TOGETHER_API_KEY = os.environ.get("TOGETHER_API_KEY")

# TODO: figure out how to add api key to env
client = OpenAI(api_key=TOGETHER_API_KEY,
  base_url='https://api.together.xyz',
)

def call_ai(input):
    # TODO: change model maybe
    messages = [
        {
        "role": "system",
        "content": "You are a sassy, critical, well-intentioned friend that hates overconsumption and cares about sustainability",
        },
    ]
    messages.append(input)
    chat_completion = client.chat.completions.create(
    messages=messages,
    model="mistralai/Mixtral-8x7B-Instruct-v0.1",
    max_tokens=1024
    )

    print(chat_completion.choices[0].message.content)

sys.modules[__name__] = call_ai
