import detectBrowserLanguage from 'detect-browser-language';

// i18n
import { useTranslation } from 'react-i18next';

// Material
import Button from '@mui/material/Button';

const ComponentLocation = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {detectBrowserLanguage()}
            <h1>{t('description.part1')}</h1>
            <div style={{ padding: "10px" }}>
                <Button variant="contained" onClick={() => changeLanguage('es')}>Click ES</Button>
                <Button variant="contained" onClick={() => changeLanguage('en')}>Click EN</Button>
            </div>
        </>);
};

export default ComponentLocation;
