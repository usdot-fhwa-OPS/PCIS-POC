import { Authenticator, SelectField, translations } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify/utils';
import { Amplify } from 'aws-amplify';
import outputs from '../../../amplify_outputs.json';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);
I18n.putVocabularies(translations);
I18n.setLanguage('en');

I18n.putVocabularies({
  en: {
    "username is required to signUp":"Email is required to signUp"
  },
});

const formFields = {
  signUp: {
    name: { order: 1 },
    email: { order: 2 },
    phone_number: { order: 3 },
    password: { order: 4 },
    confirm_password: { order: 5 },
  },
};

const roleOptions = [
  <option key="BCO" value="BCO">BCO</option>,
  <option key="Vessel Operator" value="Vessel Operator">Vessel Operator</option>,
  <option key="Transportation Operator" value="Transportation Operator">Transportation Operator</option>,
  <option key="Terminal Operator" value="Terminal Operator">Terminal Operator</option>,
];

const orgOptions = [
  <option key="Leidos" value="Leidos">Leidos</option>,
];

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <Authenticator
      loginMechanisms={['email']}
      formFields={formFields}
      components={{
        SignUp: {
          FormFields() {
            return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields />

                {/* Append custom fields */}
                <SelectField label="Role" name="custom:role" required>
                  {roleOptions}
                </SelectField>

                <SelectField label="Your Organization" name="custom:organization" required>
                  {orgOptions}
                </SelectField>
              </>
            );
          },
        },
      }}
    >
      {children}
    </Authenticator>
  );
};

export default Auth;