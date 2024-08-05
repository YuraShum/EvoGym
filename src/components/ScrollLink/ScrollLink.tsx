import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { NavLinks } from '../../config/config';
import '../../index.css';
import { useGlobalContext } from '../../state/GlobalNavContext';

type Props = {
    page: string;

}

const ScrollLink = ({ page}: Props) => {

    const { currentTitle, setCurrentTitle } = useGlobalContext();
    const toLowerText = page.toLowerCase().replace(" ", '') as NavLinks;

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setCurrentTitle(toLowerText);
        }
    }, [inView, toLowerText, setCurrentTitle, currentTitle]);

    return (
        <Link
            className={`${currentTitle === toLowerText ? ' cursor-pointer' :
                "transition duration-500 hover:text-primary-300 cursor-pointer"
                }`}
            to={toLowerText}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setCurrentTitle(toLowerText)}
        >
            <span ref={ref}>{page}</span>
        </Link>
    );
}

export default ScrollLink;