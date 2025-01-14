import Link from 'next/link';
import Image from 'next/image';

function IconClock() {
  return (
    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
        fill="#8BACD9"
      />
    </svg>
  );
}

function IconEthereum() {
  return (
    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill="#00FFF8"
      />
    </svg>
  );
}

function IconView() {
  return (
    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h48v48H0z" />
        <path
          d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <article className="max-w-[21.875rem] rounded-[.9375rem] bg-blue-800 p-6 shadow-[0px_25px_50px_0px_rgba(0,0,0,0.10)] sm:pb-8">
        <div className="relative size-[17.375rem] overflow-hidden rounded-lg sm:size-[18.875rem]">
          <Image
            src="/image-equilibrium.jpg"
            alt="Equilibrium"
            sizes="100vw"
            priority
            fill
          />
          <Link
            href="#"
            className="bg-cyan/[0.503] absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100"
            aria-label="View Equilibrium"
          >
            <IconView />
          </Link>
        </div>
        <h1 className="mt-6 text-[1.375rem] font-semibold leading-normal text-white sm:leading-[1.75rem]">
          <Link href="#" className="hover:text-cyan">
            Equilibrium #3429
          </Link>
        </h1>
        <p className="mt-3 text-lg font-light leading-[1.625rem] sm:mt-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="mt-4 flex items-center justify-between sm:mt-6">
          <div className="text-cyan flex items-center gap-x-[.4053rem] text-[.9375rem] font-semibold leading-normal sm:text-base sm:leading-[1.25rem]">
            <IconEthereum />
            <span>0.041 ETH</span>
          </div>
          <div className="flex items-center gap-x-[.5625rem] text-[.9375rem] leading-normal sm:text-base sm:leading-[1.25rem]">
            <IconClock />
            <span>3 days left</span>
          </div>
        </div>
        <div className="my-4 h-px w-full bg-blue-700 sm:mt-6" />
        <div className="flex items-center gap-x-4">
          <Image
            src="/image-avatar.png"
            alt="Jules Wyvern"
            className="rounded-full border border-white"
            width={33}
            height={33}
            priority
          />
          <p className="text-[.9375rem] leading-normal sm:text-base sm:leading-normal">
            Creation of{' '}
            <Link
              href="#"
              className="hover:text-cyan ml-[.1875rem] text-white transition-colors duration-300"
            >
              Jules Wyvern
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
