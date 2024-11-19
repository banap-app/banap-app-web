const Cloudy = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M56.6577 29.3111C56.6381 29.3111 56.6196 29.3168 56.5999 29.3168C56.9637 28.4777 57.1674 27.5504 57.1674 26.5747C57.1674 22.7517 54.0681 19.6512 50.2443 19.6512C48.8931 19.6512 47.6361 20.0438 46.5706 20.7151C45.1293 17.2107 41.6855 14.7417 37.6625 14.7417C32.3425 14.7417 28.0297 19.0539 28.0297 24.3759C28.0297 24.777 28.0621 25.1695 28.1099 25.5592C28.0829 25.5592 28.0567 25.5564 28.0297 25.5564C24.4627 25.5564 21.571 28.4464 21.571 32.0133C21.571 35.5803 24.4627 38.4731 28.0297 38.4731H56.6577C59.1876 38.4731 61.2382 36.4223 61.2382 33.8935C61.2382 31.3619 59.1876 29.3111 56.6577 29.3111Z"
                fill="#1EA81E"
            />
            <g filter="url(#filter0_d_1599_1648)">
                <path
                    d="M45.1804 35.3384C45.1565 35.3384 45.1346 35.3441 45.1107 35.3441C45.5493 34.3286 45.7954 33.2107 45.7954 32.036C45.7954 27.4251 42.058 23.6903 37.448 23.6903C35.8187 23.6903 34.3034 24.1624 33.0185 24.9703C31.2806 20.7462 27.1288 17.7681 22.2778 17.7681C15.8635 17.7681 10.6635 22.9706 10.6635 29.3849C10.6635 29.8685 10.7028 30.3435 10.7605 30.8128C10.7278 30.8128 10.6962 30.8071 10.6635 30.8071C6.36295 30.8071 2.87646 34.2945 2.87646 38.595C2.87646 42.8956 6.36295 46.3821 10.6635 46.3821H45.1804C48.2305 46.3821 50.7032 43.9097 50.7032 40.8595C50.7032 37.8097 48.2305 35.3384 45.1804 35.3384Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1599_1648"
                    x="1.87646"
                    y="17.7681"
                    width="48.8267"
                    height="30.114"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1599_1648"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1599_1648"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

