import styles from './Header.module.scss';

const Header = () => {
    return (
        <header
            className={`${styles.header} w-full px-4`}>
            <p>Date</p>
            <p className={'uppercase'}>Post-Raid Recap</p>
            <p>Some Raid Name Here</p>
            <p className={'italic'}>Some Quote</p>
        </header>
    );
}

export default Header;
