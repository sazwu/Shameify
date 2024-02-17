from bs4 import BeautifulSoup
import pip._vendor.requests as requests

# url = "https://www.nordstrom.com/s/llbean-quilted-quarter-zip-pullover/5715454?origin=coordinating-5715454-0-2-PDP_1-recbot-also_viewed_graph&recs_placement=PDP_1&recs_strategy=also_viewed_graph&recs_source=recbot&recs_page_type=product&recs_seed=5785205&color=LIGHT%20GRAY%20HEATHER"

def remove_tags(html):
  soup = BeautifulSoup(html, "html.parser")
  
  for data in soup(['style', 'script', 'a', 'head', 'header', 'footer', 'form', 'iframe', 'link']):
      # Remove tags
      data.decompose()
  
  return ' '.join(soup.stripped_strings)

def get_product(url):
  headers = {"User-Agent":"Mozilla/5.0"}
  html = requests.get(url, headers=headers).text

  return remove_tags(html)
