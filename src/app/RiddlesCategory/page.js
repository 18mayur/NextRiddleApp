import Link from "next/link";
import "./style.css";

const RiddlesCategory = () => {
  return (
    <>
      <div className="container mx-auto mt-6 w-full flex justify-center">
        <div class="w-full  p-4 bg-svg border rounded-4xl shadow-sm sm:p-6  ">
          <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            RIDDLE Category
          </h5>
          <div className="flex gap-4 ">
            <ul class="my-4 w-full space-y-3">
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 font3 text-2xl !font-light text-gray-900 rounded-lg  hover:bg-[#845ec2] group hover:shadow bg-[#9471ccef]  dark:text-white"
                >
                  <svg
                    ariaHidden="true"
                    class="h-5"
                    viewBox="0 0 292 292"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                      fill="#3259A5"
                    />
                    <path
                      d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
                      fill="white"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                   <Link href="/RiddlesCategory/science"> Science</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 font3 text-2xl !font-light text-gray-900 rounded-lg bg-[#845ec2] hover:bg-[#9471ccef] group hover:shadow dark:text-white"
                >
                  <svg
                    ariaHidden="true"
                    svg
                    class="h-5"
                    viewBox="0 0 75.591 75.591"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="a"
                      gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#ff1b2d" />
                      <stop offset=".3" stopColor="#ff1b2d" />
                      <stop offset=".614" stopColor="#ff1b2d" />
                      <stop offset="1" stopColor="#a70014" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#9c0000" />
                      <stop offset=".7" stopColor="#ff4b4b" />
                      <stop offset="1" stopColor="#ff4b4b" />
                    </linearGradient>
                    <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                      <path
                        d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                        fill="url(#a)"
                      />
                      <path
                        d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                        fill="url(#b)"
                      />
                    </g>
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    <Link href="/RiddlesCategory/math"> Math</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 font3 text-2xl !font-light text-gray-900 rounded-lg bg-[#845ec2] hover:bg-[#9471ccef group hover:shadow  dark:text-white"
                >
                  <svg
                    ariaHidden="true"
                    svg
                    class="h-5"
                    viewBox="0 0 75.591 75.591"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="a"
                      gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#ff1b2d" />
                      <stop offset=".3" stopColor="#ff1b2d" />
                      <stop offset=".614" stopColor="#ff1b2d" />
                      <stop offset="1" stopColor="#a70014" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#9c0000" />
                      <stop offset=".7" stopColor="#ff4b4b" />
                      <stop offset="1" stopColor="#ff4b4b" />
                    </linearGradient>
                    <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                      <path
                        d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                        fill="url(#a)"
                      />
                      <path
                        d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                        fill="url(#b)"
                      />
                    </g>
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    <Link href="/RiddlesCategory/logic"> Logic</Link>
                  </span>
                </a>
              </li>
            </ul>
            <ul class="my-4 w-full space-y-3">
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 font3 text-2xl !font-light text-gray-900 rounded-lg bg-[#d23927] hover:bg-[#d23827b9] group hover:shadow dark:text-white"
                >
                  <svg
                    ariaHidden="true"
                    class="h-5"
                    viewBox="0 0 292 292"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
                      fill="#3259A5"
                    />
                    <path
                      d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
                      fill="white"
                    />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    <Link href="/RiddlesCategory/mystery"> Mystery</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 font3 text-2xl !font-light text-gray-900 rounded-lg bg-[#d23927] hover:bg-[#d23827b9] group hover:shadow  dark:text-white"
                >
                  <svg
                    ariaHidden="true"
                    svg
                    class="h-5"
                    viewBox="0 0 75.591 75.591"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="a"
                      gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#ff1b2d" />
                      <stop offset=".3" stopColor="#ff1b2d" />
                      <stop offset=".614" stopColor="#ff1b2d" />
                      <stop offset="1" stopColor="#a70014" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#9c0000" />
                      <stop offset=".7" stopColor="#ff4b4b" />
                      <stop offset="1" stopColor="#ff4b4b" />
                    </linearGradient>
                    <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                      <path
                        d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                        fill="url(#a)"
                      />
                      <path
                        d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                        fill="url(#b)"
                      />
                    </g>
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    <Link href="/RiddlesCategory/who‑am‑i"> who‑am‑i</Link>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-3 font3 text-2xl !font-light text-gray-900 rounded-lg bg-[#d23927] hover:bg-[#d23827b9] group hover:shadow dark:text-white"
                >
                  <svg
                    ariaHidden="true"
                    svg
                    class="h-5"
                    viewBox="0 0 75.591 75.591"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="a"
                      gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#ff1b2d" />
                      <stop offset=".3" stopColor="#ff1b2d" />
                      <stop offset=".614" stopColor="#ff1b2d" />
                      <stop offset="1" stopColor="#a70014" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
                      gradientUnits="userSpaceOnUse"
                      x2="1"
                    >
                      <stop offset="0" stopColor="#9c0000" />
                      <stop offset=".7" stopColor="#ff4b4b" />
                      <stop offset="1" stopColor="#ff4b4b" />
                    </linearGradient>
                    <g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
                      <path
                        d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
                        fill="url(#a)"
                      />
                      <path
                        d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
                        fill="url(#b)"
                      />
                    </g>
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">
                    <Link href="/RiddlesCategory/funny">Funny</Link>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiddlesCategory;
