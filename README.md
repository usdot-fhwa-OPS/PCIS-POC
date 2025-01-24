# PCIS-POC
This is a public repository that contains web application code and configuration files related to Amazon Web Services.

## Prerequisites
* [Node.js (version 18+)](https://nodejs.org/en/download/package-manager)
  
## Getting Started
**Step 1:**

Download or clone this repo by using the link below:

```
https://github.com/usdot-fhwa-OPS/pcis-poc.git
```

**Step 2:**

Go to project root and execute the following command in console to install the required dependencies: 

```
npm install
```

## Instructions for Local Deployment
**Step 1:**

Request an AWS account with the `AmplifyBackendDeployFullAccess` managed policy, ensuring you retrieve the username, session url, and region.

[Read more](https://docs.amplify.aws/react/start/account-setup/)

**Step 2:**

Install the AWS CLI.

[Read more](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

**Step 3:**

Access your AWS account via the AWS CLI by running the following commandm in terminal: 
```
aws configure sso
```

Terminal output example with suggested input:
```
SSO session name (Recommended): username from above
SSO start URL: session url from above
SSO region: us-east-1
SSO registration scopes [sso:account:access]: <leave blank>
Attempting to automatically open the SSO authorization page in your default browser.
If the browser does not open or you wish to use a different device to authorize this request, open the following URL:

 https://device.sso.us-east-2.amazonaws.com/

 Then enter the code:

 SOME-CODE

## browser opens

The only AWS account available to you is: <your-aws-account-id>
Using the account ID <your-aws-account-id>
The only role available to you is: amplify-policy
Using the role name "amplify-policy"
CLI default client Region [us-east-1]: us-east-1
CLI default output format [None]: hit enter
CLI profile name [amplify-policy-<your-aws-account-id>]: default

To use this profile, specify the profile name using --profile, as shown:
aws s3 ls --profile default
```

*[Read more](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

**Step 4:**

Execute the following command in terminal Run a cloud development sandbox environment, which deploys a high-fidelity AWS backend locally: 
```
npx ampx sandbox --profile <profile-name>
```

The `amplify_outputs.json` file should be written/updated.

**Step 5:**

With the command from Step 4 still running, execute the following command seperately to run the frontend project's development server on localhost:

```
npm run dev
```

## Release Notes
The current version and release history of the PCIS-POC can be found here: [Release Notes](<docs/Release_notes.md>)
 
## License information
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 
## Contribution
Welcome to the PCIS POC contributing guide. Please read this guide to learn about our development process, how to propose pull requests and improvements, and how to build and test your changes to this project. [PCIS POC Contributing Guide](docs/Contributing.md)
 
## Code of Conduct 
Please read our [PCIS Code of Conduct](docs/Code_of_Conduct.md) which outlines our expectations for participants within the PCIS POC community, as well as steps to reporting unacceptable behavior. We are committed to providing a welcoming and inspiring community for all and expect our code of conduct to be honored. Anyone who violates this code of conduct may be banned from the community.
 
## Attribution
The development team would like to acknowledge the people who have made direct contributions to the design and code in this repository. [PCIS POC Attribution](ATTRIBUTION.txt)
 
## Contact
For more information, contact christopher.h.castillo@leidos.com.
 
## Support
For technical support, please contact the CAV Support Services at CAVSupportServices@dot.gov.