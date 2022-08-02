import { IHeader } from '../models/IHeader';
import styles from './Header.module.scss';

const Header = (p:{ data: IHeader }) => {
    const { heading, quote, raid, date } = p.data;
    return (
        <header
            className={`${styles.header} w-full px-4`}>
            <p>{date}</p>
            <p className={'uppercase'}>{heading}</p>
            <p>{raid}</p>
            <p className={'italic'}>{quote}</p>
        </header>
    );
}

export default Header;
