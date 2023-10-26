import { classNames } from 'shared/lib/classNames/classNames';
import {useEffect, useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

export const BugButton = () => {

    const [error, setError] = useState(false);

    const {t} = useTranslation()

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    })

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};