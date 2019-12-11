# Simple Rest API - Unit Conversion

This project is a rest api interface which provides couple of endpoints to convert temperature and volume scales from one unit to another

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To get the project up and running you need to have :
i) Code checked out and cloned to your local directory
ii) Node.js and Express server installed
iii) Appropriate clients like curl or postman to test the interface.

### Installing
i) once you have code checked out in your local directory using
```
git clone https://github.com/sudeep82/simple-rest-api.git simple-rest-api-test
```

This should clone the project in your local simple-rest-api-test directory

ii) Run 'git checkout master'

iii) Run 'npm install' to install all the package

iv) Run 'node server.js' to start the server on port 3000. You should be able to access server now on http://localhost:3000/


## Running the tests

i) Run 'node run test.unit' to run available unit test if you want to run the tests without coverage tool.

If you want to see how much of the code the unit tests has convered you can use following command

ii) npm run test.coverage

This should generate something like this after your tests:
```

  3 passing (27ms)

---------------------------|----------|----------|----------|----------|-------------------|
File                       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------------------|----------|----------|----------|----------|-------------------|
All files                  |    21.17 |     2.17 |    16.67 |    21.17 |                   |
 simple-api-test              |    94.74 |      100 |        0 |    94.74 |                   |
  server.js                |    94.74 |      100 |        0 |    94.74 |                28 |
 simple-api-test/middleware   |    22.86 |     5.56 |       50 |    22.86 |                   |
  unitValidator.js         |    22.86 |     5.56 |       50 |    22.86 |... 97,103,104,111 |
 simple-api-test/repositories |      3.7 |        0 |        0 |      3.7 |                   |
  unitconversion.js        |      3.7 |        0 |        0 |      3.7 |... 71,72,74,75,78 |
 simple-api-test/routes       |      100 |      100 |      100 |      100 |                   |
  index.js                 |      100 |      100 |      100 |      100 |                   |
 simple-api-test/service      |    58.82 |      100 |       50 |    58.82 |                   |
  unitconvert-service.js   |    58.82 |      100 |       50 |    58.82 |... 19,20,21,22,23 |
 simple-api-test/tests        |    44.44 |      100 |    28.57 |    44.44 |                   |
  model-factory.js         |    44.44 |      100 |    28.57 |    44.44 |    15,23,31,39,55 |
 simple-api-test/util         |     8.15 |        0 |        0 |     8.15 |                   |
  unitConversionHandler.js |     8.15 |        0 |        0 |     8.15 |... 13,214,216,218 |
---------------------------|----------|----------|----------|----------|-------------------|
nyc
└─┬ C:\Program Files\nodejs\node.exe C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js run test
  │   21.17 % Lines
  └── C:\Program Files\nodejs\node.exe C:\Users\sudeep\source\repos\simple-api-test\node_modules\mocha\bin\mocha ./tests/test-master.test.js --recursive --exit
        21.17 % Lines


```

### Break down into end to end tests

This api is divided into two endpoint path. 

Temperature conversion happens in /unit-api/temperature and Volume conversion happens in /unit-api/volume. Please use tools like POSTMAN or CURL depening upon your convenience. Below are postman examples

```
Verifying that temperature conversion is ok.
POST Example for 'correct' answer

POST /unit-api/temperature HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 67f92cef-89fe-4ca0-8403-3b4ba709d6dc,db244f34-fb61-4ed6-974a-9debe8ff4cbb
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 119
Connection: keep-alive
cache-control: no-cache

{
	"initialTemperature" : 84.2,
	"initialUnit" : "Fahrenheit",
	"finalUnit" : "Rankine",
	"finalTemperature" : 543.94
}

Output

{
    "output": "correct"
}

POST Example for 'incorrect' answer

POST /unit-api/temperature HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 67f92cef-89fe-4ca0-8403-3b4ba709d6dc,db244f34-fb61-4ed6-974a-9debe8ff4cbb
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 119
Connection: keep-alive
cache-control: no-cache

{
	"initialTemperature" : 317.33,
	"initialUnit" : "Kelvin",
	"finalUnit" : "Fahrenheit",
	"finalTemperature" : 111.554
}

{
    "output": "incorrect"
}

POST Example for 'invalid' result

POST /unit-api/temperature HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 67f92cef-89fe-4ca0-8403-3b4ba709d6dc,db244f34-fb61-4ed6-974a-9debe8ff4cbb
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 119
Connection: keep-alive
cache-control: no-cache

{
	"initialTemperature" : 6.5,
	"initialUnit" : "Fahrenheit",
	"finalUnit" : "Rankine",
	"finalTemperature" : "dog"
}

{
    "message": "Invalid Request!! Initial and Final temperature needs to be number !!"
}

For Volume Conversion the call will look like:
POST /unit-api/volume HTTP/1.1
Host: localhost:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 1c1abd8c-067e-4f5f-b91a-1b5e93ab6c7d,55b6da51-6fdc-44b9-9c34-4e3e0e154780
Host: localhost:3000
Accept-Encoding: gzip, deflate
Content-Length: 100
Connection: keep-alive
cache-control: no-cache

{
	"initialVolume" : 20,
	"initialUnit" : "cups",
	"finalUnit" : "gallons",
	"finalVolume" : 0.001
}

Output
{
    "output": "incorrect"
}



```

