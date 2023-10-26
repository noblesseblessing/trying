import React, {memo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Input} from "shared/ui/Input/input";

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [value, setValue] = useState('')

    const onChange = (val: string) => {
        setValue(val);
    }

    return (
        <div>
            {t('Главная страница')}
            <Input
                value={value}
                onChange={onChange}
            />
        </div>
    );
});

export default MainPage;