const Sunny = () => {
    return (
        <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M29.8802 21.2743C29.8802 26.0268 26.0276 29.8794 21.2771 29.8794C16.5238 29.8794 12.6711 26.0268 12.6711 21.2743C12.6711 16.521 16.5238 12.6684 21.2771 12.6684C26.0276 12.6684 29.8802 16.521 29.8802 21.2743Z"
                fill="#F6C833"
            />
            <path
                d="M21.2767 9.40027C20.7071 9.40027 20.2441 8.94008 20.2441 8.37047V1.03004C20.2441 0.460422 20.7071 0.000235558 21.2767 0.000235558C21.8464 0.000235558 22.3065 0.460422 22.3065 1.03004V8.37047C22.3065 8.94008 21.8464 9.40027 21.2767 9.40027Z"
                fill="#F6C833"
            />
            <path
                d="M21.2767 42.5499C20.7071 42.5499 20.2441 42.0881 20.2441 41.5185V34.1797C20.2441 33.6101 20.7071 33.1482 21.2767 33.1482C21.8464 33.1482 22.3065 33.6101 22.3065 34.1797V41.5185C22.3065 42.0881 21.8464 42.5499 21.2767 42.5499Z"
                fill="#F6C833"
            />
            <path
                d="M29.6724 12.8792C29.2684 12.4752 29.2684 11.8214 29.6724 11.4201L34.8607 6.22906C35.2647 5.82781 35.9185 5.82781 36.3198 6.22906C36.7238 6.63312 36.7238 7.28692 36.3198 7.68817L31.1315 12.8792C30.7275 13.2805 30.0765 13.2805 29.6724 12.8792Z"
                fill="#F6C833"
            />
            <path
                d="M6.23189 36.3188C5.82895 35.9158 5.82895 35.2626 6.23189 34.86L11.421 29.6706C11.8237 29.2679 12.4769 29.2679 12.8798 29.6706C13.2825 30.0735 13.2825 30.7265 12.8798 31.1294L7.69045 36.3188C7.28751 36.7217 6.63455 36.7217 6.23189 36.3188Z"
                fill="#F6C833"
            />
            <path
                d="M33.1489 21.2748C33.1489 20.7052 33.6119 20.2422 34.1815 20.2422H41.5192C42.0888 20.2422 42.5518 20.7052 42.5518 21.2748C42.5518 21.8444 42.0888 22.3074 41.5192 22.3074H34.1815C33.6119 22.3074 33.1489 21.8444 33.1489 21.2748Z"
                fill="#F6C833"
            />
            <path
                d="M0 21.2748C0 20.7052 0.461885 20.2422 1.0315 20.2422H8.37053C8.94015 20.2422 9.40173 20.7052 9.40173 21.2748C9.40173 21.8444 8.94015 22.3074 8.37053 22.3074H1.0315C0.461885 22.3074 0 21.8444 0 21.2748Z"
                fill="#F6C833"
            />
            <path
                d="M29.6724 29.6706C30.0765 29.2679 30.7275 29.2679 31.1315 29.6706L36.3198 34.86C36.7238 35.2626 36.7238 35.9158 36.3198 36.3188C35.9185 36.7217 35.2647 36.7217 34.8607 36.3188L29.6724 31.1294C29.2684 30.7265 29.2684 30.0735 29.6724 29.6706Z"
                fill="#F6C833"
            />
            <path
                d="M6.23189 6.22906C6.63455 5.82781 7.28751 5.82781 7.69045 6.22906L12.8798 11.4201C13.2825 11.8214 13.2825 12.4752 12.8798 12.8792C12.4769 13.2805 11.8237 13.2805 11.421 12.8792L6.23189 7.68817C5.82895 7.28692 5.82895 6.63312 6.23189 6.22906Z"
                fill="#F6C833"
            />
        </svg>
    )
}

