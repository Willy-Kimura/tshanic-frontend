import urllib.request
import requests

def read_file_to_list(filename):
    # Reads a file line by line and stores each line as an element in a list.
    content_list = []
    with open(filename, 'r') as file:
        for line in file:
            content_list.append(line.strip())  # .strip() removes leading/trailing whitespace, including newline characters
    return content_list

def download_brands():
    data_list = read_file_to_list('links.txt')
    
    for i, url in enumerate(data_list):
        try:
            response = requests.get(url, stream=True)
            response.raise_for_status() # Raise an exception for bad status codes

            filename = f"{url.split('/')[-1]}" # Create a unique filename - [old] ilename = f"image_{i+1}_{url.split('/')[-1]}"

            with open(filename, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192): # Download in chunks
                    f.write(chunk)
            print(f"Downloaded: {filename}")
        except requests.exceptions.RequestException as e:
            print(f"Error downloading {url}: {e}")

download_brands()