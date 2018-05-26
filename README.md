# sam-app

Simple Serverless Application Model app, notable as an example of how to validate the request at the API gateway to reject invalid requests before they reach lambda.

Items of Note:

* Request specification includes an inline swagger description in the DefinitionBody,
* Use of API gateway extensions in the DefinitionBody to validate the body ([x-amazon-apigateway-request-validator](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-request-validator.html))
* Inline schema definition for the request body
* A passthrough behavior of never to ensure invalid request or payloads of unsupported content type do not reach the lambda function