const Rainy = () => {
    return (
        <svg
            width="45"
            height="40"
            viewBox="0 0 45 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1599_1699)">
                <path
                    d="M39.4727 16.046C39.4515 16.046 39.4321 16.0518 39.4111 16.052C39.8006 15.1511 40.0188 14.1588 40.0188 13.1149C40.0188 9.02144 36.7002 5.70287 32.6068 5.70287C31.16 5.70287 29.8146 6.12392 28.6737 6.84072C27.1305 3.09001 23.4439 0.447083 19.1366 0.447083C13.4408 0.447083 8.82374 5.06412 8.82374 10.7599C8.82374 11.1903 8.8586 11.6121 8.90987 12.0286C8.88083 12.0283 8.85279 12.0243 8.82374 12.0243C5.00509 12.0243 1.90918 15.1201 1.90918 18.939C1.90918 22.7576 5.00509 25.8534 8.82374 25.8534H39.4727C42.1811 25.8534 44.3764 23.658 44.3764 20.9497C44.3764 18.2414 42.1811 16.046 39.4727 16.046Z"
                    fill="white"
                />
            </g>
            <path
                d="M15.4985 37.935C14.6656 39.6679 12.5854 40.3976 10.8525 39.5646C9.11956 38.7316 8.38988 36.6514 9.22287 34.9185C10.0561 33.1856 15.4427 30.0148 15.4427 30.0148C15.4427 30.0148 16.3315 36.2021 15.4985 37.935Z"
                fill="#4E8CC9"
            />
            <path
                d="M24.1556 37.935C23.3228 39.6679 21.2426 40.3976 19.5097 39.5646C17.7766 38.7316 17.0472 36.6514 17.8801 34.9185C18.7134 33.1856 24.1 30.0148 24.1 30.0148C24.1 30.0148 24.9888 36.2021 24.1556 37.935Z"
                fill="#4E8CC9"
            />
            <path
                d="M32.935 37.935C32.102 39.6679 30.0218 40.3976 28.2889 39.5646C26.556 38.7316 25.8265 36.6514 26.6593 34.9185C27.4925 33.1856 32.8791 30.0148 32.8791 30.0148C32.8791 30.0148 33.7679 36.2021 32.935 37.935Z"
                fill="#4E8CC9"
            />
            <defs>
                <filter
                    id="filter0_d_1599_1699"
                    x="0.90918"
                    y="0.447021"
                    width="43.4673"
                    height="26.9064"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1599_1699"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1599_1699"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

const Storm = () => {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1599_1704)">
                <path
                    d="M48.5011 31.3835C48.4797 31.3835 48.4603 31.3893 48.4389 31.3896C48.8323 30.4796 49.0527 29.4772 49.0527 28.4228C49.0527 24.2881 45.7007 20.936 41.566 20.936C40.1046 20.936 38.7456 21.3613 37.5932 22.0853C36.0344 18.2968 32.3107 15.6272 27.9598 15.6272C22.2069 15.6272 17.5433 20.2908 17.5433 26.044C17.5433 26.4788 17.5782 26.9048 17.63 27.3255C17.6007 27.3253 17.5724 27.3212 17.5433 27.3212C13.6859 27.3212 10.5588 30.4482 10.5588 34.3056C10.5588 38.1628 13.6859 41.2898 17.5433 41.2898H48.5011C51.2368 41.2898 53.4546 39.0723 53.4546 36.3366C53.4546 33.601 51.2368 31.3835 48.5011 31.3835Z"
                    fill="white"
                />
            </g>
            <path
                d="M30.1378 44.3637L28 51.0411H30.9475L29.0365 57.8182L36 48.2505H32.4049L33.7652 44.3637H30.1378Z"
                fill="#FBDB60"
            />
            <defs>
                <filter
                    id="filter0_d_1599_1704"
                    x="9.55884"
                    y="15.6272"
                    width="43.8958"
                    height="27.1626"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1599_1704"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1599_1704"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

const SunBehindCloud = () => {
    return (
        <svg
            width="56"
            height="42"
            viewBox="0 0 56 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M25.0431 17.4943C25.0431 21.3609 21.9081 24.4957 18.0408 24.4957C14.1736 24.4957 11.0386 21.3609 11.0386 17.4943C11.0386 13.6276 14.1736 10.4928 18.0408 10.4928C21.9081 10.4928 25.0431 13.6276 25.0431 17.4943Z"
                fill="#FBDB60"
            />
            <path
                d="M18.0409 7.83154C17.5773 7.83154 17.2014 7.45485 17.2014 6.99204V1.02115C17.2014 0.555638 17.5773 0.181612 18.0409 0.181612C18.5046 0.181612 18.8802 0.555638 18.8802 1.02115V6.99204C18.8802 7.45485 18.5046 7.83154 18.0409 7.83154Z"
                fill="#FBDB60"
            />
            <path
                d="M18.0409 34.8073C17.5773 34.8073 17.2014 34.4316 17.2014 33.968V27.9963C17.2014 27.5308 17.5773 27.1568 18.0409 27.1568C18.5046 27.1568 18.8802 27.5308 18.8802 27.9963V33.968C18.8802 34.4316 18.5046 34.8073 18.0409 34.8073Z"
                fill="#FBDB60"
            />
            <path
                d="M24.8735 10.6624C24.5458 10.3341 24.5458 9.80137 24.8735 9.47309L29.0964 5.25124C29.4242 4.92297 29.9556 4.92297 30.2833 5.25124C30.6114 5.57952 30.6114 6.1096 30.2833 6.43787L26.0607 10.6624C25.7329 10.988 25.2012 10.988 24.8735 10.6624Z"
                fill="#FBDB60"
            />
            <path
                d="M5.79829 29.7374C5.47056 29.4091 5.47056 28.8763 5.79829 28.5507L10.0212 24.3262C10.349 23.9979 10.8804 23.9979 11.2084 24.3262C11.5362 24.6544 11.5362 25.1872 11.2084 25.5128L6.98548 29.7374C6.65774 30.063 6.12603 30.063 5.79829 29.7374Z"
                fill="#FBDB60"
            />
            <path
                d="M27.7036 17.4943C27.7036 17.0315 28.0792 16.6548 28.5429 16.6548H34.5151C34.9785 16.6548 35.3544 17.0315 35.3544 17.4943C35.3544 17.9571 34.9785 18.3339 34.5151 18.3339H28.5429C28.0792 18.3339 27.7036 17.9571 27.7036 17.4943Z"
                fill="#FBDB60"
            />
            <path
                d="M0.727295 17.4943C0.727295 17.0315 1.1032 16.6548 1.56682 16.6548H7.53878C8.00241 16.6548 8.37831 17.0315 8.37831 17.4943C8.37831 17.9571 8.00241 18.3339 7.53878 18.3339H1.56682C1.1032 18.3339 0.727295 17.9571 0.727295 17.4943Z"
                fill="#FBDB60"
            />
            <path
                d="M24.8735 24.3262C25.2012 23.9979 25.7329 23.9979 26.0607 24.3262L30.2833 28.5507C30.6114 28.8763 30.6114 29.4091 30.2833 29.7374C29.9556 30.063 29.4242 30.063 29.0964 29.7374L24.8735 25.5128C24.5458 25.1872 24.5458 24.6544 24.8735 24.3262Z"
                fill="#FBDB60"
            />
            <path
                d="M5.79829 5.25124C6.12603 4.92297 6.65774 4.92297 6.98548 5.25124L11.2084 9.47309C11.5362 9.80137 11.5362 10.3341 11.2084 10.6624C10.8804 10.988 10.349 10.988 10.0212 10.6624L5.79829 6.43787C5.47056 6.1096 5.47056 5.57952 5.79829 5.25124Z"
                fill="#FBDB60"
            />
            <g filter="url(#filter0_d_1599_1709)">
                <path
                    d="M50.1253 29.7346C50.1027 29.7346 50.082 29.74 50.0594 29.74C50.4743 28.7794 50.7068 27.7219 50.7068 26.6106C50.7068 22.2488 47.1713 18.7158 42.8106 18.7158C41.2694 18.7158 39.8357 19.1625 38.6205 19.9267C36.9765 15.9308 33.049 13.1136 28.4598 13.1136C22.3921 13.1136 17.4733 18.035 17.4733 24.1028C17.4733 24.5602 17.5104 25.0096 17.5648 25.4536C17.5341 25.4536 17.5042 25.4482 17.4733 25.4482C13.4048 25.4482 10.1067 28.7471 10.1067 32.8153C10.1067 36.8835 13.4048 40.1816 17.4733 40.1816H50.1253C53.0106 40.1816 55.3495 37.8428 55.3495 34.9575C55.3495 32.0724 53.0106 29.7346 50.1253 29.7346Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1599_1709"
                    x="9.10669"
                    y="13.1135"
                    width="46.2427"
                    height="28.5681"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-1" dy="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1599_1709"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1599_1709"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

const Pin = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.83333 7.16679C8.91667 7.16679 8.16667 7.91679 8.16667 8.83345C8.16667 9.75012 8.91667 10.5001 9.83333 10.5001C10.75 10.5001 11.5 9.75012 11.5 8.83345C11.5 7.91679 10.75 7.16679 9.83333 7.16679ZM9.83333 3.00012C12.5583 3.00012 15.6667 5.05012 15.6667 8.95845C15.6667 11.4418 13.8917 14.0585 10.3417 16.7835C10.0417 17.0168 9.625 17.0168 9.325 16.7835C5.775 14.0501 4 11.4418 4 8.95845C4 5.05012 7.10833 3.00012 9.83333 3.00012Z"
                fill="#1EA81E"
            />
        </svg>
    )
}

const Wind = ({ size }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.88727 8.61969C3.88727 7.80842 4.42811 7.26758 5.23938 7.26758H6.5915C7.40276 7.26758 7.94361 7.80842 7.94361 8.61969C7.94361 9.43096 7.40276 9.97181 6.5915 9.97181H5.23938C4.42811 9.97181 3.88727 9.43096 3.88727 8.61969ZM5.23938 19.4366C5.23938 18.6253 5.78023 18.0845 6.5915 18.0845H7.94361C8.75488 18.0845 9.29572 18.6253 9.29572 19.4366C9.29572 20.2479 8.75488 20.7887 7.94361 20.7887H6.5915C5.78023 20.7887 5.23938 20.2479 5.23938 19.4366ZM5.23938 23.4929C4.42811 23.4929 3.88727 24.0338 3.88727 24.845C3.88727 25.6563 4.42811 26.1972 5.23938 26.1972H16.0563C16.8676 26.1972 17.4084 25.6563 17.4084 24.845C17.4084 24.0338 16.8676 23.4929 16.0563 23.4929H5.23938ZM28.2253 8.61969C28.2253 7.80842 28.7661 7.26758 29.5774 7.26758H32.2816C33.0929 7.26758 33.6338 7.80842 33.6338 8.61969C33.6338 9.43096 33.0929 9.97181 32.2816 9.97181H29.5774C28.7661 9.97181 28.2253 9.43096 28.2253 8.61969ZM9.29572 28.9014C8.48445 28.9014 7.94361 29.4422 7.94361 30.2535C7.94361 31.0648 8.48445 31.6056 9.29572 31.6056H18.7605C19.5718 31.6056 20.1126 31.0648 20.1126 30.2535C20.1126 29.4422 19.5718 28.9014 18.7605 28.9014H9.29572ZM3.88727 15.3803C3.076 15.3803 2.53516 14.8394 2.53516 14.0281C2.53516 13.2169 3.076 12.676 3.88727 12.676H20.1126C21.5999 12.676 22.8169 11.4591 22.8169 9.97181C22.8169 8.48448 21.5999 7.26758 20.1126 7.26758C19.3014 7.26758 18.6253 7.538 18.2197 8.07885C17.6788 8.61969 16.8676 8.61969 16.3267 8.07885C15.7859 7.538 15.7859 6.72673 16.3267 6.18589C17.2732 5.23941 18.6253 4.56335 20.1126 4.56335C23.0873 4.56335 25.5211 6.99716 25.5211 9.97181C25.5211 12.9465 23.0873 15.3803 20.1126 15.3803H3.88727ZM29.5774 18.0845C30.3887 18.0845 30.9295 17.5436 30.9295 16.7324C30.9295 15.9211 30.3887 15.3803 29.5774 15.3803C29.1718 15.3803 28.9014 15.5155 28.6309 15.7859C28.0901 16.3267 27.2788 16.3267 26.738 15.7859C26.1971 15.245 26.1971 14.4338 26.738 13.8929C27.414 13.0817 28.4957 12.676 29.5774 12.676C31.876 12.676 33.6338 14.4338 33.6338 16.7324C33.6338 19.031 31.876 20.7887 29.5774 20.7887H17.4084C16.5971 20.7887 16.0563 20.2479 16.0563 19.4366C16.0563 18.6253 16.5971 18.0845 17.4084 18.0845H29.5774ZM28.2253 26.1972H21.4647C20.6535 26.1972 20.1126 25.6563 20.1126 24.845C20.1126 24.0338 20.6535 23.4929 21.4647 23.4929H28.2253C30.5239 23.4929 32.2816 25.2507 32.2816 27.5493C32.2816 29.8479 30.5239 31.6056 28.2253 31.6056C27.1436 31.6056 26.0619 31.2 25.3859 30.3887C24.845 29.8479 24.845 29.0366 25.3859 28.4958C25.9267 27.9549 26.738 27.9549 27.2788 28.4958C27.5492 28.7662 27.8197 28.9014 28.2253 28.9014C29.0366 28.9014 29.5774 28.3605 29.5774 27.5493C29.5774 26.738 29.0366 26.1972 28.2253 26.1972Z"
                fill="#1EA81E"
            />
        </svg>
    )
}

const Humidity = () => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.4291 28.22C6.6937 29.7496 7.3379 31.587 8.8678 32.3207C10.3979 33.0565 12.2342 32.4121 12.9696 30.8824C13.705 29.3527 12.9203 23.8896 12.9203 23.8896C12.9203 23.8896 8.16473 26.6903 7.4291 28.22Z"
                fill="#1EA81E"
            />
            <path
                d="M15.6294 28.22C14.8943 29.7496 15.5382 31.587 17.0684 32.3207C18.598 33.0565 20.4345 32.4121 21.1699 30.8824C21.9053 29.3527 21.1207 23.8896 21.1207 23.8896C21.1207 23.8896 16.3648 26.6903 15.6294 28.22Z"
                fill="#1EA81E"
            />
            <path
                d="M19.1288 20.9793C19.8642 19.4497 19.0795 13.9865 19.0795 13.9865C19.0795 13.9865 14.3239 16.7872 13.5883 18.3169C12.8529 19.8466 13.4971 21.684 15.027 22.4176C16.5571 23.1534 18.3934 22.509 19.1288 20.9793Z"
                fill="#1EA81E"
            />
            <path
                d="M23.9529 22.4176C25.4828 23.1534 27.3191 22.509 28.0545 20.9793C28.7899 19.4497 28.0052 13.9865 28.0052 13.9865C28.0052 13.9865 23.2496 16.7872 22.514 18.3169C21.7788 19.8466 22.4228 21.684 23.9529 22.4176Z"
                fill="#1EA81E"
            />
            <path
                d="M26.6775 11.8672C27.4131 10.3373 26.6286 4.8748 26.6286 4.8748C26.6286 4.8748 21.8726 7.67414 21.1374 9.20404C20.402 10.7339 21.0458 12.5704 22.5759 13.3058C24.1058 14.0401 25.9421 13.3973 26.6775 11.8672Z"
                fill="#1EA81E"
            />
            <path
                d="M28.7599 23.8896C28.7599 23.8896 24.0041 26.6903 23.2687 28.22C22.5333 29.7496 23.1775 31.587 24.7072 32.3207C26.2373 33.0565 28.0736 32.4121 28.8092 30.8824C29.5446 29.3527 28.7599 23.8896 28.7599 23.8896Z"
                fill="#1EA81E"
            />
        </svg>
    )
}

