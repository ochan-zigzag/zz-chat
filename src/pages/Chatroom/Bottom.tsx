import { Field, FieldProps, Form, Formik, FormikActions, FormikErrors } from 'formik';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { PURPLE, WHITE } from '../../commons/colors';
import { NewChatMsg } from '../../models/chatMsg';

interface FormValues {
  content: string;
}

interface Props {
  myUserId: string;
  addMsg: (newChatMsg: NewChatMsg) => Promise<void>;
}

const Bottom = (props: Props) => {
  const { myUserId, addMsg } = props;

  const initialValues = useMemo(() => ({ content: '' }), []);
  const handleSubmit = useCallback(
    async (values: FormValues, formikActions: FormikActions<FormValues>) => {
      await addMsg({
        userId: myUserId,
        content: values.content,
      });
      formikActions.setSubmitting(false);
      formikActions.resetForm(initialValues);
    },
    [myUserId, addMsg],
  );

  const validate = useCallback((values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.content) {
      errors.content = '메세지를 작성해주세요';
    }

    return errors;
  }, []);

  return (
    <Formik<FormValues>
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
      render={() => (
        <Form>
          <Container>
            <Field name="content" render={MsgInputComponent} />
            <SubmitButton type="submit">
              <img src="images/ic-send.svg" />
            </SubmitButton>
          </Container>
        </Form>
      )}
    />
  );
};

const MsgInputComponent = ({ field }: FieldProps<string>) => (
  <MsgInputContainer {...field} placeholder="메세지를 입력하세요.." />
);

export default Bottom;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100vw - 32px);
  padding: 0 16px 20px;
  display: flex;
`;

const MsgInputContainer = styled.input`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: ${WHITE};
  border: none;
  padding: 0 16px;
  margin-right: 12px;
`;

const SubmitButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PURPLE};
  border: none;
`;