I also added a general endpoint which converts both temperature and volume.CURL command example
```
curl -X POST \
  http://localhost:3000/unit-api/unit \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 108' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 4c4a49fd-0bad-40b0-b303-129ee2633ab5,1d646900-b97d-403f-a225-0575421b2210' \
  -H 'User-Agent: PostmanRuntime/7.15.2' \
  -H 'cache-control: no-cache' \
  -d '{
	"inputNumber" : 84.2,
	"initialUnit" : "fahrenheit",
	"finalUnit" : "rankine",
	"outputNumber" : 543.94
}'

curl -X POST \
  http://localhost:3000/unit-api/unit \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 110' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 550877b0-2f75-4f8d-b6ba-a57624968a3d,db935e09-29ac-4b13-84eb-c2fa25fc1a94' \
  -H 'User-Agent: PostmanRuntime/7.15.2' \
  -H 'cache-control: no-cache' \
  -d '{
	"inputNumber" : 317.33,
	"initialUnit" : "kelvin",
	"finalUnit" : "fahrenheit",
	"outputNumber" : 111.554
}'
```

## Deployment

I am using serverless deployment model( though using EBS for deployment creates seperate instance for node.js deployment ;) ) using multiple AWS Services .

Developer can merge in dev branch and then code can get reviewed in the dev branch. Once decision has been made to push to master , it can be merged to master and then AWS CodeBuild should automatically build this and trigger the code pipeline to deploy the project.

After the deployment app could be accessed by url(public DNS probided by amazon for example below...) given in following GET example:

```
GET /unit-api HTTP/1.1
Host: ec2-34-228-130-147.compute-1.amazonaws.com:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: 1684b269-2ef1-4f59-b528-7b986e29d6a5,405112a1-5b7f-4957-abe1-95b873aaca69
Host: ec2-34-228-130-147.compute-1.amazonaws.com:3000
Accept-Encoding: gzip, deflate
Connection: keep-alive
cache-control: no-cache



POST calls to convert the volume from API deployed in AWS
POST /unit-api/volume HTTP/1.1
Host: ec2-34-228-130-147.compute-1.amazonaws.com:3000
Content-Type: application/json
User-Agent: PostmanRuntime/7.15.2
Accept: */*
Cache-Control: no-cache
Postman-Token: af1a52cb-0d26-47be-993c-6cf0caa04fdc,29a4e500-89cd-4868-b20d-4f5f103da952
Host: ec2-34-228-130-147.compute-1.amazonaws.com:3000
Accept-Encoding: gzip, deflate
Content-Length: 100
Connection: keep-alive
cache-control: no-cache

{
	"initialVolume" : 20,
	"initialUnit" : "cups",
	"finalUnit" : "gallons",
	"finalVolume" : 0.001
}

Output:
{
    "output": "incorrect"
}


```



## Built With

GitHub , AWS CodeBuild and AWS Code Pipeline, AWS Elastic Beanstalk Amazon S3 to save intermediate artifacts during Build.

When AWS CodeBuild Succeeds:
```
Name 			Status      Context		Duration 	Start time       End time    
SUBMITTED		Succeeded
<1 sec	Dec 8, 2019 2:42 PM	Dec 8, 2019 2:42 PM
QUEUED	
Succeeded
1 sec	Dec 8, 2019 2:42 PM	Dec 8, 2019 2:42 PM
PROVISIONING	
Succeeded
14 secs	Dec 8, 2019 2:42 PM	Dec 8, 2019 2:42 PM
DOWNLOAD_SOURCE	
Succeeded
<1 sec	Dec 8, 2019 2:42 PM	Dec 8, 2019 2:42 PM
INSTALL	
Succeeded
16 secs	Dec 8, 2019 2:42 PM	Dec 8, 2019 2:43 PM
PRE_BUILD	
Succeeded
<1 sec	Dec 8, 2019 2:43 PM	Dec 8, 2019 2:43 PM
BUILD	
Succeeded
<1 sec	Dec 8, 2019 2:43 PM	Dec 8, 2019 2:43 PM
POST_BUILD	
Succeeded
<1 sec	Dec 8, 2019 2:43 PM	Dec 8, 2019 2:43 PM
UPLOAD_ARTIFACTS	
Succeeded
<1 sec	Dec 8, 2019 2:43 PM	Dec 8, 2019 2:43 PM
FINALIZING	
Succeeded
<1 sec	Dec 8, 2019 2:43 PM	Dec 8, 2019 2:43 PM
COMPLETED	
Succeeded
Dec 8, 2019 2:43 PM
```





## Versioning
 

## Authors

* **Sudeep Ghimire**

## Improvements
1. can add logging to this and extend it to use tools like ElasticSearch Kibana to generate logstash visualization
2. can add token based authentication for teachers to send when requesting the api
3. can build classes and describe all properties with in it to use temperature and volume properties
4. can add swagger for properly documenting the API
5. can add more to unit test and increase the coverage of the test and also add UI using angular to provide user with UI platform for this app
6. Can add monitoring to api health and need to do some cleanup on commented codes and not needed files geared toward extending this to add UI,swagger,creating different routes etc
7. For this particular requirement, we can have just one endpoint. Another good improvement would be to have batch requests where teacher can input all the student records and get the json block with the result.
## License


## Acknowledgments
Used git ignore template from here https://github.com/github/gitignore/edit/master/Node.gitignore
