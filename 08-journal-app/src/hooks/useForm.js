import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidator();
    }, [formState]);

    useEffect(() => {
        setFormState(initialForm);                
    }, [ initialForm ])
    

    const isFormValid = useMemo(() => {
        for (const formValues of Object.keys(formValidation)) {
            if (formValidation[formValues] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const createValidator = () => {
        const formChekedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];
            formChekedValues[`${formField}Valid`] = fn(formState[formField]) ?
                null :
                errorMessage;
        }

        setFormValidation(formChekedValues);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    };
};