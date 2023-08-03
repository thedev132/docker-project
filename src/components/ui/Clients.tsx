import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import { Autoplay, Navigation, Pagination, Scrollbar, Mousewheel } from 'swiper/modules';
import Image from "next/image";

export default function Clients() {
    return (
        <section>
                <div className="ca60c cknuf chyag ck7tl cj5a0">

                    {/* <!-- Particles animation --> */}
                    <div className="cl2cn c9pxh cknuf chyag ck7tl cj5a0">
                        <div className="cl2cn c9pxh c0mvq" aria-hidden="true">
                            <canvas data-particle-animation="" data-particle-quantity="5"></canvas>
                        </div>
                    </div>
                    
                    <div className="ctvyg cy0uw">
                        <div className="co970">
                            {/* <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
                            <!-- * Initialized in src/js/main.js -->
                            <!-- * Custom styles in src/css/additional-styles/theme.scss --> */}
                                <Swiper className="swiper-wrapper cyvt8 items-center cmehy clients-carousel swiper-container relative cm39l cc4v0 cqez1 c0h98 crvsw cfnmv cb98v ctgyu cysd2 cgxgf c45xe cv2ch c1o86 chum8 c9ygy"
                                    // {/* <!-- Carousel items --> */}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 3,
                                                spaceBetween: 30
                                              },
                                              // when window width is >= 480px
                                              480: {
                                                slidesPerView: 5,
                                                spaceBetween: 45
                                              },
                                              // when window width is >= 640px
                                              640: {
                                                slidesPerView: 7,
                                                spaceBetween: 64
                                              }
                                        }}
                                        slidesPerView={'auto'}
                                        modules={[Autoplay]}
                                        noSwiping = {true}
                                        noSwipingClass = {'swiper-slide'}
                                        loop={true}
                                        speed={5000}
                                        centeredSlides={false}
                                        autoplay={{delay: 0, disableOnInteraction: true}}
                                    >
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-01.svg" alt="Client 01" width="110" height="21"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-02.svg" alt="Client 02" width="70" height="25"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide cn53t" src="https://preview.cruip.com/stellar/images/client-03.svg" alt="Client 03" width="107" height="33"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-04.svg" alt="Client 04" width="85" height="36"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-05.svg" alt="Client 05" width="86" height="18"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-06.svg" alt="Client 06" width="78" height="34"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-07.svg" alt="Client 07" width="83" height="23"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-08.svg" alt="Client 08" width="98" height="26"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide cuwsu" src="https://preview.cruip.com/stellar/images/client-09.svg" alt="Client 09" width="92" height="28"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-01.svg" alt="Client 01" width="110" height="21"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-02.svg" alt="Client 02" width="70" height="25"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide cn53t" src="https://preview.cruip.com/stellar/images/client-03.svg" alt="Client 03" width="107" height="33"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-04.svg" alt="Client 04" width="85" height="36"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-05.svg" alt="Client 05" width="86" height="18"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-06.svg" alt="Client 06" width="78" height="34"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-07.svg" alt="Client 07" width="83" height="23"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide" src="https://preview.cruip.com/stellar/images/client-08.svg" alt="Client 08" width="98" height="26"/></SwiperSlide>
                                        <SwiperSlide><Image className="swiper-slide cuwsu" src="https://preview.cruip.com/stellar/images/client-09.svg" alt="Client 09" width="92" height="28"/></SwiperSlide>
                                </Swiper>
                        </div>
                    </div>
                </div>
        </section>
    )
}