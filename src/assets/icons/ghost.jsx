import React from 'react'

const ghost = ({ className, fill }) => (

    <svg width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M5.5 0.583374C6.79293 0.583374 8.03291 1.09699 8.94715 2.01123C9.86139 2.92547 10.375 4.16544 10.375 5.45837V9.52087C10.3752 9.92601 10.2456 10.3206 10.0052 10.6467C9.76484 10.9728 9.42631 11.2133 9.03925 11.333C8.6522 11.4527 8.23699 11.4452 7.85448 11.3117C7.47197 11.1783 7.14228 10.9257 6.91375 10.5912C6.77225 10.8418 6.56671 11.0503 6.31817 11.1954C6.06962 11.3405 5.78699 11.417 5.49919 11.417C5.21139 11.417 4.92876 11.3405 4.68021 11.1954C4.43166 11.0503 4.22612 10.8418 4.08463 10.5912C3.86093 10.9177 3.54063 11.1661 3.16866 11.3014C2.79669 11.4367 2.39169 11.4522 2.01047 11.3457C1.62925 11.2392 1.29093 11.016 1.04295 10.7075C0.794968 10.399 0.649767 10.0206 0.627708 9.62542L0.625 9.52033V5.45837C0.625 4.16544 1.13861 2.92547 2.05285 2.01123C2.96709 1.09699 4.20707 0.583374 5.5 0.583374V0.583374ZM5.5 1.66671C4.51689 1.66669 3.5722 2.04852 2.86521 2.73166C2.15822 3.4148 1.74421 4.34584 1.7105 5.32837L1.70833 5.45837V9.49162L1.70942 9.56637C1.71875 9.72876 1.7766 9.8846 1.87549 10.0137C1.97438 10.1429 2.10975 10.2394 2.26408 10.2907C2.41841 10.342 2.5846 10.3459 2.74114 10.3017C2.89768 10.2576 3.03737 10.1675 3.14213 10.043L3.18979 9.98021C3.29351 9.82813 3.43428 9.70498 3.5988 9.6224C3.76332 9.53982 3.94617 9.50052 4.13009 9.50822C4.31401 9.51592 4.49294 9.57035 4.64999 9.66639C4.80703 9.76243 4.93702 9.89691 5.02767 10.0571C5.07465 10.1407 5.143 10.2103 5.22572 10.2588C5.30844 10.3073 5.40256 10.3329 5.49844 10.3331C5.59433 10.3333 5.68853 10.3079 5.77142 10.2597C5.85431 10.2115 5.92289 10.1422 5.97017 10.0587C6.05688 9.90483 6.17992 9.77445 6.32856 9.67897C6.4772 9.5835 6.64694 9.52582 6.82298 9.51097C6.99902 9.49612 7.17602 9.52455 7.33856 9.59378C7.50109 9.66301 7.64423 9.77094 7.7555 9.90817L7.80804 9.97858C7.90207 10.1167 8.03638 10.2224 8.19268 10.2814C8.34898 10.3404 8.51967 10.3498 8.6815 10.3083C8.84332 10.2668 8.98842 10.1764 9.09703 10.0495C9.20563 9.92252 9.27246 9.76518 9.28842 9.59887L9.29167 9.52087V5.45837C9.29167 4.45276 8.89219 3.48834 8.18111 2.77726C7.47004 2.06619 6.50561 1.66671 5.5 1.66671V1.66671ZM5.5 6.00004C6.09854 6.00004 6.58333 6.60671 6.58333 7.35421C6.58333 8.10171 6.09854 8.70837 5.5 8.70837C4.90146 8.70837 4.41667 8.10171 4.41667 7.35421C4.41667 6.60671 4.90146 6.00004 5.5 6.00004ZM4.14583 3.83337C4.36132 3.83337 4.56798 3.91898 4.72036 4.07135C4.87273 4.22372 4.95833 4.43039 4.95833 4.64587C4.95833 4.86136 4.87273 5.06803 4.72036 5.2204C4.56798 5.37277 4.36132 5.45837 4.14583 5.45837C3.93035 5.45837 3.72368 5.37277 3.57131 5.2204C3.41894 5.06803 3.33333 4.86136 3.33333 4.64587C3.33333 4.43039 3.41894 4.22372 3.57131 4.07135C3.72368 3.91898 3.93035 3.83337 4.14583 3.83337ZM6.85417 3.83337C7.06966 3.83337 7.27632 3.91898 7.42869 4.07135C7.58106 4.22372 7.66667 4.43039 7.66667 4.64587C7.66667 4.86136 7.58106 5.06803 7.42869 5.2204C7.27632 5.37277 7.06966 5.45837 6.85417 5.45837C6.63868 5.45837 6.43202 5.37277 6.27964 5.2204C6.12727 5.06803 6.04167 4.86136 6.04167 4.64587C6.04167 4.43039 6.12727 4.22372 6.27964 4.07135C6.43202 3.91898 6.63868 3.83337 6.85417 3.83337Z" fill={fill || '#70559B'} />
    </svg>
)

export default ghost