import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Authenticator, SelectField } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

import './index.css'
import App from './App.tsx'

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs)

const formFields = {
  signUp: {
    name: {
      order:1
    },
    email: {
      order: 2
    },
    phone_number: {
      order: 3
    },
    password: {
      order: 4
    },
    confirm_password: {
      order: 5
    },   
  },
 }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authenticator
      formFields={formFields}
      components={{
        SignUp: {
          FormFields() {
            return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields />

                {/* Append & require Terms and Conditions field to sign up  */}
                <SelectField
                  label="Role"
                  name="custom:role"
                >
                  <option value="BCO">BCO</option>
                  <option value="Vessel Operator">Vessel Operator</option>
                  <option value="Transportation Operator">Transportation Operator</option>
                  <option value="Terminal Operator">Terminal Operator</option>
                </SelectField>

                <SelectField
                  label="Your Organization"
                  name='custom:organization'
                >
                    <option value="Leidos">Leidos</option>
                </SelectField>
              </>
            );
          },
        },
      }}
    >
      <App />
    </Authenticator>
  </StrictMode>,
)
