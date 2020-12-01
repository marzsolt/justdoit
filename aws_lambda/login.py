import facebook
import requests
import json

def lambda_handler(event, context):
    token = event['token']
    graph = facebook.GraphAPI(access_token=token, version = 3.1)
    myData = graph.request('/me?fields=id,name,birthday,email')
    
    return {
        'headers': {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST",
            "Access-Control-Allow-Credentials" : True,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        },
        'statusCode': 200,
        'body': json.dumps(myData)
    }