const Rain = () => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.7011 15.1728C28.6866 15.1728 28.6733 15.1768 28.6589 15.1769C28.9254 14.5605 29.0747 13.8816 29.0747 13.1673C29.0747 10.3666 26.8042 8.096 24.0034 8.096C23.0135 8.096 22.093 8.38408 21.3124 8.87452C20.2565 6.30827 17.7342 4.49997 14.787 4.49997C10.89 4.49997 7.73097 7.65896 7.73097 11.556C7.73097 11.8505 7.75482 12.1391 7.7899 12.4241C7.77003 12.4239 7.75084 12.4211 7.73097 12.4211C5.11824 12.4211 3 14.5393 3 17.1522C3 19.7649 5.11824 21.8831 7.73097 21.8831H28.7011C30.5542 21.8831 32.0562 20.381 32.0562 18.5279C32.0562 16.6749 30.5542 15.1728 28.7011 15.1728Z"
                fill="#1EA81E"
            />
            <path
                d="M12.2978 30.1493C11.7279 31.335 10.3046 31.8343 9.11896 31.2643C7.9333 30.6944 7.43405 29.2711 8.00399 28.0855C8.57409 26.8998 12.2596 24.7303 12.2596 24.7303C12.2596 24.7303 12.8678 28.9637 12.2978 30.1493Z"
                fill="#1EA81E"
            />
            <path
                d="M18.221 30.1493C17.6513 31.335 16.228 31.8343 15.0423 31.2643C13.8565 30.6944 13.3574 29.2711 13.9274 28.0855C14.4975 26.8998 18.183 24.7303 18.183 24.7303C18.183 24.7303 18.7911 28.9637 18.221 30.1493Z"
                fill="#1EA81E"
            />
            <path
                d="M24.2279 30.1493C23.658 31.335 22.2347 31.8343 21.0491 31.2643C19.8634 30.6944 19.3643 29.2711 19.9341 28.0855C20.5042 26.8998 24.1897 24.7303 24.1897 24.7303C24.1897 24.7303 24.7979 28.9637 24.2279 30.1493Z"
                fill="#1EA81E"
            />
        </svg>
    )
}

export {
    Cloudy,
    Sunny,
    Rainy,
    Storm,
    SunBehindCloud,
    Pin,
    Wind,
    Humidity,
    Rain,
}
