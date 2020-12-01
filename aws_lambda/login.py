import facebook
import requests

def lambda_handler(event, context):
    token = event['token']
    graph = facebook.GraphAPI(access_token=token, version = 3.1)
    myData = graph.request('/me?fields=id,name,birthday,email')
    
    return {
        'headers': { 
            'Content-Type': 'application/json'             
        },
        'statusCode': 200,
        'body': myData
    }