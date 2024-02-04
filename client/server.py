import requests
import json
url = "https://data.mongodb-api.com/app/data-dgisf/endpoint/data/v1/action/findOne"

payload = json.dumps({
    "collection": "Passengers",
    "database": "users",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
})
headers = {
  'Content-Type': 'application/json',
  'Access-Control-Request-Headers': '*',
  'api-key': 'LWSaHoOLqzlBXqx8hE85P3s4ncPr6DUk4e1ZVr1SELCs9bJnOUlI1B1kDBTLn9L0',
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
