import LocalsBtn from "../localsBtn/LocalsBtn.jsx";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="m-auto flex items-center justify-between rounded-t-2xl bg-neutral-700 p-3 text-white xl:w-10/12">
      <Logo />
      <section>
        <h2 className="mb-3">Information</h2>
        <nav>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Vacancies</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="mb-3">Apps</h2>
        <a
          href="#"
          className="bg-primary mb-3 inline-block rounded-md px-3 py-1"
        >
          Download
        </a>
        <nav>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#">App Store</a>
            </li>
            <li>
              <a href="#">Google Play</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="mb-3">Contacts</h2>
        <address className="flex flex-col gap-1">
          <a href="mailto:supportfilmify@gmail.com" className="not-italic">
            supportfilmify@gmail.com
          </a>
          <a href="tel:+380501567443" className="not-italic">
            +380 50 156 74 43
          </a>
        </address>
      </section>
      <div>
        <section className="mb-3">
          <h2 className="hidden">Social</h2>
          <nav>
            <ul className="flex flex-row gap-8">
              <li>
                <a href="https://youtube.com/" target="_blank">
                  <svg className="size-[24px] fill-none stroke-white">
                    <use href="/icons.svg#icon-youtube"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank">
                  <svg className="size-[24px] fill-none stroke-white">
                    <use href="/icons.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/" target="_blank">
                  <svg className="size-[24px] fill-none stroke-white">
                    <use href="/icons.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <LocalsBtn />
      </div>
    </footer>
  );
};

export default Footer;
