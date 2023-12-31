import React, { useEffect } from 'react'
import gsap from 'gsap'
import './splash.css'

export function LogoIntro() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      '.bg-loader',
      1,
      { width: '100%' },
      { width: '0%', delay: 5, ease: 'expo.easeInOut' },
    )
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      document.body.style.overflow = ''
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-loader">
      <figure>
        <svg
          width="203"
          height="601"
          viewBox="0 0 603 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="star-logo">
            <g filter="url(#filter0_i_2_5)">
              <path
                d="M299 56.5L294 405.5L256.5 349L282.5 419L221.5 423.5L282.5 434.5L262.5 477L293 445.5L291.5 542C246 524 202.5 475 189 425C180.926 373.11 187.79 344.912 216 301C185.52 265.718 174.208 249.479 165.5 203.5C161.786 163.872 169.92 143.292 199.5 108.5C176 117.5 141.409 155.313 123 203.5C111.899 238.228 109.392 259.382 113.5 301C123.776 343.052 133.413 363.161 154 392C122.437 375.019 108.966 356.466 96 301C90.6488 261.405 92.7409 242.408 102 212C82.4144 240.925 74.25 259.459 70 301C69.2723 336.556 73.2448 356.478 88 392C97.956 414.045 106.166 427.075 123.5 451C103.488 437.512 91.9845 425.273 69.5 371C74.7656 404.735 82.9052 421.703 100 451C130.918 491.651 153.658 511.181 207.5 538C244.136 552.834 264.831 557.35 302 559C343.239 556.541 364.161 551.565 398 537C438.148 516.506 457.991 501.888 488 469.5C502.276 453.084 510.364 439.67 522.5 412.5C528.147 397.51 530.097 388.802 532.5 373C512.175 419.469 500.41 435.356 479 452C502.096 420.147 513.267 398.794 528 350.5C533.84 319.816 533.413 302.382 528 271C520.038 244.643 513.874 232.177 501 212.5C508.271 242.146 510.428 258.86 507.5 289C503.244 318.316 498.871 332.406 488.5 354.5C473.776 377.146 464.818 384.948 448 393C465.309 365.561 474.201 349.684 484.5 318C493.876 278.286 492.321 255.042 482 212.5C473.69 186.305 466.092 173.222 450.5 151C432.633 128.751 422.216 119.625 403.5 108.5C417.915 126.75 424.483 137.03 432 155.5C438.615 178.239 438.339 192.261 434 218.5C424.677 252.429 414.04 270.105 386.5 299.5C406.7 335.277 412.948 352.741 415.5 379.5C416.424 410.664 413.76 426.186 403.5 450.5C391 487 332.5 537 311.5 540.5L309 445.5L339.5 477L319.5 434.5L381 424.5L319.5 419L345 350.5L309 405.5L299 56.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M84 93L66 115L49 138.5L34.5 163L22 190L13.5 215.5L6 244L2.5 270.5L0.5 298V313.5L2 330.5L5.5 357L13.5 387L22 415L49.5 465.5L67 490L86.5 512.5L130 548.5L159 564.5L186 578L214.5 588.5L246 596L271.5 600H302H329.5L355 596C375.609 592.104 386.377 589.394 404 583.5C417.601 578.441 424.577 575.401 435.5 569.5C448.2 563.351 454.766 559.559 466 552.5C486.809 537.73 497.621 528.844 515.5 512C529.406 496.999 536.625 488.017 549 471.5C560.202 453.172 566.125 442.349 576 422C584.447 402.819 588.659 390.83 594.5 365.5C599.005 343.256 600.598 328.466 602 298.5C601.784 279.026 600.637 267.666 596.5 246.5C592.244 224.364 588.895 211.991 581 190C570.68 165.305 563.881 153.134 550.5 133.5C537.771 115.187 529.503 105.107 512.5 87.5C497.367 72.7708 487.737 64.7356 467.5 51C448.483 38.5884 437.357 32.3923 416.5 23L389.5 14L362.5 7.5L332 2.5L296.5 1.5L266.5 4L240.5 7.5L212 14.5L185.5 23.5L159 36.5L131.5 53.5L109.5 70L84 93ZM191 53.5L223.5 42L240.5 38L260 33.5L293 30.5H323L351.5 35L379.5 42L411 53.5L443.5 70.5L472.5 91.5L497.5 115L514.5 135L529 155.5L542 178L553.5 202L561 225.5L567 249.5L571.5 277V298.5L570 329.5L567 350.5L561.5 374.5L553 399L542 423.5L529.5 446.5L513.5 469.5L495.5 490L476 507.5L454 524.5L434 537L408.5 549.5L385.5 559L361.5 565L348 568L329.5 570L315.5 571.5H299.5H280.5L256 568L234.5 563L213 557L189 547.5L170.5 538L138.5 518L116 498.5L95.5 476.5L79 455L64.5 432.5L53.5 410.5L43.5 384.5L33 342.5L30.5 319.5V298.5L32 270.5L36 244L41.5 222L49.5 202L59.5 178.5L70.5 158L85.5 137L104 115L128.5 91L159 70L191 53.5Z"
                fill="white"
              />
            </g>
            <path
              d="M297 1L296.5 1.5M296.5 1.5L266.5 4L240.5 7.5L212 14.5L185.5 23.5L159 36.5L131.5 53.5L109.5 70L84 93L66 115L49 138.5L34.5 163L22 190L13.5 215.5L6 244L2.5 270.5L0.5 298V313.5L2 330.5L5.5 357L13.5 387L22 415L49.5 465.5L67 490L86.5 512.5L130 548.5L159 564.5L186 578L214.5 588.5L246 596L271.5 600H302H329.5L355 596C375.609 592.104 386.377 589.394 404 583.5C417.601 578.441 424.577 575.401 435.5 569.5C448.2 563.351 454.766 559.559 466 552.5C486.809 537.73 497.621 528.844 515.5 512C529.406 496.999 536.625 488.017 549 471.5C560.202 453.172 566.125 442.349 576 422C584.447 402.819 588.659 390.83 594.5 365.5C599.005 343.256 600.598 328.466 602 298.5C601.784 279.026 600.637 267.666 596.5 246.5C592.244 224.364 588.895 211.991 581 190C570.68 165.305 563.881 153.134 550.5 133.5C537.771 115.187 529.503 105.107 512.5 87.5C497.367 72.7708 487.737 64.7356 467.5 51C448.483 38.5884 437.357 32.3923 416.5 23L389.5 14L362.5 7.5L332 2.5L296.5 1.5ZM293 30.5L260 33.5L240.5 38L223.5 42L191 53.5L159 70L128.5 91L104 115L85.5 137L70.5 158L59.5 178.5L49.5 202L41.5 222L36 244L32 270.5L30.5 298.5V319.5L33 342.5L43.5 384.5L53.5 410.5L64.5 432.5L79 455L95.5 476.5L116 498.5L138.5 518L170.5 538L189 547.5L213 557L234.5 563L256 568L280.5 571.5H299.5H315.5L329.5 570L348 568L361.5 565L385.5 559L408.5 549.5L434 537L454 524.5L476 507.5L495.5 490L513.5 469.5L529.5 446.5L542 423.5L553 399L561.5 374.5L567 350.5L570 329.5L571.5 298.5V277L567 249.5L561 225.5L553.5 202L542 178L529 155.5L514.5 135L497.5 115L472.5 91.5L443.5 70.5L411 53.5L379.5 42L351.5 35L323 30.5H293ZM299 56.5L294 405.5L256.5 349L282.5 419L221.5 423.5L282.5 434.5L262.5 477L293 445.5L291.5 542C246 524 202.5 475 189 425C180.926 373.11 187.79 344.912 216 301C185.52 265.718 174.208 249.479 165.5 203.5C161.786 163.872 169.92 143.292 199.5 108.5C176 117.5 141.409 155.313 123 203.5C111.899 238.228 109.392 259.382 113.5 301C123.776 343.052 133.413 363.161 154 392C122.437 375.019 108.966 356.466 96 301C90.6488 261.405 92.7409 242.408 102 212C82.4144 240.925 74.25 259.459 70 301C69.2723 336.556 73.2448 356.478 88 392C97.956 414.045 106.166 427.075 123.5 451C103.488 437.512 91.9845 425.273 69.5 371C74.7656 404.735 82.9052 421.703 100 451C130.918 491.651 153.658 511.181 207.5 538C244.136 552.834 264.831 557.35 302 559C343.239 556.541 364.161 551.565 398 537C438.148 516.506 457.991 501.888 488 469.5C502.276 453.084 510.364 439.67 522.5 412.5C528.147 397.51 530.097 388.802 532.5 373C512.175 419.469 500.41 435.356 479 452C502.096 420.147 513.267 398.794 528 350.5C533.84 319.816 533.413 302.382 528 271C520.038 244.643 513.874 232.177 501 212.5C508.271 242.146 510.428 258.86 507.5 289C503.244 318.316 498.871 332.406 488.5 354.5C473.776 377.146 464.818 384.948 448 393C465.309 365.561 474.201 349.684 484.5 318C493.876 278.286 492.321 255.042 482 212.5C473.69 186.305 466.092 173.222 450.5 151C432.633 128.751 422.216 119.625 403.5 108.5C417.915 126.75 424.483 137.03 432 155.5C438.615 178.239 438.339 192.261 434 218.5C424.677 252.429 414.04 270.105 386.5 299.5C406.7 335.277 412.948 352.741 415.5 379.5C416.424 410.664 413.76 426.186 403.5 450.5C391 487 332.5 537 311.5 540.5L309 445.5L339.5 477L319.5 434.5L381 424.5L319.5 419L345 350.5L309 405.5L299 56.5Z"
              stroke="#DDDDDD"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_2_5"
              x="0"
              y="0.646454"
              width="602.5"
              height="603.854"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_2_5"
              />
            </filter>
          </defs>
        </svg>
      </figure>
    </div>
  )
}
